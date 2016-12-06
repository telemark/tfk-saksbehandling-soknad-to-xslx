'use strict'

const reportGenerator = require('./index')
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
