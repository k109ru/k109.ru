## Features
* сlass name by [BEM](https://en.bem.info/)
* BEM structure
* CSS extension [SCSS](https://sass-lang.com/)
* a JavaScript compiler [Babel](https://babeljs.io/) for supporting modern JavaScript (ES6) in browsers
* Bundler [Webpack](https://webpack.js.org/) to bundle JavaScript files
* check code before commit 

## Установка
* install [NodeJS](https://nodejs.org/en/) (if you need) и [Yarn](https://yarnpkg.com/en/docs/install)

* install ```gulp``` global: ```yarn global add gulp-cli```
* install ```bem-tools-core``` global: ```yarn global add bem-tools-core```
* install all dependencies: ```yarn```
* to start work: ```yarn run dev``` (developement mode)
* to build project ```yarn run build``` (build mode)



## File structure

```
name_of_project
├── dist
├── gulp-tasks
├── src
│   ├── blocks
│   ├── fonts
│   ├── img
│   ├── js
│   ├── styles
│   ├── views
│   └── .htaccess
├── gulpfile.babel.js
├── webpack.config.js
├── package.json
├── .babelrc.js
├── .bemrc.js
├── .eslintrc.json
├── .stylelintrc
├── .stylelintignore
└── .gitignore
```

* Root:
    * ```.babelrc.js``` — Setup Babel
    * ```.bemrc.js``` — Setup Bem
    * ```.eslintrc.json``` — Setup ESLint
    * ```.gitignore``` – the list of files don't watch by git
    * ```.stylelintrc``` — Setup Stylelint
    * ```.stylelintignore``` – the list of files don't watch by Stylelint
    * ```gulpfile.babel.js``` — Setup Gulp
    * ```webpack.config.js``` — Setup Webpack
    * ```package.json``` — the list of dependencies
* The folder ```src``` - The folder for development:
    * BEM-blocks: ```src/blocks```
    * fonts: ```src/fonts```
    * pictures: ```src/img```
    * JS-files: ```src/js```
    * pages of our site: ```src/views/pages```
    * SCSS-files: ```src/styles```
    * HTML-files: ```src/views```


* The folder  ```dist``` - start server, development mode ( ```yarn run dev```)
* The folder  ```gulp-tasks``` - this folder for gulp tasks

## Commands
* ```yarn run lint:styles``` - check SCSS-files. For VSCode you have to install [плагин](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint). For WebStorm
or PHPStorm you have to have Stylelint в ```Languages & Frameworks - Style Sheets - Stylelint``` (
* ```yarn run lint:styles --fix``` - fix mistakes in SCSS-files
* ```yarn run lint:scripts``` - check JS-files
* ```yarn run lint:scripts --fix``` - fix mistakes in  JS-files
* ```yarn run dev``` - run server for developed
* ```yarn run build``` - build your project without starting server
* ```yarn run build:views``` - build HTML-files
* ```yarn run build:styles``` - compile SCSS-files
* ```yarn run build:scripts``` - build JS-files
* ```yarn run build:images``` - build images
* ```yarn run build:webp``` - convert image to ```.webp```
* ```yarn run build:sprites```- build sprites
* ```yarn run build:fonts``` - build fonts
* ```yarn run build:favicons``` - build favicons


