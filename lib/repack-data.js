'use strict'

function flatten (id, item) {
  var obj = {}

  Object.keys(item).forEach((itemKey) => {
    if (itemKey !== 'stepName') {
      obj[`${id}${itemKey}`] = item[itemKey].toString()
    }
  })

  return obj
}

function entryCheck (item) {
  const firstKey = Object.keys(item)[0]
  if (item[firstKey]) {
    return flatten('', item[firstKey])
  } else {
    if (firstKey === 'partners') {
      return { partner: '' }
    } else if (firstKey === 'samarbeidsparter') {
      return { beskrivelse: '' }
    } else {
      return item
    }
  }
}

module.exports = (data) => {
  var out = Object.assign({},
    { id: data._id },
    flatten('organisasjon', data.organisasjon),
    flatten('kontaktperson', data.kontaktperson),
    flatten('', data.formal),
    entryCheck({ artform: data.artform }),
    flatten('kategori', data.kategorier),
    flatten('', data.target),
    flatten('tiltak', data.tiltak),
    flatten('', data.finanser),
    flatten('', data.collaboration),
    entryCheck({ partners: data.partners }),
    entryCheck({ samarbeidsparter: data.samarbeidsparter }),
    entryCheck({ bidrag: data.bidrag })
  )

  return out
}
