let milocalstorage =window.localStorage; 
let carro=document.getElementById("carro");
const cesta=document.getElementById("cesta");
function guardar (itemscarrito) {
    milocalstorage.setItem("itemscarrito",JSON.stringify(carrito));
}


//let carrito = JSON.parse(localStorage.getItem("carrito")) || [];// retorna el objeto que se corresponde con el texto json
//let almacendequesos= document.getElementById("almacen-quesos");


carro.addEventListener("click",() =>{
carrito.forEach((product)=>{
let contenido=document.createElement("div");
contenido.innerHTML=`
<img src="${product.foto}" width="50px">
            <h3 class=color1>${product.nombre}</h3>
            <p>${product.precio}</p>`
cesta.append(contenido);




})

});




