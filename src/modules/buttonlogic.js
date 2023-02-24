// this is a master function that will call all functions to add button logic!
export function addButtonLogic() {
    addSearchButtonLogic()
    addUnitLogic()
}



export async function addSearchButtonLogic() {

    const searchbutton = document.querySelector('#submitbutton')

    searchbutton.addEventListener('click', async (e) => {
       
        e.preventDefault()


        const input = document.querySelector('#searcher')
        const country = document.querySelectorAll('option')
        let selectedcountry = 'CA';

        country.forEach((elem,ind,arr) => {
           if (elem.selected) {
            selectedcountry = elem.value
           }
        
        })

        console.log(input.value, selectedcountry)
   




        // now wait for main weathergetfunction through script
        let weather = await import('../script.js')


        // now it is imported, wait upon the promise to resolve the response
        // this will console log itself
        let units = selectedcountry == 'CA' ? 'metric' : 'imperial'
       weather = await weather.importWeather('search',units, input.value, selectedcountry)
    
       // now we have the relevant variables created within 
       //import weather to update the dom accordingly!
       input.value = ""
  
     
    })





}

function addUnitLogic() {

const unitbutton = document.querySelector('.unitselector')

unitbutton.addEventListener('click', async (e) => {

try {
    // when we click anywhere in the span, move the slider

const slider = document.querySelector('.slider')

// when we move the slider we want to call the API again and update the dom
// this time with different units!

let change = await import('../modules/domLogic.js')


if (slider.classList.contains('moveselector')) {

    // if it is currently on class, remove the class
    // and call the api with metric
    slider.classList.remove('moveselector')
    console.log(change.changeUnit('metric'))



}




else {


    // add the class and call api with imperial,
    // also adjust wind speed content.. variable in dom logic

    slider.classList.add('moveselector')
    console.log(change.changeUnit('imperial'))





}
// once this happens update the dom accordingly..
// if class is present, units are imperial, if no present, units are metric!




}

catch(err)
 {
    console.log('error in unitbutton event lister', err)
 }


})



}