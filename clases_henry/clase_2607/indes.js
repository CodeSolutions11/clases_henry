
// Objetos
/*
const player = {
    constructor(name){
        console.log(name)
    },
    life: 99,

    correr: function(){
        console.log("El jugador está corriendo")
    },
    disparar: () => {
        console.log('Estás disparando')
    }
};

let name = prompt("Escribe tu nombre")


player.constructor(name);


console.log(player.life);
player.disparar();
player.correr();
*/


/*

let user = `{
    "nombre": "Adrian",
    "password": 123456    
}`;

// Convertir json a objeto
user = JSON.parse(user);

user.password = "abc123456";

console.log(typeof user);

// Convertir objeto a json

user = JSON.stringify(user);
console.log(typeof user);
*/
/*

let cats = `[
    {
    "id": "7n2",
    "url": "https://cdn2.thecatapi.com/images/7n2.jpg",
    "width": 500,
    "height": 562
    },
    {
    "id": "7os",
    "url": "https://cdn2.thecatapi.com/images/7os.jpg",
    "width": 737,
    "height": 490
    },
    {
    "id": "8lc",
    "url": "https://cdn2.thecatapi.com/images/8lc.png",
    "width": 441,
    "height": 336
    },
    {
    "id": "bcj",
    "url": "https://cdn2.thecatapi.com/images/bcj.jpg",
    "width": 500,
    "height": 429
    },
    {
    "id": "cph",
    "url": "https://cdn2.thecatapi.com/images/cph.gif",
    "width": 312,
    "height": 239
    },
    {
    "id": "e63",
    "url": "https://cdn2.thecatapi.com/images/e63.jpg",
    "width": 799,
    "height": 599
    },
    {
    "id": "MTY1Mjg5NQ",
    "url": "https://cdn2.thecatapi.com/images/MTY1Mjg5NQ.jpg",
    "width": 500,
    "height": 338
    },
    {
    "id": "MTg3NjIwNA",
    "url": "https://cdn2.thecatapi.com/images/MTg3NjIwNA.jpg",
    "width": 480,
    "height": 640
    },
    {
    "id": "MjAzNzYxOQ",
    "url": "https://cdn2.thecatapi.com/images/MjAzNzYxOQ.jpg",
    "width": 498,
    "height": 565
    },
    {
    "id": "Kfq3biw92",
    "url": "https://cdn2.thecatapi.com/images/Kfq3biw92.png",
    "width": 1600,
    "height": 1067
    }
]`


console.log(typeof cats);

cats = JSON.parse(cats)

console.log(typeof cats);
console.log(cats);

cats.forEach(cat => {
    console.log(cat.url);
    document.write(`
    <img width="300" height="300" src="${cat.url}">
    `);
});

*/

/*
fetch('https://api.thecatapi.com/v1/images/search?limit=10')
.then(function(response){
    return response.json()
})
.then(res => res.forEach(cat => {
    document.write(`
      <img width="300" height="300" src="${cat.url}">
    `)  
}))
*/
/*
fetch('../json/cats.json')
.then(function(response){
    return response.json()
})
.then(res => res.forEach(cat => {
    document.write(`
      <img width="300" height="300" src="${cat.url}">
    `)  
}))
*/


// Iteradores de objetos
/*
const user = {
    nombre: "Adrian",
    apellido: "Moreno",
    edad: 27,
    visitadoParis: false,
    ciudadesVisitadas: ["Ccs","Mérida", "Apure"]
};
*/

// const iterador = Object.keys(user);

//const iterador = Object.values(user);
//const iterador = Object.entries(user);

let properties = ["Nombre", "Edad", "Color"];
let values = ["Fabi", "24", "blanca"];

const entries = [];
/*
let test = Object.keys(properties);
console.log(test);
*/
for(let i in properties){

    const key = properties[i];
    const value = values[i];

    entries.push([key, value]);
}

console.log(entries);

const user = Object.fromEntries(entries);
console.log(user);