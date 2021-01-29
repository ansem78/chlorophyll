---
layout: layout
---
### Building stylesheets (CLI)

In {{global.name}}, you can run some NPM script to generate only specific files or to build the final files. All the generated files will be saved into the `/dist` folder. Open your terminal and type:

npm run `<SCRIPT-NAME>`

where `<SCRIPT-NAME>` is one of the following.

#### css

This is the main script.Generates all stylesheets and source maps in a bounch. It is a shortcut for running `compile`, `prefix`, `rtl` and `minify` scripts sequentially.

#### compile-main

Generates the main stylesheet (`{{global.name}}.css`).

#### compile-debug

Generates the debug stylesheets (`debug.css`, `debug-utils.css`). These files are useful for debug during development.

#### compile

Shortcut for running `compile-main` and `compile-debug` scripts.

#### docs

Runs this static documentation site.

#### lint

Runs Stylelint to check `*.scss` files syntax. Useful for developers contributing to this package.

#### minify-main

Generates the minified version of the main stylesheet (`{{global.name}}.min.css`) and its source map. It must be manually run after `compile` or `compile-main` script to take effect.

#### minify-debug

Generates the minified versions of the debug stylesheets (`debug.min.css`, `debug-utils.min.css`) and their source maps. It must be manually run after `compile` or `compile-debug` script to take effect.

#### minify-rtl

Generates the minified version of the `{{global.name}}-rtl.css` stylesheet (`{{global.name}}-rtl.min.css`) and its source map. It must be manually run after `compile` or `compile-main` followed by `rtl` script to take effect.

#### minify

Shortcut for running `minify-main`, `minify-debug` and `minify-rtl` scripts in parallel. It must be manually run after `compile`, `compile-main`, `compile-debug` or `rtl` script to take effect.

#### prefix

Adds vendor-specific prefixes to some CSS properties for browsers support. It must be manually run after `compile` or `compile-main` script to take effect.

#### rtl

Generates the RTL version of the main stylesheet (`{{global.name}}-rtl.css`) for RTL languages. It must be manually run after `compile` or `compile-main` script to take effect. Note: debug stylesheets do not have an RTL version.

#### setup

Install all the dependencies needed using Yarn. If you don't have installed Yarn, you can manually run `npm install`.
