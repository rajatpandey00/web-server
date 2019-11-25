const express = require('express')
const path = require('path')
const app = express()
const hbs = require('hbs')
const geoCode = require('../apis/geocode')
const weatherDetails = require('../apis/weatherDetails')

const publicDir = path.join(__dirname, '../public') //path join takes two arguments
const partialsSubPath = path.join(__dirname, '../partials')

app.set('view engine', 'hbs')
app.use(express.static(publicDir))
hbs.registerPartials(partialsSubPath)

// app.get('', (req, res) => {
//     res.sendFile(`${publicDir}/pages/index.html`) // For sending file in response 
// })
app.get('', (req, res) => {
    res.render('index', {
        createdBy: 'Rajat Pandey',
        title: 'Weather-App'
    })
})

app.get('/help', (req, res) => {
    res.render('help-page', {
        title: 'Help Page'
    })
})

app.get('/weather', (req, res) => {
    const address = req.query.location
    if(address){
        geoCode(address, (error, { latitude, longitude } = {}) => {
            if (error === null) {
              weatherDetails(latitude, longitude, ({ icon, temperature }) => {
                const information = `The weather in ${address} will be, ${icon} with around ${temperature} of temperature`
                res.send({ forecast: information, address })
              })
            } else {
                res.send({ error })
            }
          })
    }
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        creator: 'Rajat Pandey'
    })
})

app.get('/help/*', (req, res) => {
    res.render('error-page', {
        title: 'Error',
    })
})

app.listen(3000, () => {
    console.log('Server running!!!!')
})