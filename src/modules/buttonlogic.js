// this is a master function that will call all functions to add button logic!
export function addButtonLogic() {
    addSearchButtonLogic()
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
   
       weather = await weather.importWeather('search', input.value, selectedcountry)
    
       // now we have the relevant variables created within 
       //import weather to update the dom accordingly!

    })





}