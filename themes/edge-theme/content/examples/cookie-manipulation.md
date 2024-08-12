+++
title = 'Cookie Manipulation'
draft = true
categories = ['Developer Tools']
modules = ['cookies']
icon = ''
features = ['onClientRequest', 'request.respondWith']
useCase = "By managing user information through cookies at the edge, this use case enhances user experience by providing personalized responses without needing to contact the origin server, improving response times and reducing server load."
featured = false
demoURL = 'https://www.edgecompute.live/cookie'
gitURL = 'https://github.com/akamai/edgeworkers-examples/tree/master/edgecompute/examples/surrogate-response/empty-cart'

[benefits]
	'Personalized Experience' = "Provides personalized content based on location, device, or request details."
	'Improve Reliability' = "Move compute cycles to the edge, reducing load and improving reliability and performance of origin servers."

+++

Implements an EdgeWorker that responds with a welcome message if the user's name is saved in a cookie, otherwise it prompts the user to enter their name.
