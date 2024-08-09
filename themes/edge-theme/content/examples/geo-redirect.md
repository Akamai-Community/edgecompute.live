+++
title = 'Geo Redirect'
draft = false
categories = ['Geolocation']
modules = []
icon = ''
features = ['onClientRequest', 'request.host', 'request.userLocation', 'request.respondWith']
useCase = "Redirecting visitors based on their geographic location ensures that users are presented with the most relevant content for their region. This improves user experience by providing localized content quickly and efficiently, reducing the need for additional server-side processing."
featured = false
demoURL = 'https://www.edgecompute.com/edgeworkers/trafficRouting/redirectGeo'
gitURL = 'https://github.com/akamai/edgeworkers-examples/tree/master/edgecompute/examples/traffic-routing/redirect-geo'

[benefits]
	'Reduce Latency' = "Speed up response times by moving work closer to users."
	'Geolocation Information' = "Apply dynamic business logic based on the request's origin location information."
	'Improve Reliability' = "Move compute cycles to the edge, reducing load and improving reliability and performance of origin servers."
	'Ease Development' = "Enable developers to modify application behavior without touching origin server logic."

+++

EdgeWorker example to redirect visitors based on the location of the request to present location-relevant pages.