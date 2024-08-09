+++
title = 'Multivariate Testing'
draft = false
categories = ['Marketing', 'Traffic Routing']
modules = ['cookies', 'url-search-params']
icon = ''
features = ['onClientRequest', 'request.getHeader', 'request.setHeader', 'request.route', 'request.respondWith', 'onClientResponse', 'response.addHeader']
useCase = "Multivariate testing at the edge allows for comprehensive testing of multiple variables simultaneously, providing more detailed insights and faster optimization of user experiences. This approach reduces the load on the origin server and ensures efficient and flexible testing processes."
featured = false
demoURL = 'https://www.edgecompute.live/edgeworkers/trafficRouting/multivariate.html'
gitURL = 'https://github.com/akamai/edgeworkers-examples/tree/master/edgecompute/examples/traffic-routing/multivariate-test'

[benefits]
	'Dynamic Flexibilty' = "Modify in-flight content on its way between client and origin server and back to clients."
	'Improve Reliability' = "Move compute cycles to the edge, reducing load and improving reliability and performance of origin servers."

+++

Enables multivariate testing where multiple tests are executed simultaneously. A single variant is selected for each test, and variants are randomly assigned to new users, with each selected variant stored in a cookie and passed to the origin in a query string parameter. The probability of choosing each variant can be configured by adjusting the weight of each variant. Variants can be forced via a query string parameter for easy testing. Custom actions can be executed in the request and/or response phase of each variant, such as routing a variant to a different origin or constructing a response at the edge.