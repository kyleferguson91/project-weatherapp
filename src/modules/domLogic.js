import bgimage from '../images/bg.jpg'

export async function initialRender() {

// set background image to image
const body = document.querySelector('body')
body.style.backgroundImage = `url(${bgimage})`

}