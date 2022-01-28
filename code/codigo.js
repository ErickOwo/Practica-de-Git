const cajas = document.querySelectorAll(".caja");
const respuesta = document.getElementById("respuesta");

let beforeValue, beforeClass;


cajas.forEach(element => {
    element.addEventListener("click",function valueDiv(e){
        const selected = document.querySelector(".selected")
        if(selected){
            element.classList.remove("selected")
            element.classList.add(beforeClass);
            element.textContent = beforeValue;
        } 
        else {
            respuesta.value = element.textContent;
            beforeValue = element.textContent;
            beforeClass = e.target.classList[1];
            element.classList.remove(e.target.classList[1])
            element.classList.add("selected");
            element.textContent = "selected";
        }
    })
});
