//ANCHOR --->CONDICIONAL TERNARIO Y OPERADOR AND (&&)

let rolusuario = "vendedor";

//JS
if (rolusuario === "vendedor") {
console.log("tu stock es de 10 productos");
}else{
    console.log("Lo siento no puedo brindarte esa informacion");
}

//Ternario
let mensaje = rolusuario === "vendedor" ? "tu Stock es de 10 productos" : "Lo siento no puedo brindarte esa informacion"
console.log(mensaje);

//Operador AND &&
console.log(rolusuario === "vendedor" && "tu stock es de 10 productos")

