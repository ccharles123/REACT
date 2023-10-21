// ANCHOR ---> OPERADOR SPREAD PARA OBJETOS Y ARREGLOS

//SPREAD PARA OBJETOS
let usuario = {
    nombre: "carlos",
    email: "carlos@gmail.com",
}

//usuario.id = 1

//console.log(usuario);

//muestra el usuarioconId con la información del usuario como si fuese uno solo.
let usuarioConId = {
    id: 1,
    ...usuario
}
console.log(usuarioConId)

//SPREAD PARA ARRAY
let numeros = [1, 2, 3]
let numeroNuevos = [...numeros]
numeroNuevos.push(4)
console.log(numeros)
console.log(numeroNuevos)



