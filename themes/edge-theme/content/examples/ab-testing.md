+++
title = 'A/B Testing'
draft = true
categories = ['Marketing', 'Traffic Routing']
modules = ['cookies', 'url-search-params']
icon = ''
features = ['onClientRequest', 'request.setHeader', 'onClientResponse', 'request.getHeader', 'response.setHeader']
useCase = "Randomly assigning users to A/B test groups at the edge allows for efficient testing and data collection without impacting the origin server. This improves the flexibility and speed of A/B testing, leading to better insights and optimization of user experiences."
featured = false
demoURL = 'https://www.edgecompute.live/edgeworkers/trafficRouting/ABtestEW.html'
gitURL = 'https://github.com/akamai/edgeworkers-examples/tree/master/edgecompute/examples/traffic-routing/ab-test%20(EW)'

[benefits]
	'Dynamic Flexibilty' = "Modify in-flight content on its way between client and origin server and back to clients."
	'Improve Reliability' = "Move compute cycles to the edge, reducing load and improving reliability and performance of origin servers."

+++

Randomly assigns a new user to a group for A/B testing. The assignment is stored in a cookie and passed to the origin in a query parameter. The A/B group can be forced via a query string parameter for easy testing. The group names, percentage split, cookie name, and query parameter name are configured through constants in the EdgeWorker JavaScript module.
