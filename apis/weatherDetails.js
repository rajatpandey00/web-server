const request = require('request')

const weatherDetails = (lat, long, callBack) => {
    const url = `https://api.darksky.net/forecast/1334332e103e81828a9327f40077d9b9/${long},${lat}`
    request({ url, json: true }, (error, response, body) => {
        callBack(body.currently)
    })
}

module.exports = weatherDetails