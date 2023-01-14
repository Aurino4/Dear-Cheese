//const shopContent = document.getElementById("shopContent"); //aqui muestra el div prueba del html , coge el elemento por id//
//let carrito = [];
//const localStorage = window.localStorage;
const exclusivo = document.getElementById("exclusivo");
const novedad = document.getElementById("novedad");
const productosdestacados = document.getElementById("productosdestacados")
const mostrar = document.getElementById("mostrarexclusivos");
const mostrarnovedades= document.getElementById("mostrarnovedades");
const mostrardestacados = document.getElementById ("mostrardestacados");


//----------------------------------------Categoria:Exclusivos----------------------------------//
var limite=true;
exclusivo.addEventListener("click", ()=> {
   
    
   
    if (limite==true) {
        shopContent.style.visibility = 'hidden'; //para ocultar todos los quesos y que se vean los exclusivos
        almacendequesos.forEach((product)=> {
            if (product.categoria == "Exclusivos") {
                let content=document.createElement("div");
                content.className ="cajas";
                content.innerHTML=`
                <img src="${product.foto}" width="300px">
            <h3 class=color1>${product.nombre}</h3>
            <p class="pexclusivos">${product.descripcion}</p>
            <p class="price">${product.precio} €</p>`
            mostrarexclusivos.append(content); // añadimos div al index con el nombre mostrarexclusivos para que solo muestre los exclusivos
           
        
            let comprar =document.createElement("button");
           // console.log(comprar);
           comprar.innerText = "Comprar";
            comprar.className = "Comprarexclusivos";
              //  comprar.innerHTML=`<button class="comprar">comprar</button>`
            content.append(comprar);
            comprar.addEventListener ("click",() => {
                
                carrito.push ({
                 id:product.id,
                 nombre:product.nombre,
                 precio:product.precio,
                 foto:product.foto,
                    
                });
                
            });
            }
            limite=false;
        });
        

        
    };
});

//-----------------------------------------Categoria Novedades--------------------------------------------
var alcance = true; // por cada categoria acordarse de cambiar el nombre de la variable
novedad.addEventListener("click", () => {
    shopContent.style.visibility = 'hidden';
    mostrarexclusivos.style.visibility = 'hidden';
    if (alcance == true) {
        almacendequesos.forEach((product) => {
            if (product.categoria == "Novedades") {
                let content = document.createElement("div");
                content.className = "cajas";
                content.innerHTML = `
            <img src="${product.foto}" width="300px">
            <h3 class=color1>${product.nombre}</h3>
            <p class="pnovedades">${product.descripcion}</p>
            <p class="priceN">${product.precio} €</p>`;

            mostrarnovedades.append(content);
                let comprar = document.createElement("button");
                comprar.innerText = "Comprar";
                comprar.className = "ComprarNovedades";
                content.append(comprar);
            }
            alcance = false;

        });
        
    }



    
});
//------------------------------------------Categoria Productos destacados ----------------------------------
var deaquinopasas = true; // por cada categoria acordarse de cambiar el nombre de la variable
productosdestacados.addEventListener("click", () => {
    if (deaquinopasas == true) {
        almacendequesos.forEach((product) => {
    shopContent.style.visibility = 'hidden';
    mostrarexclusivos.style.visibility = 'hidden';
    mostrarnovedades.style.visibility = 'hidden';

            if (product.categoria == "Productos destacados") {
                let content = document.createElement("div");
                content.className = "cajas";
                content.innerHTML = `
            <img src="${product.foto}" width="300px">
            <h3 class=color2>${product.nombre}</h3>
            <p class="pdestacados">${product.descripcion}</p>
            <p class="priceD">${product.precio} €</p>`;

                mostrardestacados.append(content);
                let comprar = document.createElement("button");
                comprar.innerText = "Comprar";
                comprar.className = "comprar";
                content.append(comprar);
            }
            deaquinopasas = false;

        });
    }



   
});


//queso es la array , foreach ( porfavo hazme un bucle) de que de los elementos que se llaman productos y cada productos
//creamos un elemento div que se llama content se guarda como variable.
//Este content añadismos dentro del su html añadimos el h3 que tiene el id de la array de queso.
//el append guarda el contentido dentro del shopconten que es el div que tiene el contenido prueba.



