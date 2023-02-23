
// this module will get the relevant weather data from the API based off of the input
// it will be called with a specific type to determine the API call to make
// other than different API calls all processing on returned object is the same



// api key and units stored for default

let key = 'e7586190b18aabfa5360d51959d40794'
let units = 'metric'






export async function getWeather(type, ...args) {

// the function will take the type, based on the type it will make the appropriate api call from api object
const apiObject = {
    search:`https://api.openweathermap.org/data/2.5/weather?q=${args[0]},${args[1]}&appid=${key}&units=${units}`,
    postal:`https://api.openweathermap.org/data/2.5/weather?zip=${args[0]},${args[1]}&appid=${key}&units=${units}`,
    latlong:`https://api.openweathermap.org/data/2.5/weather?lat=${args[0]}&lon=${args[1]}&appid=${key}&units=${units}`,
   
}

// depending on the type and arguments passed, await the returned response

let response = await fetch(apiObject[type], {mode: 'cors'})


// extract json out of that response which returns a promise
response = await response.json()


// after response json promise resolves, log the response
return response




}


// THIS FUNCTION WILL GET THE 5 DAY FORECAST FROM THE RELEVANT LONG AND LAT OF THE ABOVE FUNCTION


export async function getForecast(lat,lon) {

    try {
         let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=${units}`)
        

    response = response.json()
    return response
        }

        catch(err) {
            console.log('error in getForecast', err) 
        }


}