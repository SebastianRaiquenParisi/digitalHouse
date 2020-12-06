const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerJSON: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    escribirJSON:function(tareas){
        let tareasJSON=JSON.stringify(tareas, null, 2);
        fs.writeFileSync(this.archivo, tareasJSON);
    },
    guardarTarea:function(tarea){
        let tareas = this.leerJSON();
        tareas.push(tarea);
        this.escribirJSON(tarea);
    }
}




module.exports = archivoTareas;