+++
title = 'Conference/Meeting Details'
draft = false
description = 'Implements a Conference Attendance Code API call that returns the meeting details of a conference as HTML if the user provides the correct code. With abc123 in the key GET parameter, the user is shown conference details. If the parameter is incorrect, an error is returned, keeping the information away from the browser to maintain confidentiality.'
categories = ['Traffic Routing']
modules = ['url-search-params']
icon = ''
features = ['onClientRequest', 'request.respondWith']
useCase = 'Providing conference details at the edge ensures quick access for authorized users while maintaining confidentiality by keeping sensitive information away from the browser. This reduces the load on the origin server and improves response times.'
featured = false
demoURL = 'https://www.edgecompute.live/edgeworkers/cdetails/conference-details.html'
gitURL = 'https://github.com/akamai/edgeworkers-examples/tree/master/edgecompute/examples/traffic-filtering/conference-details'

[benefits]
	'Reduce Latency' = "Speed up response times by moving work closer to users."
	'Improve Reliability' = "Move compute cycles to the edge, reducing load and improving reliability and performance of origin servers."
	'Improve Experience' = "Add additional features on top of your existing infrastructure to improve the user experience. "
	'Ease Development' = "Enable developers to modify application behavior without touching origin server logic."

+++


