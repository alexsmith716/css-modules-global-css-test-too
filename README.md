# css-modules-global-css-test-too

### Overview:
<p>Testing css modules and global scope. Toooo.</p>


[107] ./src/assets/scss/global/global.scss 1.49 KiB {2} [built] [failed] [1 error]

ERROR in ./src/assets/scss/global/global.scss
Module build failed: ModuleBuildError: Module build failed: Missing whitespace before :global (16:2)

  14 |  * -------------------------- */
  15 |   /* makes the font 33% larger relative to the icon container */
> 16 |   /* Deprecated as of 4.4.0 */
     |  ^
  17 |   /* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen
  18 |    readers do not read off random characters that represent icons */ }
  19 |   :global :root {

    at runLoaders (/Users/robertsnith/Documents/AA-EARLY-2018/Universal-Webpack/CSS-TESTERS/css-modules-global-css-test-too/node_modules/webpack/lib/NormalModule.js:244:20)
    at /Users/robertsnith/Documents/AA-EARLY-2018/Universal-Webpack/CSS-TESTERS/css-modules-global-css-test-too/node_modules/loader-runner/lib/LoaderRunner.js:364:11
    at /Users/robertsnith/Documents/AA-EARLY-2018/Universal-Webpack/CSS-TESTERS/css-modules-global-css-test-too/node_modules/loader-runner/lib/LoaderRunner.js:230:18
    at context.callback (/Users/robertsnith/Documents/AA-EARLY-2018/Universal-Webpack/CSS-TESTERS/css-modules-global-css-test-too/node_modules/loader-runner/lib/LoaderRunner.js:111:13)
    at Object.<anonymous> (/Users/robertsnith/Documents/AA-EARLY-2018/Universal-Webpack/CSS-TESTERS/css-modules-global-css-test-too/node_modules/css-loader/lib/loader.js:50:18)
    at /Users/robertsnith/Documents/AA-EARLY-2018/Universal-Webpack/CSS-TESTERS/css-modules-global-css-test-too/node_modules/css-loader/lib/processCss.js:234:4
    at <anonymous>
 @ multi babel-polyfill ./src/assets/scss/global/global.scss ./src/index.js



     [0] ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/lib??ref--5-2!./node_modules/sass-loader/lib/loader.js??ref--5-3!./node_modules/sass-resources-loader/lib/loader.js??ref--5-4!./src/assets/scss/global/global.scss 437 bytes {0} [built] [failed] [1 error]
    
    ERROR in ./src/assets/scss/global/global.scss (./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/lib??ref--5-2!./node_modules/sass-loader/lib/loader.js??ref--5-3!./node_modules/sass-resources-loader/lib/loader.js??ref--5-4!./src/assets/scss/global/global.scss)
    Module build failed: Missing whitespace before :global (16:2)
    
      14 |  * -------------------------- */
      15 |   /* makes the font 33% larger relative to the icon container */
    > 16 |   /* Deprecated as of 4.4.0 */
         |  ^
      17 |   /* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen
      18 |    readers do not read off random characters that represent icons */ }
      19 |   :global :root {
