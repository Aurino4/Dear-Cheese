//const shopContent = document.getElementById("shopContent"); //aqui muestra el div prueba del html , coge el elemento por id//
//let carrito = [];
//const localStorage = window.localStorage;
const exclusivo = document.getElementById("exclusivo");
const novedad = document.getElementById("novedad");
const productosdestacados = document.getElementById("productosdestacados")
const mostrar = document.getElementById("mostrarexclusivos");
const mostrarnovedades = document.getElementById("mostrarnovedades");
const mostrardestacados = document.getElementById("mostrardestacados");
const todos=document.getElementById("todos");
//---------------------------------Todos--------------------------------------------------------//
todos.addEventListener("click", () => {

    shopContent.innerHTML = "" //borrar todo el contenido dentro del div principal
    almacendequesos.forEach((product) => {
        
            let content = document.createElement("div");
            content.className = "cajas";
            content.innerHTML = `
                <img src="${product.foto}" width="300px">
            <h3 class=color1>${product.nombre}</h3>
            <p class="pcategorias">${product.descripcion}</p>
            <p class="price">${product.precio} €</p>`
            shopContent.append(content); // añadimos div al index con el nombre mostrarexclusivos para que solo muestre los exclusivos


            let comprar = document.createElement("button");
            // console.log(comprar);
            comprar.innerText = "Comprar";
            comprar.className = "Comprar";
            //  comprar.innerHTML=`<button class="comprar">comprar</button>`
            content.append(comprar);
            comprar.addEventListener("click", () => {

                carrito.push({
                    id: product.id,
                    nombre: product.nombre,
                    precio: product.precio,
                    foto: product.foto,
                    cantidad: product.cantidad,

                });

            });
        

    });

});






//----------------------------------------Categoria:Exclusivos----------------------------------//
exclusivo.addEventListener("click", () => {

    shopContent.innerHTML = "" //borrar todo el contenido dentro del div principal
    almacendequesos.forEach((product) => {
        if (product.categoria == "Exclusivos") {
            let content = document.createElement("div");
            content.className = "cajas";
            content.innerHTML = `
                <img src="${product.foto}" width="300px">
            <h3 class=color1>${product.nombre}</h3>
            <p class="pcategorias">${product.descripcion}</p>
            <p class="price">${product.precio} €</p>`
            shopContent.append(content); // añadimos div al index con el nombre mostrarexclusivos para que solo muestre los exclusivos


            let comprar = document.createElement("button");
            // console.log(comprar);
            comprar.innerText = "Comprar";
            comprar.className = "Comprarexclusivos";
            //  comprar.innerHTML=`<button class="comprar">comprar</button>`
            content.append(comprar);
            comprar.addEventListener("click", () => {

                carrito.push({
                    id: product.id,
                    nombre: product.nombre,
                    precio: product.precio,
                    foto: product.foto,
                    cantidad: product.cantidad,

                });

            });
        }

    });




});

//-----------------------------------------Categoria Novedades--------------------------------------------

novedad.addEventListener("click", () => {
    shopContent.innerHTML = ""
    almacendequesos.forEach((product) => {
        if (product.categoria == "Novedades") {
            let content = document.createElement("div");
            content.className = "cajas";
            content.innerHTML = `
            <img src="${product.foto}" width="300px">
            <h3 class=color1>${product.nombre}</h3>
            <p class="pcategorias">${product.descripcion}</p>
            <p class="price">${product.precio} €</p>`;

            shopContent.append(content);
            let comprar = document.createElement("button");
            comprar.innerText = "Comprar";
            comprar.className = "ComprarNovedades";
            content.append(comprar);
            content.append(comprar);
            comprar.addEventListener("click", () => {

                carrito.push({
                    id: product.id,
                    nombre: product.nombre,
                    precio: product.precio,
                    foto: product.foto,
                    cantidad: product.cantidad,

                });

            });
        }


    });
});
//------------------------------------------Categoria Productos destacados ----------------------------------

productosdestacados.addEventListener("click", () => {
    shopContent.innerHTML = ""
    almacendequesos.forEach((product) => {
        if (product.categoria == "Productos destacados") {
            let content = document.createElement("div");
            content.className = "cajas";
            content.innerHTML = `
            <img src="${product.foto}" width="300px">
            <h3 class=color2>${product.nombre}</h3>
            <p class="pcategorias">${product.descripcion}</p>
            <p class="price">${product.precio} €</p>`;

            shopContent.append(content);
            let comprar = document.createElement("button");
            comprar.innerText = "Comprar";
            comprar.className = "comprar";
            content.append(comprar);
            content.append(comprar);
            comprar.addEventListener("click", () => {

                carrito.push({
                    id: product.id,
                    nombre: product.nombre,
                    precio: product.precio,
                    foto: product.foto,
                    cantidad: product.cantidad,

                });

            });
        }


    });

});


//queso es la array , foreach ( porfavo hazme un bucle) de que de los elementos que se llaman productos y cada productos
//creamos un elemento div que se llama content se guarda como variable.
//Este content añadismos dentro del su html añadimos el h3 que tiene el id de la array de queso.
//el append guarda el contentido dentro del shopconten que es el div que tiene el contenido prueba.



