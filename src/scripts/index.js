const cssContext = require.context("../css", true, /\.css$/);
cssContext.keys().forEach(cssContext);
