+++
title = 'A/B Testing with EdgeKV'
draft = false
description = "By moving the A/B test to the Akamai edge we can cache multiple variants of the same page close to the user making the decision of which variant to serve to the user without making the long round-trip to the origin web server or relying on client-side javascript."
categories = ['Marketing']
modules = ['cookies', 'log', 'edgekv']
icon = ''
features = ['onClientRequest', 'request.getHeader', 'request.addHeader', 'request.setVariable', 'request.cacheKey', 'onClientResponse', 'request.getVariable', 'response.addHeader']
useCase = "A/B testing is beneficial to the business to test new features and measure user engagement. But this often comes with the cost of impacting page performance and user experience."
featured = true
demoURL = 'https://www.edgecompute.live/edgeworkers/trafficRouting/ABtestEW.html'
gitURL = 'https://github.com/akamai/edgeworkers-examples/tree/master/edgecompute/examples/traffic-routing/ab-test-caching%20(EKV)'

[benefits]
	'Dynamic Flexibilty' = "Modify in-flight content on its way between client and origin server and back to clients."
	'Cache Integration' = "Combine performance benefits from CDN caching with dynamic edge compute logic."
	'Personalized Experience' = "Provides personalized content based on location, device, or request details."
	'Reduce Latency' = "Speed up response times by moving work closer to users."

+++
