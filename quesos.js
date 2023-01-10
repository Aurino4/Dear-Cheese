const shopcontent=document.getElementById("prueba"); //aqui muestra el div prueba del html , coge el elemento por id//
const queso=[  //1ero creamos el array un json que dentro va el id y el nombre
    {
        id:1,
        nombre:"hola",
        images : "img/usuario.png",

        
    },
    {
        id:2,
        nombre:"adios",
        images : "img/francia.png",
    },
];
queso.forEach((product)=>{ //recorremos todo el array por el foreach y cada vez que recorremos el array nos crean en htm un h3 y le metemos el nombre del producto
    let content=document.createElement("div");
    //content.innerHTML=`<h3>${product.id}</h3>
    content.innerHTML=`<img src ="${product.images}"> 
    `; //creando etiqueta imagen . 
shopcontent.append(content); //el resultado que te da es para meterlo en un div padre que se crea en html primero, se ve en inspeccionar elemento 
});


//ESTO ES UNA PRUEBA //






