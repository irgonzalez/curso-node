const fs = require('fs');

let crearArchivo = (base, hasta, comando) => {
    
    let tabla = '';
    let ruta = './tablas/mensaje.txt';
    //fs.unlink(ruta, ()=>{});

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base debe ser un número.`);
        }

        for(let i  = 1; i <= hasta; i++){
            tabla += (`${base} * ${i} = ${base*i} \n`);
        }

        // Tipo de comando
        switch(comando){
            case 'listar':
                resolve(tabla);
                break;
            case 'crear':
                fs.writeFile(ruta, tabla, (err) => {
                    if(err){
                        reject(`Ocurrió un error al crear el archivo`);
                    }else{
                        resolve(`Archivo creado correctamente en: ${ruta}`);
                    } 
                });
                break;
        }
    });
}

module.exports = {
    crearArchivo
}