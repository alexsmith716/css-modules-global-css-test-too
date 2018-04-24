# css-modules-global-css-test-too

### Overview:
Testing css modules and global scope. Toooo.


### Issues:
Encountered issue apparently caused by nested ":global" switches.

Appears Error is thrown by [**postcss-modules-local-by-default**](https://github.com/css-modules/postcss-modules-local-by-default/blob/master/index.js#L26).


### css-modules ":global" mode:
[**css-modules**](https://github.com/css-modules/css-modules)


":global switches to global scope for the current selector respective identifier. :global(.xxx) respective @keyframes"
":global(xxx) declares the stuff in parenthesis in the global scope."


### Beware !!!!! Switching off the default local scoped CSS with the ":global" switch will cause failure of "@font-face" in css.

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

[**Error: Missing whitespace after :global #507**](https://github.com/webpack-contrib/sass-loader/issues/507)

[**CSS Modules issue or misunderstanding #658**](https://github.com/davezuko/react-redux-starter-kit/issues/658)

[**Nested global rules with immediate child combinator #273**](https://github.com/css-modules/css-modules/issues/273)

[**Use bootstrap-sass instead of css #474**](https://github.com/davezuko/react-redux-starter-kit/issues/474)


### Suggested Solutions:

1) [**Bootstrap-Loader**](https://github.com/shakacode/bootstrap-loader)


### Always Learning: