let form = document.querySelector('form')
let toggleIcon = document.querySelector("#switch")
let ulTag = document.createElement("ul")
let body = document.body

let attendaceList = JSON.parse(localStorage.getItem("attendance")) || []

function updateScreen(){
    ulTag.innerHTML = ""
    attendaceList.forEach((element, idx) => {
        let li = document.createElement("li")
        li.innerHTML = `${element} <button onClick='removeFromArray(${idx})'>Remove</button><br><br>`
        ulTag.append(li)
    });
}

updateScreen()

form.insertAdjacentElement('afterend', ulTag)

form.addEventListener('submit', e => {
    e.preventDefault()
    let input = e.target.abc
    let text = input.value.trim()
    if (text.length < 1) return
    let li = document.createElement('li')
    li.innerHTML = `${text} <button onClick='removeFromArray(${attendaceList.length})'>Remove</button><br><br>`
    ulTag.append(li)
    attendaceList.push(text)
    localStorage.setItem("attendance", JSON.stringify(attendaceList))
    input.value = ""
})


function removeFromArray(idx){
    attendaceList.splice(idx, 1)
    localStorage.setItem("attendance", JSON.stringify(attendaceList))
    updateScreen()
}

toggleIcon.addEventListener("click", () => {
    if (toggleIcon.classList.contains('fa-toggle-on')){
        toggleIcon.classList.replace('fa-toggle-on', 'fa-toggle-off')
        body.classList.remove('dark')
        body.classList.add('light')
    }
    else{
        toggleIcon.classList.replace('fa-toggle-off', 'fa-toggle-on')
        body.classList.add('dark')
        body.classList.remove('light')
    }
})