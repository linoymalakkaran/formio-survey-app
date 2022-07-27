const path = require("path");

module.exports = {
  entry: path.join(path.resolve(__dirname, "lib"), "index.js"),
  output: {
    library: "SurveyCustComponent",
    libraryTarget: "umd",
    libraryExport: "default",
    path: path.resolve(__dirname, "dist"),
    filename: "survey-cust-component.js",
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "ejs-compiled-loader",
            options: {
              htmlmin: true,
              htmlminOptions: {
                removeComments: true,
              },
            },
          },
          {
            loader: "style-loader",
          }, // to inject the result into the DOM as a style block
          {
            loader: "css-modules-typescript-loader",
          }, // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
          {
            loader: "css-loader",
            options: { modules: true },
          }, // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
          {
            loader: "sass-loader",
          }, // to convert SASS to CSS
          // NOTE: The first build after adding/removing/renaming CSS classes fails, since the newly generated .d.ts typescript module is picked up only later
        ],
      },
    ],
  },
  mode: "development",
  performance: { hints: false },
  externals: {
    formiojs: "Formio",
  },
};
