//ANCHOR --->METODO MAP, FILTER y FIND

//metodo MAP
let arrayNumeros = [2, 4, 5];
//muestra en pantalla la sumatoria del elemento + el indice [2+0, 4+1, 5+2]
let numerosMapeados = arrayNumeros.map((elemento, indice) => elemento + indice);
console.log(numerosMapeados);

//Metodo FILTER
let arrayProductos = [
    {
        nombre: "telefono",
        precio: 150
    },
    {
        nombre: "computadora",
        precio: 200
    },
    {
        nombre: "tablet",
        precio: 100
    }
]

//filtro a todos los elementos que tengan un precio menor o igual a 150
let productosFiltrados = arrayProductos.filter((elemento, indice)=> elemento.precio <= 150);
console.log(productosFiltrados);

//buscará el primer elemento que cumpla con la condicion que sea igual a 150
let productorSeleccionado = arrayProductos.find((elemento, indice)=> elemento.precio === 150);
console.log(productorSeleccionado);

