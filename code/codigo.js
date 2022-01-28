const cajas = document.querySelectorAll(".caja");
const contRespuesta = document.querySelector(".cont-respuesta");


cajas.forEach(element => {
    element.addEventListener("click",()=>{
        const respuesta = document.createElement("DIV");
        respuesta.textContent = element.textContent;
        contRespuesta.appendChild(element);
    })
});
