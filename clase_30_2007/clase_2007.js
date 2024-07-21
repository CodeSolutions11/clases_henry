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
/*
function recorrerArrays(arr){
    

    arr.forEach(element => {
        document.write(`
            <div>${element}</div>    
        `);
    });

}
*/
/*
function recorrerSubArrays(arr){

    arr.forEach(element => {
        document.write(`
            <div> 
                Nombre: ${element[0]}  
                Stock: ${element[1]}
            </div>    
        `);
    });

}
*/

function recorrerArrays(arr, arrDatos){
    /*
    console.log(arr[0]);
    console.log(typeof arr[0] );
    console.log(arr[0].length );
    console.log(arr[0].length >= 2);
    console.log(typeof arr[0] != 'string');
    */
    /*if((arr[0].length >= 2) && (typeof arr[0] != 'string') ){
        arr.forEach(element => {
            document.write(`
                <div> 
                    Nombre: ${element[0]}  
                    Stock: ${element[1]}
                </div>    
            `);
        });
    }
    */
    if(typeof arr[0] == 'object'){
        /*
        if(arr[0].length == 3){
            arr.forEach(element => {
                document.write(`
                    <div> 
                        Nombre: ${element[0]}  
                        Stock: ${element[1]}
                        Precio: ${element[2]}
                    </div>    
                `);
            });
        }else{
            arr.forEach(element => {
                document.write(`
                    <div> 
                        Nombre: ${element[0]}  
                        Stock: ${element[1]}
                    </div>    
                `);
            });
        }
        */
        arr.forEach( element => {
            element.forEach( (e, posE) =>{
                console.log(e, posE);

                document.write(`
                    <div>
                        <span>
                        ${arrDatos[posE]}:
                        </span>
                        ${e}
                    </div>    
                `)}
            )
            
        });
        
        
    }else{
        arr.forEach(element => {
            document.write(`
                <div>
                    <span>
                        ${arrDatos[0]}:
                    </span> 
                    ${element}
                </div>    
            `);
        });
    }
    

}


recorrerArrays(nombres, datos);
document.write("<hr>");
recorrerArrays(productos, datos);
document.write("<hr>");
recorrerArrays(productos2, datos);
//recorrerSubArrays(productos);