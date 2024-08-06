+++
title = 'HTML Rewriter'
draft = false
description = 'Leverage EdgeWorkers html-rewriter to efficiently generate dynamic HTML content by combining JSON data from an API endpoint with an HTML template. Additionally, if the request is made by a logged-in user, a discount code will be dynamically incorporated into the rendered document. By performing these operations at the Edge with EdgeWorkers, we enhance site performance, offload server resources, and unlock SEO advantages. The template, JSON data, and rendered content can all be efficiently cached at the Edge, further optimizing response times and improving the overall site experience.'
categories = ['Developer Tools']
modules = ['log', 'html-rewriter', 'http-request', 'create-response', 'url-search-params']
icon = ''
features = ['responseProvider']
useCase = 'Generating dynamic HTML content at the edge enhances performance, reduces server load, and provides SEO benefits. Caching templates, JSON data, and rendered content at the edge optimizes response times and improves the overall user experience.'
featured = false
demoURL = 'https://www.edgecompute.live/edgeworkers/html_rewriter_content_assembly/menu_template.html'
gitURL = 'https://github.com/akamai/edgeworkers-examples/tree/master/edgecompute/examples/stream/dynamic%20content%20assembly'

[benefits]
	'Dynamic Flexibilty' = "Modify in-flight content on its way between client and origin server and back to clients."
	'Personalized Experience' = "Provides personalized content based on location, device, or request details."
	'Cache Integration' = "Combine performance benefits from CDN caching with dynamic edge compute logic."
	'Ease Development' = "Enable developers to modify application behavior without touching origin server logic."
+++


