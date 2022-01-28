const cajas = document.querySelectorAll(".caja")

cajas.forEach(element => {
    element.addEventListener("click",()=>{
        element.textContent = "selected";
        element.style.background = "#999";
        element.style.opacity = ".8"
        element.style.border = "2px solid #000"
    })
});
