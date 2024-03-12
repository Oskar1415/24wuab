const menu_button=document.getElementById("menu_button")
const menu=document.getElementById("menu")

var opened = false

menu_button.addEventListener("click", (e) => {
    opened = !opened
    if(opened) {        
        menu.classList.add("visible")
        menu_button.classList.add("visible")

        return;
    }
    menu.classList.remove("visible")
    menu_button.classList.remove("visible")

    
})



