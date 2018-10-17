const fs = require('fs');

let empleados = [{
    id: 1,
    nombre: 'Irving'
}, {
    id: 2,
    nombre: 'Melissa'
}, {
    id: 3,
    nombre: 'Jorge'
}];

let salarios = [{
    id: 1,
    salario: 2000
}, {
    id: 2,
    salario: 1000
}]

// Obtener usuario
let getUsuarioId = (id) => {

    return new Promise((resolve, reject) => {
        let e = empleados.find(item => item.id == id);
        if (e) {
            let s = salarios.find(item => item.id == id);
            if (s)
                resolve(`El empleado ${e.nombre} tiene un salario de ${s.salario}`);
            else
                reject(`El empleado ${e.nombre} no tiene un salario`);
        } else {
            reject(`El usuario con id ${id}, no existe en la BD`);
        }
    });
}

let usuario = async (id) => {
    return await getUsuarioId(id);
}

usuario(2).then(response => {
    guardarArchivo(response);
}).catch(error => {
    guardarArchivo(error);
});

let guardarArchivo = (data) => {
    fs.writeFile('empleado.txt', data, (err) => {
        if(err) throw err;
        console.log('El archivo ha sido guardado');
    });
}