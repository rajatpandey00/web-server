const express = require('express')
const path = require('path')

const app = express()
const helpPage = path.join(__dirname, './pages/help-page.html') //path join takes two arguments
app.get('/help', (req, res) => {
    res.sendFile(helpPage) // For sending file in response 
})

app.get('', (req, res) => { // app.get('', (res, req) => {})
    res.send('Hello Express!!')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Cloudy with 50 degree temperature',
        location: 'Texas'
    })
})

app.get('/about', (req, res) => {
    res.send({
        name: 'Rajat',
        designation: 'Full Stack Engineer'
    })
})

app.listen(3000, () => {
    console.log('Server running!!!!')
})