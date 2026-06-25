const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
    });
}, {
    threshold: 0.5,
})
let boxes = document.querySelectorAll('.box')
boxes.forEach(box => observer.observe(box));


let blink = document.querySelector('.blink')

const observer2 = new IntersectionObserver((entries1) => {
    if (entries1[0].isIntersecting){
        entries1[0].target.classList.add('alert')
    } else{
        entries1[0].target.classList.remove('alert')
    }
}, {threshold: 0.5})
console.log(blink)
observer2.observe(blink)
