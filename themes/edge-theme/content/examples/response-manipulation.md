+++
title = 'Response Manipulation'
draft = false
categories = ['Developer Tools']
modules = ['streams', 'http-request', 'create-response', 'text-encode-transform']
icon = ''
features = ['responseProvider', 'response.getHeaders', 'response.status', 'response.body']
useCase = 'Adding content to an HTML response stream at the edge allows for dynamic enhancements to web pages without requiring changes at the origin server. This improves flexibility and performance, ensuring users receive the most relevant and up-to-date content.'
featured = false
demoURL = 'https://www.edgecompute.live/edgeworkers/stream/responseManipulationDemo.html'
gitURL = 'https://github.com/akamai/edgeworkers-examples/tree/master/edgecompute/examples/stream/response-manipulation'

[benefits]
	'Dynamic Flexibilty' = "Modify in-flight content on its way between client and origin server and back to clients."
	'Ease Development' = "Enable developers to modify application behavior without touching origin server logic."

+++

Demonstrates how an EdgeWorker can modify an HTML response stream by adding content to the response. The example adds a script to the page just before the closing head tag.