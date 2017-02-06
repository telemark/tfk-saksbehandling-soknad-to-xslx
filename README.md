[![Build Status](https://travis-ci.org/telemark/tfk-saksbehandling-soknad-to-xslx.svg?branch=master)](https://travis-ci.org/telemark/tfk-saksbehandling-soknad-to-xslx)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# tfk-saksbehandling-soknad-to-xslx

[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/tfk-saksbehandling-soknad-to-xslx.svg)](https://greenkeeper.io/)

Parses all .json-files in a directory and creates an .xlsx-file.

## Systems supported
- tilskudd

## Usage

```JavaScript
'use strict'

const reportGenerator = require('tfk-saksbehandling-soknad-to-xslx')
const options = {
  dataPath: 'test/data',
  reportPath: 'test/data/report.xlsx'
}

reportGenerator(options, (error, message) => {
  if (error) {
    console.error(error)
  } else {
    console.log(message)
  }
})
```

## License
[MIT](LICENSE)