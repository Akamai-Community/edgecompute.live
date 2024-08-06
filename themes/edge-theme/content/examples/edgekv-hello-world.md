+++
title = 'EdgeKV Hello World'
draft = false
description = "The Hello World example demonstrates how you can use EdgeWorkers and EdgeKV to implement a simple Dynamic Content Assembly use case whereby the HTML response is dynamically constructed on the edge based on the content of the Accept-Language header in the client request. It also shows how you could use the getText() helper method."
categories = ['Developer Tools']
modules = ['create-response', 'edgekv']
icon = ''
features = ['request.getHeader', 'response.status', 'response.headers', 'response.body', 'responseProvider']
useCase = "Dynamically constructing HTML responses at the edge based on request headers, such as Accept-Language, allows for personalized and efficient content delivery. This use case showcases how EdgeKV can be used to store and retrieve data at the edge, enhancing performance and reducing latency."
featured = false
demoURL = 'https://www.edgecompute.live/edgekv/hworld/hworld.html'
gitURL = 'https://github.com/akamai/edgeworkers-examples/tree/master/edgecompute/examples/getting-started/hello-world%20(EKV)'

[benefits]
	'Core Concepts' = "Helps developers understand the fundamental processes needed for edge computing."
	'Reduce Latency' = "Speed up response times by moving work closer to users."
	'Distributed Data' = "Pushing data to the edge speeds up websites by avoiding central bottlenecks."

+++