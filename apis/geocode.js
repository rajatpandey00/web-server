const request = require('request')

const geoCode = (address, callback) => {
  const encodedURIAddress = encodeURIComponent(address)
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedURIAddress}.json?access_token=pk.eyJ1IjoicmFqYXRwYW5kZXkwMCIsImEiOiI4OWQzNmFjYzUyMDRlNTY1ZTIzMzYyOTFlZWIzNDc5MiJ9.wazERnOVDysZOR77Tey2cw`
  request({ url, json: true }, (error, { body }) => {
    if (error === null) {
      if (body.features.length === 0) {
        callback('Unable To find Location', undefined)
      } else {
        const latitude = body.features[0].center[0]
        const longitude = body.features[0].center[1]
        const data = {
          latitude, longitude
        }
        callback(null, data)
      }
    }
  })
}
module.exports = geoCode