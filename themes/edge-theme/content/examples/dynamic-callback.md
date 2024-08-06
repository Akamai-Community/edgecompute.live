+++
title = 'Dynamic Callback'
draft = false
description = 'Demonstrates how an EdgeWorker can wrap a JSON response with a dynamic unique callback function leveraging Response Provider and Stream API for efficient content transformation. The EdgeWorker should be enabled on JSON requests containing a callback query parameter, which can be managed via Property Manager. When such a request comes in, this EdgeWorker removes the callback query parameter, makes a sub-request to fetch the JSON data, and serves it as a stream. The EdgeWorker code adds a prefix with the callback function name captured from the query parameter and a suffix. Both JSON data and transformed data can be cached using standard ""Caching"" behavior in Property Manager if caching is allowed.'
categories = ['Developer Tools']
modules = ['streams', 'http-request', 'create-response', 'url-search-params']
icon = ''
features = ['responseProvider', 'response.getHeaders', 'response.status', 'response.body']
useCase = 'Wrapping JSON responses with dynamic callbacks at the edge allows for efficient content transformation and delivery. This reduces latency, enhances performance, and supports caching of both raw and transformed data, improving user experience and reducing load on the origin server.'
featured = false
demoURL = 'https://www.edgecompute.live/edgeworkers/stream/JSONPWrapper.json??callback=someFunctionName'
gitURL = 'https://github.com/akamai/edgeworkers-examples/tree/master/edgecompute/examples/stream/jsonp-wrapper'

[benefits]
	'Dynamic Flexibilty' = "Modify in-flight content on its way between client and origin server and back to clients."
	'Cache Integration' = "Combine performance benefits from CDN caching with dynamic edge compute logic."
	'Improve Reliability' = "Move compute cycles to the edge, reducing load and improving reliability and performance of origin servers."
	'Ease Development' = "Enable developers to modify application behavior without touching origin server logic."

+++