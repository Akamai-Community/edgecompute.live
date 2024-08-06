+++
title = 'Ecommerce'
draft = false
description = 'This EdgeWorker tests for /commerce/categories in the URI path and responds to a GET parameter named search by running a case-insensitive regex against each title and description field, and a numeric comparison against each ID, returning an array of matching category entities, serialized as JSON. The response is generated at the Edge, so the origin server is not contacted, and the request is resolved at the first Edge server that answers it.'
categories = ['Ecommerce']
modules = ['url-search-params']
icon = 'icon-squares-orange.svg'
features = ['onClientRequest', 'request.respondWith']
useCase = 'By generating JSON responses directly at the edge, this approach reduces the load on the origin server and improves response times. This is crucial for eCommerce platforms where quick data retrieval and responsiveness are critical for user satisfaction and conversion rates. This all impacts scaling growing eCommerce traffic without additional server load.'
featured = false
demoURL = 'https://www.edgecompute.live/edgeworkers/ecom/commerce-categories.html'
gitURL = 'https://github.com/akamai/edgeworkers-examples/tree/master/edgecompute/examples/search/commerce-categories'

[benefits]
	'Improve Reliability' = "Move compute cycles to the edge, reducing load and improving reliability and performance of origin servers."
	'Reduce Latency' = "Speed up response times by moving work closer to users."
+++


