+++
title = 'Product URL Redirects'
draft = false
description = "Note the URL path changing from /sku/483D5F/reviews to products/straight-fit-denim-jeans/reviews <br><br>This example uses EdgeWorkers + EdgeKV to extract a query string product SKU from an incoming URL, match it against a SKU stored in a KV database, and properly redirect the browser to the new product page. <br><br><iframe width="560" height="315" src="https://www.youtube.com/embed/DAFmdGi_XQo?si=opditGW5xdmZnDBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>"
categories = ['Ecommerce', 'Traffic Routing']
modules = ['edgekv']
icon = ''
features = ['onClientRequest', 'request.url', 'request.respondWith']
useCase = "Redirects are often more complicated than: ''Send traffic to this URL over to this other URL.'' You often need business logic to make routing decisions for site migrations, promotional campaigns, and loyalty programs. <br><br> For example: Let’s assume the old site used a product sku in product-related URLs, but a revamped, new site uses a “tag” for SEO purposes. <br><br>Old url: www.example.com/sku/{product_sku}/* <br><br> New url: www.example.com/products/{product_tag}/* <br><br> E.g., sku is 483D5F; tag denotes straight-fit-denim-jeans <br><br> Old “reviews” url: www.example.com/sku/483D5F/reviews <br><br> New “reviews” url: www.example.com/products/straight-fit-denim-jeans/reviews"
featured = true
demoURL = 'https://www.edgecompute.live/sku/483D5F/reviews'
gitURL = 'https://github.com/akamai/edgeworkers-examples/tree/master/edgecompute/examples/traffic-routing/redirect-url%20(EKV)'

[benefits]
	'Reduce Latency' = "Speed up response times by moving work closer to users."
	'Distributed Data' = "Pushing data to the edge speeds up websites by avoiding central bottlenecks."
	'Improve Reliability' = "Move compute cycles to the edge, reducing load and improving reliability and performance of origin servers."
	'Ease Development' = "Enable developers to modify application behavior without touching origin server logic."

+++
