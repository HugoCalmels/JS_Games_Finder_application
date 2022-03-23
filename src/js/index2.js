console.log("hi")

import Home from "./Home.js"

let links = document.querySelectorAll('[data-link]')

const app = document.querySelector('#app')

const home = new Home()


console.log(links)

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    console.log(link)
    app.innerHTML = home.getHtml()
    home.buildHtml()
  })
})

