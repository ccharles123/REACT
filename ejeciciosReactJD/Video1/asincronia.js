// ANCHOR ---> FECTH Y ASYNG - AWAIT

let url = "https://rickandmortyapi.com/api/character"

//1) utilizando el Fech obtener la inforacion de una Api.

//const consulta = fetch(url)
//.then( ( res ) => res.json())
//.then( ( res ) => console.log( res.results ) );

//2) utilizando el ASING para obtener la información de una API.

const handleData = async ()=>{

    const consulta = await fetch(url)
    let data = await consulta.json()
    console.log(data.results)

}

handleData()
