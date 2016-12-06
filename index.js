'use strict'

const fs = require('fs')
const xlsx = require('tfk-json-to-xlsx')
const repackData = require('./lib/repack-data')
const isJSON = (item) => /.json/.test(item)

module.exports = (options, callback) => {
  if (!options) {
    return callback(new Error('Missing required input: options'), null)
  }

  if (!options.dataPath) {
    return callback(new Error('Missing required input: options.dataPath'), null)
  }

  if (!options.reportPath) {
    return callback(new Error('Missing required input: options.reportPath'), null)
  }

  const files = fs.readdirSync(options.dataPath).filter(isJSON)

  const data = files.map((file) => require(`./${options.dataPath}/${file}`))

  const result = data.map(repackData)

  xlsx.write(options.reportPath, result, (error) => {
    if (error) {
      return callback(error, null)
    } else {
      return callback(null, 'Report written')
    }
  })
}
