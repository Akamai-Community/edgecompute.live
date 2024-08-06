+++
title = 'Find Replace Stream'
draft = false
description = 'Demonstrates how an EdgeWorker can modify an HTTP response stream by performing a find & replace operation on the response. The example searches for specific text and replaces it with another across the entire response body. It accepts an optional parameter to specify the number of replacements. If not specified, the replacement occurs as many times as possible. The demo replaces ""This is the original string"" with ""This is the updated string"".'
categories = ['Developer Tools']
modules = ['streams', 'http-request', 'create-response', 'text-encode-transform', 'log']
icon = ''
features = ['responseProvider', 'response.status', 'response.headers', 'response.body']
useCase = 'Modifying HTTP response streams at the edge allows for dynamic content updates without needing to contact the origin server. This improves performance and provides flexibility in delivering up-to-date information to users.'
featured = false
demoURL = 'https://www.edgecompute.live/edgeworkers/stream/findReplaceDemo.html'
gitURL = 'https://github.com/akamai/edgeworkers-examples/tree/master/edgecompute/examples/stream/find-replace-stream'

[benefits]
	'Dynamic Flexibilty' = "Modify in-flight content on its way between client and origin server and back to clients."
	'Ease Development' = "Enable developers to modify application behavior without touching origin server logic."

+++