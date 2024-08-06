+++
title = 'Device Routing'
draft = false
description = 'Implements modification of the forward origin path of the URL to return device-specific content.'
categories = ['Traffic Routing', 'Developer Tools']
modules = []
icon = ''
features = ['onClientRequest', 'request.device', 'request.route']
useCase = 'Routing requests based on the device type at the edge ensures that users receive content optimized for their specific device. This enhances user experience by delivering device-appropriate content efficiently and reduces the load on the origin server.'
featured = false
demoURL = 'https://www.edgecompute.live/edgeworkers/personalization/forwardDevicetype'
gitURL = 'https://github.com/akamai/edgeworkers-examples/tree/master/edgecompute/examples/personalization/forward-devicetype'

[benefits]
	'Device Heuristics' = "Customize dynamic behavior based on the user's device."
	'Ease Development' = "Enable developers to modify application behavior without touching origin server logic."

+++