//import bgimage from '../images/bg1.svg'
import bgimage from '../images/bg.jpg'
import thermometerimage from '../images/thermometer-svgrepo-com.svg'
import moistureimage from '../images/moisture-svgrepo-com.svg'
import windspeedimage from '../images/wind-svgrepo-com.svg'
import lowtempimage from '../images/temp-cold-svgrepo-com.svg'
import feelslikeimage from '../images/temperature-feels-like-svgrepo-com.svg'



// this function will run on the main page render, rerender and load!
export async function initialRender(weatherObject, forecastObject) {

// set background image to image
const body = document.querySelector('body')
body.style.backgroundImage = `url(${bgimage})`


// set city to selected city 
const cityselect = document.querySelector('.city')
cityselect.textContent = `${weatherObject.city}, ${weatherObject.country}`


// set date to todays value
const date = document.querySelector('.date')
date.textContent = weatherObject.today



//set thermometer image
const thermometer = document.querySelector('.thermometer')
thermometer.src = thermometerimage

// set the temp to the temp!
const temp = document.querySelector('.currenttemp')
temp.textContent = weatherObject.temp



//set moisture image
const moisture = document.querySelector('.moisture')
moisture.src = moistureimage

// set the humidity to the humidity!
const humidity = document.querySelector('.humidity')
humidity.textContent = weatherObject.humidity



//set wind speed image
const windspeed = document.querySelector('.windspeed')
windspeed.src = windspeedimage

// set the windspeed
const windspeedtext = document.querySelector('.windspeedtext')
windspeedtext.textContent = weatherObject.windspeed



//set lowtemp speed image
const lowtemp = document.querySelector('.lowtempimage')
lowtemp.src = lowtempimage

// set the lowtemp
const lowtemptext = document.querySelector('.lowtemptext')
lowtemptext.textContent = weatherObject.templow



//set feelslike image
const feelslike = document.querySelector('.feelslike')
feelslike.src = feelslikeimage

// set the feelslike
const feelsliketext = document.querySelector('.feelsliketext')
feelsliketext.textContent = weatherObject.tempfeelslike









// set the weather image based on icon code!
setWeatherImage(weatherObject.icon)
// set type of weather in dom to the current type of weather
const descriptionofweather = document.querySelector('.descriptionofweather')
descriptionofweather.textContent = weatherObject.weatherdescription





//call function to build the 5 day forecast logic!
forecastLogic(forecastObject)




}






// this function will set the weather image based on the main type!
export async function setWeatherImage(icon) {

const image = document.querySelector('.mainweatherimage')

let src = `http://openweathermap.org/img/wn/${icon}@2x.png`


image.src = src





}


// this function will be called by dom logic to build the 5 day forecast layout!!

export async function forecastLogic(forecastObject) {

let forecasticons = [], forecasttemps = [], forecastdescriptions = []


    // first we need to determine which day it is right now!
let dates = await import('date-fns')
let today = dates.format(new Date(), 'EEEE')
console.log(today, 'today in forcastlogic')




// we can use the function to add the days to the current day, and then 
// format it into the name of the day of the week, which we can append to the forecast children!

const forecastdays = document.querySelectorAll('.forecastday')
let daystotake = []
// loop through the days, add each day onto the relevant child

let i = 1
while (i < 6) {
    console.log()
    forecastdays[i-1].textContent = dates.format(new Date(dates.addDays(new Date(), i)), 'EEEE')
    daystotake.push(dates.format(new Date(dates.addDays(new Date(), i)), 'EEEE'))
    i++
}


// now that the day text has been set, we must set the data based on the response
// there are several responses from the api, lets filter them 



for (let object of forecastObject) 
{

    // if the day is today, skip the logic!
    if (dates.format(new Date(object.dt*1000), 'EEEE') == today) {
       continue; 
    }

        // if the day is included in the days to take, take the first instance of it
    // then skip all others

    else if (daystotake.includes(dates.format(new Date(object.dt*1000), 'EEEE'))) {


       // console.log('pww', dates.format(new Date(object.dt*1000), 'EEEE'))
        // take the information once, then remove it from the array so it is not checked again..

        //extract the information we want into arrays..
        // we want the temp, the kind of weather, and the icon code!
        

        // ideally this part is when we should call a function from dom logic, 
        // but we made this in dom logic, should belong in a different module!

        // add the values into our arrays 

forecasticons.push(object.weather[0].icon)

forecastdescriptions.push(object.weather[0].description)

forecasttemps.push(object.main.temp)

daystotake.splice(daystotake.indexOf(dates.format(new Date(object.dt*1000), 'EEEE')), 1)

    }
    



}
console.log(forecasttemps, forecasticons, forecastdescriptions)


// now we update the forecast with this info

const descriptions = document.querySelectorAll('.weatherdescription')
const forecasttemp = document.querySelectorAll('.forecasttemp')
const forecastimages = document.querySelectorAll('.forecastimage')


// we want to supply the array values to each of the description values at a 1-1 ratio

for (let index in forecastdescriptions) {
    console.log(index)
descriptions[index].textContent = forecastdescriptions[index]
forecasttemp[index].textContent = forecasttemps[index]
forecastimages[index].src =  `http://openweathermap.org/img/wn/${forecasticons[index]}@2x.png`

}




}