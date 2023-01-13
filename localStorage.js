// let milocalstorage =window.localStorage; 
// let carro=document.getElementById("carro");
// const cesta=document.getElementById("cesta");
// let total=0;
// function guardar (itemscarrito) {
//     milocalstorage.setItem("itemscarrito",JSON.stringify(carrito));
// }


// //let carrito = JSON.parse(localStorage.getItem("carrito")) || [];// retorna el objeto que se corresponde con el texto json
// //let almacendequesos= document.getElementById("almacen-quesos");


// carro.addEventListener("click",() =>{
// carrito.forEach((product)=>{
// let contenido=document.createElement("div");
// contenido.innerHTML=`
// <img src="${product.foto}" width="50px">
//             <h3 class=color1>${product.nombre}</h3>
//             <p>${product.precio}</p>`
// cesta.append(contenido);




// })

// });
var carrito = JSON.parse(localStorage.getItem("carrito")) || [];
console.log(carrito);
const pintarCarrito = () => { 
 //sacar la vista del carro con los productos comprados
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    modalContainer.className = "modal-container";
    const modalHeader = document.createElement("div"); //el div padre se llama modalContainer
    
    modalHeader.className = "modal-header";
  
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito.</h1>
      `;
    modalContainer.append(modalHeader);
  
    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";
  
    modalbutton.addEventListener("click", () => {
      modalContainer.style.display = "none";
    });
  
    modalHeader.append(modalbutton);
  
    carrito.forEach((product) => {
      let carritoContent = document.createElement("div");
      carritoContent.className = "modal-content";
      carritoContent.innerHTML = `
          <img src="${product.foto}" width="300px">
          <h3>${product.nombre}</h3>
          <p>${product.precio} € </p>
          <span class="restar"> - </span>
          <!--recomiendo no escribir la palabra cantidad para que no quede tan largo :)-->
          <p>${product.cantidad}</p>
          <span class="sumar"> + </span>
          <p>Total: ${product.cantidad * product.precio} €</p>
          <span class="delete-product"> ❌ </span>
        `;
  
      modalContainer.append(carritoContent);
  
      let restar = carritoContent.querySelector(".restar");
  
      restar.addEventListener("click", () => {
        if (product.cantidad !== 1) {  //si es distinto de 1 te resta uno
          product.cantidad--;
        }
        saveLocal();
        pintarCarrito();
      });
  
      let sumar = carritoContent.querySelector(".sumar");
      sumar.addEventListener("click", () => {
        product.cantidad++;
        saveLocal();
        pintarCarrito();
      });
  
      let eliminar = carritoContent.querySelector(".delete-product");
  
      eliminar.addEventListener("click", () => {
        eliminarProducto(product.id);
      });
  
      // let eliminar = document.createElement("span");
      // eliminar.innerText = "❌";
      // eliminar.classList = "delete-product";
      // carritoContent.append(eliminar);
  
      // eliminar.addEventListener("click", eliminarProducto);
    });
  
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
  
    const totalBuying = document.createElement("div");               
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `Total a pagar: ${total} €`;
    modalContainer.append(totalBuying);
  };
  
  verCarrito.addEventListener("click", pintarCarrito);
  
  const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id);
  
    console.log(foundId);
  
    carrito = carrito.filter((carritoId) => {
      return carritoId !== foundId; 
    });
  
    carritoCounter();     
    saveLocal();
    pintarCarrito();
  };
  
  const carritoCounter = () => {
    cantidadCarrito.style.display = "none";
  
    const carritoLength = carrito.length;    //Luego, establece una variable "carritoLength" igual a la longitud del arreglo "carrito", es decir, el número de elementos en el carrito
  
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
  
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
  };
  
  carritoCounter(); //esta función se encarga de actualizar el contador de carrito mostrando la cantidad de productos en el carrito, guardando y recuperando esta cantidad en el almacenamiento local.

//

