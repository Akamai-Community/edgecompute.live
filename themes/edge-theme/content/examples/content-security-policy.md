+++
title = 'Content Security Policy'
draft = false
categories = ['Security']
modules = ['html-rewriter', 'http-request', 'create-response', 'crypto', 'encoding', 'log']
icon = 'icon-shield-small.svg'
features = ['responseProvider', 'request.getHeaders']
useCase = 'Implementing CSP at the edge enhances security by dynamically generating and injecting nonces into CSP headers and HTML source code. This reduces the risk of XSS and data injection attacks without overloading the application server, providing a more secure and efficient content delivery process.'
featured = true
demoURL = 'https://www.edgecompute.live/csp'
gitURL = 'https://github.com/akamai/edgeworkers-examples/tree/master/edgecompute/examples/security/csp'

[benefits]
	'Enhance Security' = "Enable security features at the edge, preventing bad requests from reaching your origin server"
	'Ease Development' = "Enable developers to modify application behavior without touching origin server logic."
+++

A Content Security Policy (CSP) is a security feature implemented in web browsers to protect websites and web applications from attacks such as cross-site scripting (XSS) and data injection. CSP controls and limits the source of various types of content loaded and executed on a web page, including scripts, stylesheets, and images. EdgeWorkers provides numerous performance benefits for CSPs, which need to complement the security measures on the application server-side.