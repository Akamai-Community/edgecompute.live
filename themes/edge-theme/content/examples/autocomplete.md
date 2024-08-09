+++
title = 'Autocomplete'
draft = false
categories = ['Miscellaneous']
modules = ['url-search-params']
icon = ''
features = ['onClientRequest', 'request.respondWith']
useCase = 'Serving popular search terms from the edge accelerates autocomplete responses, providing users with fast and relevant suggestions. This reduces the load on the origin server and ensures up-to-date content delivery, enhancing user experience.'
featured = false
demoURL = 'https://www.edgecompute.live/edgeworkers/search/fastAutoComplete.php'
gitURL = 'https://github.com/akamai/edgeworkers-examples/tree/master/edgecompute/examples/search/fast-autocomplete'

[benefits]
	'Reduce Latency' = "Speed up response times by moving work closer to users."
	'Improve Reliability' = "Move compute cycles to the edge, reducing load and improving reliability and performance of origin servers."
	'Distributed Data' = "Pushing data to the edge speeds up websites by avoiding central bottlenecks."
	'Ease Development' = "Enable developers to modify application behavior without touching origin server logic."

+++

Serves responses for popular search terms at the Edge. Autocomplete requests are typically long tail and frequently changing. Without an EdgeWorker, it is difficult to get up-to-date content from cache. Storing and serving the most popular search terms from the Edge will speed up responses significantly.