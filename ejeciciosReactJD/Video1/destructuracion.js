//ANCHOR --->DESTRUCTURAR OBJETOS Y ARREGLOS

//creamos un objeto

let mascota = {
    nombre: "Bombon",
    edad:"1 año",
    raza:"Shitzu"
}

//Destructuro el objeto
//console.log(mascota.nombre)
//console.log(mascota.edad)
//console.log(mascota.raza)

// otra forma de hacerlo
const{edad, nombre, raza} = mascota
//console.log(raza)
//console.log(edad)
//console.log(nombre)

// array
const arrayMascotas = ["Rocky", "Bombon", "Layka"]

//console.log(arrayMascotas[0])
//console.log(arrayMascotas[1])
//console.log(arrayMascotas[2])

const [m1, m2, m3] = arrayMascotas

console.log(m1)
console.log(m2)
console.log(m3)



