function buttononclick4 () {
    const classbutton = document.getElementById("produc");
    Swal.fire({
        title:"Alerta",
        text: "Estas apunto de ingresar a una sala de conferencia, estas seguro?",
        icon: "question",
        timer: 20000,
        confirmButtonColor:"#2fd20f",      
    }) .then (function redireccionar(){
        window.location="https://zoom.us/";
      } )
}
function stylus (){
    const button3 = document.getElementById("produc").style.borderColor="black";

}

function stylus2 (){
    const button4 = document.getElementById("produc").style.borderColor="silver";
}