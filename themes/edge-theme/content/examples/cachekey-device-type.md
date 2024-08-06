+++
title = 'Cachekey Device Type'
draft = false
description = 'This example includes the device type (tablet or mobile) from a PMUSER variable in the computed cache key for an Edge Server.'
categories = ['Performance', 'Developer Tools']
modules = []
icon = ''
features = ['onClientRequest', 'request.setVariable', 'request.cacheKey']
useCase = 'Including device type in the cache key ensures that content is appropriately cached and served based on the user’s device. This enhances performance by delivering device-specific cached content, improving load times and user experience.'
featured = false
demoURL = 'https://www.edgecompute.live/edgeworkers/personalization/cachekeyDevicetype'
gitURL = 'https://github.com/akamai/edgeworkers-examples/tree/master/edgecompute/examples/personalization/cachekey-devicetype'

[benefits]
	'Device Heuristics' = "Customize dynamic behavior based on the user's device."
	'Cache Integration' = "Combine performance benefits from CDN caching with dynamic edge compute logic."

+++