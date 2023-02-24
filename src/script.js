

// this function runs the initial domLogic, that which renders the page!!

async function domLogic() {


    // once we import sdmodule, do something with it!
    let dom = await import('./modules/domLogic.js')


// call the function to render the page initially!
// and call with certain defaults..
    
dom.initialRender()

    
}

domLogic()




//after we render page call the logic that adds event listeners!

async function addEvents() {


    // return the import promise of button module
    let events = await import('./modules/buttonlogic.js')

    // now run function to add all logic!
    events.addButtonLogic()



}

addEvents()








// this function will import the module that gets the weather data from the api and returns response.json()
// this function will then extract that data into variables
// once we have those variables, we can call dom logic, etc

export async function importWeather(type, ...args) {
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

const tempfeelslike = weatherResponse.main.feels_like
const temp = weatherResponse.main.temp
const temphigh = weatherResponse.main.temp_max
const templow = weatherResponse.main.temp_min
const humidity = weatherResponse.main.humidity
const rainchance = ''
const windspeed = weatherResponse.wind.speed

const today = new Date()




// create a loop to check for relevant weather icons and conditions!
let multipleconditions, multipledescriptions,maincondition, icon, multipleicons,weathertypemain,weatherdescription
multipleicons = []
multipleconditions = []
multipledescriptions = []
// condition if only one weather condition

if (weatherResponse.weather.length > 1) {
    console.log('cond length 1',   weatherResponse.weather[0]
    )

    icon = weatherResponse.weather[0].icon
     weathertypemain = weatherResponse.weather[0].main
 weatherdescription = weatherResponse.weather[0].description
}

else if (weatherResponse.weather.length == 1) {

   

    // for all additional items.. 

    for (let item of weatherResponse.weather) {

        if (weatherResponse.weather.indexOf(item) == 0) {
             // set the main weather and description to first object and icon
    icon = item.icon
    weathertypemain = item.main
    weatherdescription = item.description
    console.log(item, 'item')
        }

        else {
            multipleicons.push(item.icon)
            multipleconditions.push(item.main)
            multipledescriptions.push(item.description)
    }

    }

}

//icon now holds the correct code for the image we need!


// conditions and icons log
console.log('conds icons', icon, weathertypemain, weatherdescription, multipleconditions, multipledescriptions, multipleicons)


// log the data here

console.log(city, weathertypemain,weatherdescription, tempfeelslike, temp,temphigh,templow,humidity,rainchance, windspeed, today)


// we can also call the function to populate the five day forecast data for us
// as we have the lat and long from above
const forecast = await weather.getForecast(lat,lon)



console.log('FIVE DAY FORECAST BELOW')

for  (let index of forecast.list) {
console.log('index')
}



// now we call the dom update function any time we run this function
// with the relevant variables created above

const dom = await import('../src/modules/domLogic.js')

dom.initialRender(today, weatherdescription)


}

// catch an error in importWeather async function
catch(err) {
    console.log('error in importWeather', err)
}









}


console.log('RUN FUNCTION TO GET WEATHER AND POST FORECAST AS WELL')
//importWeather('latlong', '43.3668', '-80.9497')
importWeather('search', 'stratford', 'CA')
// importWeather('postal', 'N4Z', 'CA')


// we will run import weather when we need weather!