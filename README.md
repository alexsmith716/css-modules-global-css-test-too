# css-modules-global-css-test-too

### Overview:
Testing css modules and global scope. Best practice to avoid global variables from polluting the global namespace is to controll the scoping of all varialbles to either local or global. For example, locally scoped css receives a unique local identifier 'localIdentName'. This identifier is added at 'css-loader. The unique identifier prevents selectors from clashing so thereby enabling controlled, efficient use of styles throught an app.


### Issue 1:
Encountered issue apparently caused by nested ":global" switches.

Files:

`package.json > scripts > build:breaks:globalswitch`

`./webpack/webpack.config.prod.breaks.js`

Appears Error is thrown by [**postcss-modules-local-by-default**](https://github.com/css-modules/postcss-modules-local-by-default/blob/master/index.js#L26).

### css-modules ":global" mode:
[**css-modules**](https://github.com/css-modules/css-modules)


Failed "Missing whitespace before :global" error below:

`[158] ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/lib??ref--5-2!./node_modules/resolve-url-loader??ref--5-3!./node_modules/sass-loader/lib/loader.js??ref--5-4!./node_modules/sass-resources-loader/lib/loader.js??ref--5-5!./src/assets/scss/global/global.scss 295 bytes {4} [built] [failed] [1 warning] [1 error]`


`ERROR in ./src/assets/scss/global/global.scss (./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/lib??ref--5-2!./node_modules/resolve-url-loader??ref--5-3!./node_modules/sass-loader/lib/loader.js??ref--5-4!./node_modules/sass-resources-loader/lib/loader.js??ref--5-5!./src/assets/scss/global/global.scss)
Module build failed: Missing whitespace before :global (357:4)`

  355 |     color: #e83e8c;
  356 |     word-break: break-word; }
> 357 |     a > :global code {
      |    ^
  358 |       color: inherit; }
  359 |   :global kbd {
  360 |     padding: 0.2rem 0.4rem;

 @ ./src/assets/scss/global/global.scss 2:14-353
 @ multi babel-polyfill ./src/assets/scss/global/global.scss ./src/index.js


":global switches to global scope for the current selector respective identifier. :global(.xxx) respective @keyframes"
":global(xxx) declares the stuff in parenthesis in the global scope."


### Referenced Github Issues:

[**Error: Missing whitespace after :global #507**](https://github.com/webpack-contrib/sass-loader/issues/507)

[**CSS Modules issue or misunderstanding #658**](https://github.com/davezuko/react-redux-starter-kit/issues/658)

[**Nested global rules with immediate child combinator #273**](https://github.com/css-modules/css-modules/issues/273)

[**Use bootstrap-sass instead of css #474**](https://github.com/davezuko/react-redux-starter-kit/issues/474)


### Issue 2:
Beware !!!!! Switching off the default local scoped CSS with the ":global" switch will cause failure of "@font-face" in css.

Files:

`package.json > scripts > build:tester`

`./webpack/webpack.config.prod.tester.js`

When the custom font rule "@font-face {}" is added to ":global {}" selector scope it receives the enclosing curly braces from the  ":global {}" block. 

Took me many wasted hours to discover what was going on !!!!!!!

https://github.com/css-modules/css-modules/issues/95

Failed custom "@font-face" below:

`@font-face {
   {
    font-family: 'FontAwesome';
    src: url(fontawesome-webfont.eot);
    src: url(fontawesome-webfont.eot?#iefix&v=4.7.0) format("embedded-opentype"), url(fontawesome-webfont.woff2) format("woff2"), url(fontawesome-webfont.woff) format("woff"), url(fontawesome-webfont.ttf) format("truetype"), url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiLW5hbWU9Imxlc3NlcXVhbCIgdW5pY29kZT0iJiN4ZjUwMDsiIGhvcml6LWFkdi14PSIxNzkyIiAKIC8+CiAgPC9mb250Pgo8L2RlZnM+PC9zdmc+Cg==#fontawesomeregular) format("svg");
    font-weight: normal;
    font-style: normal; 
    } 
  }`


### Referenced Github Issues:

[**@font-face is broken #95**](https://github.com/css-modules/css-modules/issues/95)


### Suggested Solutions to Handling Global scss resources:

1) [**Bootstrap-Loader**](https://github.com/shakacode/bootstrap-loader)


### Issue 3:
Not an exactly an issue or breaking error, but 


Files:

`package.json > scripts > build:works:includeexclude`

`./webpack/webpack.config.prod.works.ie.js`



https://forum.shakacode.com/t/best-practices-for-css-and-css-modules-using-webpack/799





