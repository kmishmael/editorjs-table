const postcss = require('postcss')
const fs = require('fs')
const styleLoader = require('style-loader')
const cssLoader = require('css-loader')
const postcssLoader = require('postcss-loader')



fs.readFile('input.css', (err, css) => {
    console.log(css.toString())
    if(css){
    postcss([styleLoader, cssLoader, postcssLoader])
      .process(css, { from: 'input.css', to: 'output.css' })
      .then(result => {
        fs.writeFile('output.css', result.css, () => true)
        if ( result.map ) {
          fs.writeFile('output.css.map', result.map.toString(), () => true)
        }
      })
    }
  })