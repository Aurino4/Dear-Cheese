const shopcontent = document.getElementById("prueba"); //aqui muestra el div prueba del html , coge el elemento por id//
let carrito = [];
const localStorage = window.localStorage;
const exclusivo = document.getElementById("exclusivo");
const novedad = document.getElementById("novedad");
const productosdestacados = document.getElementById("productosdestacados")
const almacendequesos = [  //1ero creamos el array un json que dentro va el id y el nombre
    {
        id: 1,
        nombre: "Queso rojo de cabra",
        descripcion: " Delicioso queso artesanal de cabra madurado durante siete meses en los valles de Aturias occidental",
        precio: 9.10,
        foto: "img/quesorojocabra.jpg",
        categoria: "Exclusivos",

    },
    {
        id: 2,
        nombre: "Queso de oveja Abredo",
        descripcion: " Creado con la leche de ovejas que pastan libremente en Abredo, un queso con un cuerpo y texturas características",
        precio: 10.00,
        foto: "img/quesoovejaabredo.jpg",
        categoria: "Novedades",

    },
    {
        id: 3,
        nombre: "Queso maduro tres leches",
        descripcion: " Mezcla de tres leches para un queso muy maduro con un aroma carismático y un sabor único",
        precio: 12.30,
        foto: "img/quesomadurotresleches.jpg",
        categoria: "Productos destacados",

    },
    {
        id: 4,
        nombre: "Queso de oveja La Colllada",
        descripcion: " La Colllada es un precioso pueblo donde pastan las ovejas que producen la leche característica que imprime una personalidad exclusiva a nuestro queso",
        precio: 14.90,
        foto: "img/quesodeovejalacollada.jpg",
        categoria: "Productos destacados"

    },
    {
        id: 5,
        nombre: "Queso de Coaña",
        descripcion: " Gracias a la tradición quesera de la Coaña conseguimos este fabuloso queso suave y cremoso de vacas asturianas",
        precio: 9.50,
        foto: "img/quesodeovejalacollada.jpg",
        categoria: "Exclusivos",

    },
    {
        id: 6,
        nombre: "Queso cabrales",
        descripcion: " Enigmático y poderoso uno de los quesos más particulares de Asturias, una experiencia para el paladar reconocido a nivel internacional",
        precio: 17.10,
        foto: "img/quesocabrales.jpg",
        categoria: "Novedades",

    },
    {
        id: 7,
        nombre: "Queso azul de vaca",
        descripcion: " El rey cremoso y de sabor terrestre que proviene de las vacas occidentales que pastan en los acantilados de la bella costa Asturiana",
        precio: 14.00,
        foto: "img/quesoazulvaca.jpg",
        categoria: "Productos destacados",

    },
    {
        id: 8,
        nombre: "Queso Afuegal Pitu",
        descripcion: " Maravilloso queso elaborado según las tradiciones centenarias de la comarca dl Pitu",
        precio: 12.30,
        foto: "img/quesoafuegalpitu.jpg",
        categoria: "Novedades",

    },
]
//  exclusivos.addEventListener("click",()=> {
//     almacendequesos.forEach((product)=>{
//     if (product.categoria=="pruebas"){
//         let content=document.createElement("div");
//         content.classname="mostrar";
//     content.innerHTML=`
//     <img src="${product.foto}" width="300px">
//     <h3>${product.nombre}</h3>
//     <p>${product.descripcion}</p>
//     <p>${product.precio}</p>`;
//     shopcontent.append(content);
//     let comprar=document.createElement("button");
//     comprar.innerText="Comprar";
//     comprar.classname="color";
//     content.append(comprar);
//     }

//     })

//    });
// intento.addEventListener("click",()=>{
// almacendequesos.forEach((product)=>{
//     if (product.categoria =="pruebas") {
//         let content=document.createElement("div");
//         content.className="mostrar";
//         content.innerHTML=`
//         <img src="${product.foto}" width="300px">
//         <h3 class="colorex">${product.nombre}</h3>
//         <p>${product.descripcion}</p>
//         <p>${product.precio}</p>`;
//         shopcontent.append(content);
//         let comprar=document.createElement("button");
//         comprar.innerText="Comprar";
//         comprar.className="color";
//         content.append(comprar);
//     }
//     //console.info(product)
//         });

//     });

//----------------------------------------Categoria:Exclusivos----------------------------------//
var limite = true; //asi limitamos que haciendo click al llamarle true , cada vez que lo haga que salgan los mismos productos mil veces//
exclusivo.addEventListener("click", () => {
    if (limite == true) {
        almacendequesos.forEach((product) => {
            if (product.categoria == "Exclusivos") {
                let content = document.createElement("div");
                content.className = "cajas";
                content.innerHTML = `
            <img src="${product.foto}" width="300px">
            <h3 class=color4>${product.nombre}</h3>
            <p>${product.descripcion}</p>
            <p>${product.precio}</p>`;

                shopcontent.append(content);
                let comprar = document.createElement("button");
                comprar.innerText = "Comprar";
                comprar.className = "comprar";
                content.append(comprar);
            }
            limite = false;

        });
    }



    console.log(product);
});


var alcance = true; // por cada categoria acordarse de cambiar el nombre de la variable
novedad.addEventListener("click", () => {
    if (alcance == true) {
        almacendequesos.forEach((product) => {
            if (product.categoria == "Novedades") {
                let content = document.createElement("div");
                content.className = "cajas";
                content.innerHTML = `
            <img src="${product.foto}" width="300px">
            <h3 class=color1>${product.nombre}</h3>
            <p>${product.descripcion}</p>
            <p>${product.precio}</p>`;

                shopcontent.append(content);
                let comprar = document.createElement("button");
                comprar.innerText = "Comprar";
                comprar.className = "comprar";
                content.append(comprar);
            }
            alcance = false;

        });
        console.log(product);
    }



    
});

var deaquinopasas = true; // por cada categoria acordarse de cambiar el nombre de la variable
productosdestacados.addEventListener("click", () => {
    if (alcance == true) {
        almacendequesos.forEach((product) => {
            if (product.categoria == "Productos destacados") {
                let content = document.createElement("div");
                content.className = "cajas";
                content.innerHTML = `
            <img src="${product.foto}" width="300px">
            <h3 class=color2>${product.nombre}</h3>
            <p>${product.descripcion}</p>
            <p>${product.precio}</p>`;

                shopcontent.append(content);
                let comprar = document.createElement("button");
                comprar.innerText = "Comprar";
                comprar.className = "comprar";
                content.append(comprar);
            }
            deaquinopasas = false;

        });
    }



    console.log(product);
});




   




//ESTO ES UNA PRUEBA //

//queso es la array , foreach ( porfavo hazme un bucle) de que de los elementos que se llaman productos y cada productos
//creamos un elemento div que se llama content se guarda como variable.
//Este content añadismos dentro del su html añadimos el h3 que tiene el id de la array de queso.
//el append guarda el contentido dentro del shopconten que es el div que tiene el contenido prueba.



