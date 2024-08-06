+++
title = 'Cookie Geolocation'
draft = false
description = 'Implements an EdgeWorker to add geolocation data to a cookie in the HTTP response. This cookie returns location information about the client where the request originates, including a lookup from custom data.'
categories = ['Geolocation']
modules = ['cookies']
icon = ''
features = ['onClientResponse', 'request.userLocation', 'response.addHeader']
useCase = "Adding geolocation data to cookies at the edge provides personalized location-based services without additional requests to the origin server. This improves performance and enhances the user experience by providing relevant content based on the user's location."
featured = false
demoURL = 'https://www.edgecompute.live/edgeworkers/personalization/cookieGeoLocationDemo.html'
gitURL = 'https://github.com/akamai/edgeworkers-examples/tree/master/edgecompute/examples/personalization/cookie-geolocation'

[benefits]
	'Geolocation Information' = "Apply dynamic business logic based on the request's origin location information."
	'Reduce Latency' = "Speed up response times by moving work closer to users."

+++