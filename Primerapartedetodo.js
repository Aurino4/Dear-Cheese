const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const showAlert = document.getElementById("showAlert");
const cantidadCarrito = document.getElementById("cantidadCarrito");
const usuario=document.getElementById("usuario");
const buscador=document.getElementById("buscador")
var carrito = JSON.parse(localStorage.getItem("carrito")) || [];
//esta línea de código esta recuperando un objeto guardado en el almacenamiento del navegador con nombre "carrito" y lo esta convirtiendo en un objeto javascript. En caso de no existir el objeto, se asigna un arreglo vacío a la variable "carrito"
usuario.addEventListener("click", () => {
  alert ("no esta disponible")
});

buscador.addEventListener("click", () => {
  alert ("no esta disponible")
});


almacendequesos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
      <img src="${product.foto}" width="300px">
      <h3 class="color1">${product.nombre}</h3>
      <p class="price">${product.precio} €</p>`;
  
    shopContent.append(content);
  
    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";
  
    content.append(comprar);
  
    comprar.addEventListener("click", () => {
      const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);//si coinciden los ids , en este caso me hace un if o else
  
      if (repeat) {
        carrito.map((prod) => {  //
          if (prod.id === product.id) {
            prod.cantidad++;
          }
        });
      } else {
        carrito.push({
          id: product.id,
          foto: product.foto,
          nombre: product.nombre,
          precio: product.precio,
          cantidad: product.cantidad,
        });
        console.log(carrito);
        console.log(carrito.length);
        carritoCounter();   // me cuenta los elementos que hay en el carrito
        saveLocal();
      }
    });
  });
  
  //set item
  const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  };
  
  //get item
  