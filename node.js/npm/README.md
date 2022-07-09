# npm

## About:
**"node package manager or most commonly know as npm let us managed our project decencies"**

---

## How it works?

> npm install package-name

> npm i package-name <!-- for short -->

---

## Docs 

* It will be install the package into a node_modules directory
* Also will be generated a package-lock.json file with the dependencies description
* And of course the package.json file with the project settings/meta-data (used for install the required dependencies in order to run the project in any other server, of course is not required upload the modules folder to the server just package.json file and then it will be run the command __npm install__ to setup everything)
* Thanks to npm, and of course node.js in company of the modules, packages and libraries we can save time and effort in the development process

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
npm script-name /* default command */
npm run script-name /* custom command */
```
