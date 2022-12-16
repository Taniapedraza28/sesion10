console.log("Entro al archivo JS");
const bodyReference = document.querySelector("body");

function btnCambiarColor() {
    console.log("Entro al boton");
    setTimeout(cambiarColor, 3000);
    //setInterval(cambiarColor, 3000);
    console.log("Deberia ejecutar al FINAL del cambio de color");
    //cambiarColor();
}



function cambiarColor(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    //console.log("Mi numero aleatorio es:" + randomColor);
    bodyReference.style.backgroundColor = `#${randomColor}`;
}