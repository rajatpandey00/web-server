// const getWeather = (address) => fetch(`http://localhost:3000/weather?location=${address}`).then(response => {
//     response.json().then(data => {
//         console.log(data)
//     })
// })
console.log('Inside Client Java Script')
const weatherForm = document.querySelector('form')
const searchTerm = document.querySelector('input')
const message = document.querySelector('#message')

weatherForm.addEventListener('submit', e => {
    message.textContent = 'Loading...'
    e.preventDefault();
    const search = searchTerm.value
    fetch(`http://localhost:3000/weather?location=${search}`).then(response => {
        response.json().then(data => { 
            if(!data.error) {
            message.textContent = data.forecast
          } else {
            message.textContent = data.error
          }
        })
    })
})