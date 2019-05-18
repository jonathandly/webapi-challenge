1. Mention two parts of Express that you learned about this week.

Middlware and routing.

2. Describe Middlware?

Functions that get the request and response objects and can operate on them and either return the response or call the next middleware in the pipeline. Middleware can change the request or response, but doesn't have to.

3. Describe a Resource?

Resources can have multiple representations. Management of resources is done through HTTP methods. Each resource is accessible through a unique URI.

4. What can the API return to help clients know if a request was successful?

A response with a message saying the request was successful.

5. How can we partition our application into sub-applications?

We can split up our app to use multiple routers, so one router might use /api/users and another might use /api/projects. And another could use /api/products.
