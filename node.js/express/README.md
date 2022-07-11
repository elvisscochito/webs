# Express 

## About

*"Express is a Node.js framework that provides a robust set of features to develop back-end/server side web apps faster than ever"*

---

## Install:

> npm install express

> npm install nodemon --save-dev <!-- recommended, it watch and run the server changes automatically for us, so it's not required stop and run it manually anymore -->

> npm install ejs <!-- JavaScript templates for html views, already integrated very well with express so import it's just not required -->

__Other:__

> npm install mysql <!-- a mysql package for database connections -->

> npm install mongodb <!-- a MongoDB package for database connections -->

---

## Docs

[link](https://expressjs.com/en/5x/api.html#app.all "Express")

---

## Notes

* A very popular Node.js framework (third party library) for build server web apps.
* Allows to send and received data across all the structure of a web app
* It's fast and more easy to use than writing a server by hand with raw node.js
* It provides all the necessary features to build server web apps with a very small amount of code, it just works, you don't need to reinvent the wheel, do more with less code, by the way it internally works with node, it's open source so you can check out the source code.
* Share code with the same language between the server and the web browser (front-end/back-end support, it's not required to learn and use other languages anymore and of course now you can use same paradigms, libraries, frameworks, etc.)
* Stack (collections de technologies that enables fster application development) MEAN (MongoDB, Express, Angular, Node,) / MERN (MongoDB, Express, React, Node.js) that basocally it's build a completely web app with just one language, javascript in this case
* Fits inside realtime features as websockets (computer communications protocol for a persistent, bi-directional, full duplex TCP connection from a user's web browser to a server), WebRTC (that means Web Real-Time Communications with databases, chat, games, video, audio, etc. via API's)
* And also with Express you can write MVC (Model View Controller) apps, it's methodology or design pattern for successfully and efficiently relating the user interface to underlying data models.
* Works with routing (paths as links) with the code syntax: __"app.METHOD (PATH, HANDLER)"__
* Supports dynamic routes (user/:id as user/1, user/:id as user/2, etc. the : indicates an parameter)
* Even you cand coute with regular expressions
* It's important know how app.all, app.get, app.post, app.put, app.delete, app.patch, app.use, app.set properties works, for more info check the docs: [link](https://expressjs.com/en/5x/api.html#app.all "Express")
* Middleware is a function manager that is called before it pass to the router, exist for authentication, authorization, data-exchange etc what you want to use depends on the app you want to build. It's very similar to app.all, but the different between them is that the middleware works with any route, while app.all works with a specific route. Process data before it arrives to the router, and after it's sent to the router, used for login. Doesn't matter if the router exits or not, the middleware always will display it, the app.use(express.json()); is a middleware too that convert tha data into a JSON format, before call the router and you want to process data you need to call a middleware to works properly.
* Remember to use a middleware is with in app.use(middleware)
* "__morgan__" is a HTTP request logger middleware highly recommended
* "__app.use(express.static());__" sends files to the frond-end, as html, css, js, images, this are static files and you can access it from the public folder in the client/browser, example: http://localhost:3000/styles/main.css
* "__app.use(express.static());__" sends files to the frond-end, as html, css, js, images, this are static files and you can access all static files inside public folder in the client/browser, example: http://localhost:3000/styles/main.css or http://localhost:3000/scripts/main.js
* Also you can setup the express settings, with the following syntax: app.set('variable', value) for example: app.set('view engine', ejs); or app.set('title', 'My Site') and then app.get('title') it will return "My Site". But be e safe because it have some keywords reserved for the variable name
* view engine helps us to extend html functions, to install it: __npm install ejs__, it's for dynamic data (changes from databases)
* To use databases you need to install module packages as mysql: __"npm install mysql"__ or mongodb: __"npm install mongodb"__, for more info [link] (https://expressjs.com/en/guide/database-integration.html "Express")
* Also exists ORM(Object-relational mapping) for databases as sequelize and mongoose, that allows write js code as a database structure, that avoid specific database language syntax and you can change the database language from one to another anytime
