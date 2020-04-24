## About The Project

This is a boilerplate for NavigationBar along with SideNavigationBar, SearchSuggestion on input, and a dark-theme option. You can use the dark-theme by declaring styles in under `.dark-theme` className.

By default, the theme is dark. You can change the default theme, by removing `localStorage.setItem('dark_theme', localStorage.dark_theme || true);` on `line 8` of `src/index.js` file.

There is `commented` codes, that can be replaced with the `mapping of search results`.

## Designed Using

- [Ant Design](https://ant.design/)
- [Material-UI](https://material-ui.com)
- [Bootstrap](https://getbootstrap.com/)
- [Sass](https://sass-lang.com/) with `.scss` extension

## Available Scripts

In the project directory, you can run:

### `git clone https://github.com/ujstha/NavigationBar-boilerplate.git`

Clones the repository

### `npm install`

Install the dependencies that are in `package.json`

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
