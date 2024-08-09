+++
title = 'Promo Code Validation'
draft = false
categories = ['Marketing']
modules = ['url-search-params', 'create-response', 'edgekv']
icon = ''
features = ['responseProvider', 'request.query']
useCase = "Validating promo codes at the edge reduces latency and improves the user experience by quickly confirming the validity of the entered promo code. Storing promo codes and their valid date ranges in EdgeKV allows for efficient and secure validation without additional load on the origin server."
featured = false
demoURL = 'https://www.edgecompute.live/edgekv/ecom-promocode/ecom-promocode.html'
gitURL = 'https://github.com/akamai/edgeworkers-examples/tree/master/edgecompute/examples/personalization/validate-promo-code%20(EKV)'

[benefits]
	'Reduce Latency' = "Speed up response times by moving work closer to users."
	'Distributed Data' = "Pushing data to the edge speeds up websites by avoiding central bottlenecks."
	'Ease Development' = "Enable developers to modify application behavior without touching origin server logic."
	'Core Concepts' = "Helps developers understand the fundamental processes needed for edge computing."

+++

The Promo Code Validation example demonstrates how you can use EdgeWorkers and EdgeKV to validate promo codes at the Edge. A list of promo codes with valid date ranges is stored in EdgeKV. It also shows how you could use the getJson() helper method.