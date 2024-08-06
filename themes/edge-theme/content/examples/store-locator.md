+++
title = 'Store Locator'
draft = false
description = 'Implements a microservice store locator API call that returns the two stores nearest to the provided latitude and longitude. <br><br>Note: Latitude and Longitude values are hardcoded for demo purposes.'
categories = ['Geolocation']
modules = ['url-search-params', 'NPM']
icon = ''
features = ['onClientRequest', 'request.query', 'request.respondWith']
useCase = 'Providing a store locator service at the edge allows for quick and efficient location-based responses, enhancing user experience by delivering relevant store information without needing to contact the origin server. This reduces server load and improves response times.'
featured = false
demoURL = 'https://www.edgecompute.live/edgeworkers/personalization/storelocator?lat=42.3650&lon=-71.088914'
gitURL = 'https://github.com/akamai/edgeworkers-examples/tree/master/edgecompute/examples/personalization/storelocator'

[benefits]
	'Geolocation Information' = "Apply dynamic business logic based on the request's origin location information."
	'Reduce Latency' = "Speed up response times by moving work closer to users."
	'Improve Reliability' = "Move compute cycles to the edge, reducing load and improving reliability and performance of origin servers."
	'Distributed Data' = "Pushing data to the edge speeds up websites by avoiding central bottlenecks."

+++