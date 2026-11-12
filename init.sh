#!/bin/bash

# Initialze project with modules enabled
npm init -y --init-type=module

# Install dependencies
npm install --save-dev webpack webpack-cli
npm install --save-dev html-webpack-plugin
npm install --save-dev style-loader css-loader
npm install --save-dev html-loader
npm install --save-dev webpack-dev-server

# Add develop / prod scripts to package.json
npm pkg set scripts.test='echo "Error: no test specified" && exit 1'
npm pkg set scripts.build="webpack --config webpack.prod.js"
npm pkg set scripts.dev="webpack serve --open --config webpack.dev.js"
npm pkg set scripts.deploy="git subtree push --prefix dist origin gh-pages"