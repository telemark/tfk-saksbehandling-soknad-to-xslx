'use strict'

const tap = require('tap')
const reportGenerator = require('../../index')

tap.ok(reportGenerator, 'tfk-saksbehandling-soknad-to-xslx loads ok')

tap.test('It requires an options object', (childTest) => {
  const expectedErrorMessage = 'Missing required input: options'
  const options = false

  reportGenerator(options, (error, message) => {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    childTest.done()
  })
})
