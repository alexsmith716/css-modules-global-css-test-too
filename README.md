# css-modules-global-css-test-too

### Overview:
Testing css modules and global scope. Toooo.


### Issues:
Encountered issue apparently caused by nested ":global" switches.

[Appears Error is thrown by [**postcss-modules-local-by-default**](https://github.com/css-modules/postcss-modules-local-by-default/blob/master/index.js#L26).


### css-modules ":global" mode:
[**css-modules**](https://github.com/css-modules/css-modules)


####:global switches to global scope for the current selector respective identifier. :global(.xxx) respective @keyframes 
####:global(xxx) declares the stuff in parenthesis in the global scope.


### Referenced Github Issues:

[**Error: Missing whitespace after :global #507**](https://github.com/webpack-contrib/sass-loader/issues/507)

[**CSS Modules issue or misunderstanding #658**](https://github.com/davezuko/react-redux-starter-kit/issues/658)

[**Nested global rules with immediate child combinator #273**](https://github.com/css-modules/css-modules/issues/273)

[**Use bootstrap-sass instead of css #474**](https://github.com/davezuko/react-redux-starter-kit/issues/474)



