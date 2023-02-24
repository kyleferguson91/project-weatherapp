import bgimage from '../images/bg.jpg'

export async function initialRender(today = new Date(), type = "Wind", city = "Stratford") {

// set background image to image
const body = document.querySelector('body')
body.style.backgroundImage = `url(${bgimage})`




const date = document.querySelector('.date')
// set date to todays value
date.textContent = today




// set type of weather in dom to the current type of weather
const typeofweather = document.querySelector('.typeweather')
typeofweather.textContent = type

const cityselect = document.querySelector('.city')
cityselect.textContent = city


}

