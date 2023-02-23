
// this function runs the initial domLogic, that which renders the page!!

async function domLogic() {


    // once we import module, do something with it!
    let dom = await import('./modules/domLogic.js')

// call the function to render the page initially!
    dom.initialRender()
}

domLogic()









// this function will import the module that gets the weather data from the api and returns response.json()
// this function will then extract that data into variables
// once we have those variables, we can call dom logic, etc

async function importWeather(type, ...args) {
try {
    

    // wait for the weather module to import
let weather = await import('./modules/getweatherfromapi.js')

// once we have module can run the get weather function with the relevant type and the params..
// since it is async we must await the response

let weatherResponse = await weather.getWeather(type, ...args)

// it returns a resolved promise with the response of the weather object
// log the object which can be filtered for the data we want


// filter the data below
// create the data we need
const city = weatherResponse.name
const lat = weatherResponse.coord.lat
const lon = weatherResponse.coord.lon
const weathertypemain = weatherResponse.weather[0].main
const weatherdescription = weatherResponse.weather[0].description
const tempfeelslike = weatherResponse.main.feels_like
const temp = weatherResponse.main.temp
const temphigh = weatherResponse.main.temp_max
const templow = weatherResponse.main.temp_min
const humidity = weatherResponse.main.humidity
const rainchance = ''
const windspeed = weatherResponse.wind.speed

console.log(city, weathertypemain,weatherdescription, tempfeelslike, temp,temphigh,templow,humidity,rainchance, windspeed)




// we can also call the function to populate the five day forecast data for us
// as we have the lat and long from above
const forecast = await weather.getForecast(lat,lon)



console.log('FIVE DAY FORECAST BELOW')

for  (let index of forecast.list) {
console.log('index')
}

}

// catch an error in importWeather async function
catch(err) {
    console.log('error in importWeather', err)
}









}


console.log('RUN FUNCTION TO GET WEATHER AND POST FORECAST AS WELL')
//importWeather('latlong', '43.3668', '-80.9497')
//importWeather('search', 'TORONTO', 'CA')
importWeather('postal', 'N4Z', 'CA')


// we will run import weather when we need weather!