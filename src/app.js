const express = require('express')
const path = require('path')
const app = express()
const hbs = require('hbs')

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
        title : 'Weather-App'
    })
})

app.get('/help', (req, res) => {
    res.render('help-page', {
       title: 'Help Page'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Cloudy with 50 degree temperature',
        location: 'Texas'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        creator: 'Rajat Pandey'
    })
})

app.listen(3000, () => {
    console.log('Server running!!!!')
})