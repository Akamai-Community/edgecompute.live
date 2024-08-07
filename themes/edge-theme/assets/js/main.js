(function ($, window, document) {
	const $html = $('html');
	const $win = $(window);
	const $doc = $(document);
	const $header = $('.header');

	/**
	 * Handler to trigger "widthResize" event when the width of the element changes.
	 * // iOs device window resize helper
	 */
	$.event.special.widthResize = {
		setup: function() {
			const $this = $(this);
			$this.data('currentWidth', $this.width());

			$this.on('resize.widthResize', function() {
				const newWidth = $this.width();
				const prevWidth = $this.data('currentWidth');

				if (newWidth !== prevWidth) {
					$this.data('currentWidth', newWidth).trigger('widthResize');
				}
			});
		},
		teardown: function() {
			$(this).off('resize.widthResize');
		}
	};

	const getWindowHeight = () => $win.height();
	const getWindowWidth = () => $win.width();

	/**
	 * Set CSS Variable
	 * @param {String} name
	 * @param {Number} value
	 * @param {String} unit *Optional* - Type of unit
	 * @param {Object} element *Optional* - Element to set variable on
	 * @returns {Void}
	 */
	function setCSSVariable(name, value, unit = '', element = $html) {
		element.css(`--${name}`, `${value}${unit}`);
	}

	/**
	* Handle CSS Variables
	*/
	setCSSVariable('dvh', getWindowHeight() * 0.01, 'px');
	setCSSVariable('current-dvh', getWindowHeight() * 0.01, 'px');
	setCSSVariable('dvw', getWindowWidth(), 'px');
	setCSSVariable('header-height', $header.outerHeight(), 'px');

	$win.on('resize', function() {
		setCSSVariable('current-dvh', getWindowHeight() * 0.01, 'px');
		setCSSVariable('header-height', $header.outerHeight(), 'px');
	});

	$win.on('widthResize', function() {
		setCSSVariable('dvh', getWindowHeight() * 0.01, 'px');
		setCSSVariable('dvw', getWindowWidth(), 'px');
	});

	/**
	 * Format date to DD/MM/YYYY
	 *
	 * @param {String} dateString
	 * @returns {String}
	 */
	function formatDate(dateString) {
		const date = new Date(dateString);
		const day = String(date.getDate()).padStart(2, '0');
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const year = date.getFullYear();
		return `${day}/${month}/${year}`;
	}

	/**
	 * Convert URL to API URL.
	 *
	 * @param {String} gitUrl
	 * @param {String} filePath
	 * @returns {String}
	 */
	function getGitHubApiUrl(gitUrl, filePath) {
		const matches = gitUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);

		if (matches) {
			const owner = matches[1];
			const repo = matches[2];
			return `https://api.github.com/repos/${owner}/${repo}/commits?path=${encodeURIComponent(filePath)}`;
		}
		return null;
	}

	/**
	 * Extract file path from GitHub repository URL
	 *
	 * @param {String} gitUrl
	 * @returns {String|null}
	 */
	function getFilePathFromGitUrl(gitUrl) {
		const matches = gitUrl.match(/github\.com\/[^\/]+\/[^\/]+\/tree\/[^\/]+\/(.+)/);

		if (matches) {
			const filePath = matches[1];
			return decodeURIComponent(filePath);
		}
		return null;
	}

	/**
     * Fetch code block.
     * @param {String} url
     * @returns {Promise}
     */
    function fetchCodeBlock(url) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: url,
                dataType: 'text',
                success: function(data) {
                    try {
                        resolve(data);
                    } catch (e) {
                        reject(new Error('Failed to stringify data: ' + e.message));
                    }
                },
                error: function(xhr, status, error) {
                    reject(new Error(`Error ${xhr.status}: ${xhr.statusText}`));
                }
            });
        });
    }

	/**
	 * Switch tab.
	 */
	function switchTab() {
		const $this = $(this);
		const $target = $this.data('target');
		const $tabs = $this.closest('.js-tabs').find('.tab');

		$this.parent()
			.addClass('current')
		.siblings()
			.removeClass('current');

		if($target == '*') {
			$tabs.addClass('current');

			$this.closest('.js-tabs').addClass('is-both');
		} else {
			$tabs.eq($target - 1)
				.addClass('current')
			.siblings()
				.removeClass('current');

			$this.closest('.js-tabs').removeClass('is-both');
		}
	}

    /**
	 * Convert category name to URL-friendly.
	 *
	 * @param {String} str
	 * @returns {String}
	 */
	function toUrlFriendly(str) {
        return str.toLowerCase().replace(/\s+/g, '-');
    }

    /**
	 * Convert URL to category name.
	 *
	 * @param {String} str
	 * @returns {String}
	 */
	function fromUrlFriendly(str) {
        return str.replace(/-/g, ' ');
    }

	/**
	 * Handle tab switch.
	 */
	$('.js-tabs .tabs__nav span').on('click', switchTab);

	/**
	 * Handle copy code button.
	 */
	let copyTimeout;

	$('.js-copy-code').on('click', function() {
		const $tabs =$(this).closest('.tabs-code');
		const $codeElement = $tabs.find('.js-entry-code code').text();
		const $temp = $('<textarea>').css({
			position: 'absolute',
			left: '-9999px',
			opacity: '0',
		}).val($codeElement);

		$('body').append($temp);
		$temp.select();
		document.execCommand('copy');
		$temp.remove();

		clearTimeout(copyTimeout);
		$tabs.addClass('copied');

		copyTimeout = setTimeout(() => {
			$tabs.removeClass('copied');
		}, 1000);
	});

	/**
	 * Print code.
	 */
	$('pre[data-ajax]').each(function() {
		const gitUrl = $(this).data('ajax');
		const filePath = 'main.js';
		const apiUrl = `https://raw.githubusercontent.com${gitUrl.replace('https://github.com', '').replace('/tree', '')}/${filePath}`;
		const $codeContainer = $(this).find('code');

		fetchCodeBlock(apiUrl)
			.then(codeBlocks => {
				$codeContainer.text(codeBlocks);
				Prism.highlightElement($codeContainer[0]);
			})
			.catch(error => {
				console.error(error);
				$codeContainer.text('Source code not available for this example.');
			});
	});

	/**
	 * Print latest commit date.
	 */
	$(document).ready(function() {
		$('.js-time-updated').each(function() {
			const $this = $(this);
			const gitUrl = $this.data('api-url');

			if (gitUrl) {
				const filePath = getFilePathFromGitUrl(gitUrl);

				if (filePath) {
					const apiUrl = getGitHubApiUrl(gitUrl, filePath);

					if (apiUrl) {
						$.getJSON(apiUrl, function(data) {
							if (data && data.length > 0) {
								const lastCommitDate = new Date(data[0].commit.committer.date);
								$this.text(formatDate(lastCommitDate.toISOString()));
							} else {
								$this.text('No updates found');
							}
						}).fail(function() {
							$this.text('Error fetching data');
						});
					} else {
						$this.text('Invalid GitHub URL');
					}
				} else {
					$this.text('Invalid file path in GitHub URL');
				}
			} else {
				$this.text('GitHub URL is empty');
			}
		});
	});


	/**
	 * Handle select filter.
	 */
	const pathArray = window.location.pathname.split('/');
	const categoryFromURL = fromUrlFriendly(decodeURIComponent(pathArray[2]));
	const isFoundCategory = $('#category option').filter((_, option) => $(option).val() === categoryFromURL).length > 0;

	if (isFoundCategory) {
        $('#category').val(categoryFromURL);
    }

	$('.js-filters-apply').on('click', function(e) {
		e.preventDefault();

		const selectedCategory = toUrlFriendly($('#category').val());
		if (selectedCategory) {
			window.location.href = '/categories/' + encodeURIComponent(selectedCategory) + '/';
		} else if (selectedCategory == '') {
			window.location.href = '/examples/';
		}
	});

	/**
	 * Handle Example Demo change.
	 */
	$('.section__nav').on('click', 'a[data-demo-url]', function(e) {
        e.preventDefault();

        const newSrc = $(this).data('demo-url');
        $('.js-demo-iframe').attr('src', newSrc);
        $('.js-demo-url').text(newSrc);
    });

	/**
	 * Handle magnific popup.
	 */
	$('.btn-play').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                }
            }
        }
    });

	/**
	 * Handle Menu.
	 */
	$('.nav-btn').on('click', function(e) {
		$('body').toggleClass('nav-open');
	});
})(jQuery, window, document);
