let prevBtn = document.querySelector('#prev')
let nextBtn = document.querySelector('#next')
let img = document.querySelector('#gallery-img')
let heroSection = document.querySelector('.hero')
let notification = document.querySelector('#notify')
let scrollBtn = document.querySelector('#scroll')

let pos = 0
let bgPos = 0
let imageArray = ["bg.jpg", "john_snow.jpg", "next.png", "pic.jpg", "redis.png"]

img.src = `./photos/${imageArray[pos]}`

prevBtn.addEventListener('click', () => {
    if (pos == 0){
        pos = imageArray.length - 1
    }
    else{
        pos--
    }
    img.src = `./photos/${imageArray[pos]}`

})

function newImage(){
    if (pos == imageArray.length - 1){
        pos = 0
    }
    else{
        pos++
    }
    img.src = `./photos/${imageArray[pos]}`
}
nextBtn.addEventListener('click', newImage)

window.setInterval(() => {
    if (bgPos == imageArray.length - 1){
        bgPos = 0
    }
    else{
        bgPos++
    }
    heroSection.style.backgroundImage = `url('./photos/${imageArray[bgPos]}')`
}, 3000)

setTimeout(() => {
    notification.style.display = "none"
}, 5000)

window.addEventListener('scroll', () => {
    if (window.scrollY > 200){
        scrollBtn.style.display = "block"
    }
    else{
        scrollBtn.style.display = "none"
    }
})

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})