+++
title = 'JA3 Fingerprinting'
draft = false
description = 'Calculates JA3 Fingerprint using EdgeWorkers. TLS fingerprinting is a technique that associates a TLS library with parameters from a TLS ClientHello via a database of curated fingerprints to identify malware and vulnerable applications for better network visibility. The JA3 algorithm takes a collection of settings from the SSL “ClientHello” such as SSL/TLS version, accepted cipher suites, list of extensions, accepted elliptical curves/formats, and others. For compactness, the JA3 string is hashed with MD5. This EdgeWorker calculates JA3 Fingerprint to help customers deny requests from services with suspicious JA3 Fingerprints and credentials, without contacting origin servers even on cacheable contents.'
categories = ['Security']
modules = []
icon = 'icon-shield-small.svg'
features = ['onClientRequest', 'request.getVariable', 'request.setVariable']
useCase = 'Enhancing security by calculating JA3 Fingerprints at the edge allows for the identification and blocking of malicious requests based on their TLS fingerprints, improving network visibility and threat response times without needing to contact origin servers.'
featured = false
demoURL = 'https://www.edgecompute.live/tls/ja3'
gitURL = 'https://github.com/akamai/edgeworkers-examples/tree/master/edgecompute/examples/authentication/ja3-fingerprinting'

[benefits]
	'Enhance Security' = "Enable security features at the edge, preventing bad requests from reaching your origin server"
	'Ease Development' = "Enable developers to modify application behavior without touching origin server logic."
+++


