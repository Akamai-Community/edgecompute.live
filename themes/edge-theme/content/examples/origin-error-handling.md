+++
title = 'Origin Error Handling'
draft = false
categories = ['Developer Tools']
modules = []
icon = ''
features = ['onOriginResponse', 'response.addHeader', 'response.getHeader', 'request.respondWith']
useCase = "Improving user experience by presenting a friendly HTML page during service disruptions and implementing automated retries helps maintain engagement and reduces the perceived downtime for end-users. This approach also reduces the load on the origin server by caching error responses."
featured = false
demoURL = 'https://www.edgecompute.live/api/originoverload.php'
gitURL = 'https://github.com/akamai/edgeworkers-examples/tree/master/edgecompute/examples/error-handling/origin-overload'

[benefits]
	'Improve Experience' = "Add additional features on top of your existing infrastructure to improve the user experience. "
	'Cache Integration' = "Combine performance benefits from CDN caching with dynamic edge compute logic."
	'Ease Development' = "Enable developers to modify application behavior without touching origin server logic."
	'Dynamic Flexibilty' = "Modify in-flight content on its way between client and origin server and back to clients."

+++

Translates a HTTP 503 status code (service unavailable) from an overloaded origin into an HTML page presenting the information in a more user-friendly way. It includes JavaScript to retry after the period indicated by the 'Retry-After' header from the origin, if present. Otherwise, it retries after a default number of seconds. Configuring the property to cache HTTP error responses, even for a short duration, makes sense for dynamic content.