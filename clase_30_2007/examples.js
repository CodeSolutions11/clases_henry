const datos = ['Nombre', 'Stock', 'Precio'];

const nombres = ['Henry', 'Pablo', 'Juan', 'Carla'];

const productos = [
    ['frutas', 5],
    ['verduras', 10],
    ['bebidas', 17],
];

const productos2 = [
    ['Zapatos', 5, '300$'],
    ['Camisas', 10, '400$'],
    ['Sueters', 17, '500$'],
];

nombres.forEach( function (element, posElement){
    document.write(`
        <div>
            <span>${datos[0]}:</span> ${element} - ${posElement}
        </div>    
    `);
});

document.write('<hr>');

productos.forEach( element => {
    element.forEach( (e, posE) => {
        document.write(`
            <div>
                <span>${datos[posE]}:</span> ${e} - ${posE}
            </div>    
        `);
    })
});

document.write('<hr>');


productos2.forEach( element => {
    element.forEach( (e, posE) => {
        document.write(`
            <div>
                <span>${datos[posE]}:</span> ${e} - ${posE}
            </div>    
        `);
    })
});


/*
nombres.forEach(element => {
    document.write(`
        <div>
            <span>
                ${datos[0]}:
            </span> 
            ${element}
        </div>    
    `);
});
*/