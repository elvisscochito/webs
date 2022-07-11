# npm

## About:
**"node package manager or most commonly know as npm let us managed our project decencies"**

---

## How it works?

> npm install package-name

> npm i package-name <!-- for short -->

> npm uninstall package-name <!-- remove dependencies and modules from project -->

> npm -v <!-- check npm version -->

__Add a package in "dependencies" (modules are added as a dependency by default/auto, it's not required anymore):__
> npm install --save

> npm install --S <!-- for short (s in lower case works too) -->

__Add a package in "devDependencies":__
> npm install --save-dev
> npm install --D <!-- for short (D in lower case works too) -->

> npm install --global <!-- all projects in the computer can import and use the installed packages -->
> npm install --G <!-- for short (g in lower case works too) -->

---

## Docs 

* It will be install the package into a node_modules directory
* Also will be generated a package-lock.json file with the dependencies description
* And of course the package.json file with the project settings/meta-data (used for install the required dependencies in order to run the project in any other server, of course is not required upload the modules folder to the server just package.json file and then it will be run the command __npm install__ to setup everything)
* Thanks to npm, and of course node.js in company of the modules, packages and libraries we can save time and effort in the development process
* npm command is for installing packages as __npm i express__ for example meanwhile npx command is for execute packages as __npx nodemon index.js__ for example
* npm install package-name is for install project settings dependencies (PRODUCTION) in package.json file meanwhile npm install package-name --save-dev is for install dev dependencies that means project tools for development the project itself (DEVELOPMENT)

---

## commands 

__setup the project settings:__
```js
npm init  /* it will ask for all the questions */
npm init - y /* y is for yes to all */
npm install /* setup previous package.json file project settings with everything (dependencies included and added) */
```

__run scripts from package.json file:__
```js
npm script-name /* default command ("start": "node index.js", - npm start) */
npm run script-name /* custom command ("devStart": "npx nodemon index.js" - npm run devStart)*/
```
