+++
title = 'Traffic Allow'
draft = false
categories = ['Traffic Routing', 'Security', 'Geolocation']
modules = []
icon = ''
features = ['onClientRequest', 'request.userLocation', 'request.respondWith']
useCase = 'By enforcing geographic-based allow lists at the edge, this use case improves security and compliance by blocking requests from embargoed countries with a 403 response while allowing legitimate traffic through. This reduces the load on the origin server and enhances response times.'
featured = false
demoURL = 'https://www.edgecompute.live/traffic-allow-list'
gitURL = 'https://github.com/akamai/edgeworkers-examples/tree/master/edgecompute/examples/traffic-filtering/traffic-allow-list'

[benefits]
	'Enhance Security' = "Enable security features at the edge, preventing bad requests from reaching your origin server."
	'Geolocation Information' = "Apply dynamic business logic based on the request's origin location information."
	'Improve Reliability' = "Move compute cycles to the edge, reducing load and improving reliability and performance of origin servers."
	'Ease Development' = "Enable developers to modify application behavior without touching origin server logic."

+++

Implements an allow list depending on the geographic locale of the end user. If the user is arriving from United States embargoed countries, a 403 deny will occur.