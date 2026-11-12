# odin-template

A skeleton HTML/CSS/JavaScript template for use in The Odin Project projects

## Directory Structure

```
src/                   -- All webpage files go here.
 ├ css/                  -- Holds project CSS files.
 │  ├ colors/              -- Define custom colors [ var(--color) ].
 │  ├ reset/               -- Clear browser default styling.
 │  ├ page-container/      -- Example of how to extend concept.
 │  └ ...                  -- Add more files as needed for project.
 ├ fonts/                -- Place all local fonts here.
 ├ html/                 -- Project HTML files. template.html is the default entry point.
 │  └ ...                  -- Seperate additional pages into sub-dirs.
 ├ images/               -- Place all local images here. Add sub-dirs as needed.
 └ scripts/              -- Place all project JavaScript files. index.js is the default entry point.
    └ ...                  -- Seperate additional scripts into sub-dirs by form / function.
```

## To setup:

To initialize project for npm development, run these two commands to make init.sh executable and to run setup script

```bash
chmod u+x init.sh
./init.sh
```

The script runs these commands to initialize npm and install dependencies.

```bash
npm init -y --init-type=module
npm install --save-dev webpack webpack-cli
npm install --save-dev html-webpack-plugin
npm install --save-dev style-loader css-loader
npm install --save-dev html-loader
npm install --save-dev webpack-dev-server
```

Next, init.sh runs these commands to add custom npm scripts for development and production

```bash
npm pkg set scripts.test='echo "Error: no test specified" && exit 1'
npm pkg set scripts.build="webpack --config webpack.prod.js"
npm pkg set scripts.dev="webpack serve --open --config webpack.dev.js"
npm pkg set scripts.deploy="git subtree push --prefix dist origin gh-pages"
```

Commands:

This will build the production version of the webpage and store it inside dist/

```bash
npm run build
```

This will build the development version of the webpage and store it inside dist/
Then, it will start and open a development server.

```bash
npm run dev
```

To deploy to gh-pages first, make sure to make a gh-pages branch. Then, run these in order

```bash
npm run build
git checkout gh-pages && git merge main --no-edit
git add dist -f && git commit -m "Deployment commit"
git subtree push --prefix dist origin gh-pages
git checkout main
```

This will:

1. Build / pack the webpage
2. Switch to gh-pages and make it current with the main branch
3. Force the staging of dist (dist is inside .gitignore, so it uses -f) and commits it with a dummy message.
4. Push the branch, using dist/ as the main directory (ensures that the deployment branch ignores the npm system)
5. Return to the main branch.
