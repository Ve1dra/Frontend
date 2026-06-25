let pages = document.getElementsByClassName('page')

function changePage(index){
    for(let i = 0; i < pages.length; i++){
        pages[i].style.display = "none"
    }
    pages[index].style.display = "block"
}

changePage(0)