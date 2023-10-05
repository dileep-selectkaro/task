Create a Node.js application using Express.js.

Set up a database connection to store user data with latitude and longitude fields.

Implement a REST API endpoint that accepts latitude and longitude as query parameters.

Query the database to find users within a 10-kilometer radius of the provided coordinates.

Calculate the distance between the provided coordinates and each user's location using the Haversine formula or a similar method.

Sort the list of users by distance in ascending order.

Return a JSON response with the sorted list of users and their respective distances