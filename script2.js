class Escuela{
    constructor(nombre){
        this.nombre = nombre;
        this.grupos = [];
    }

    anadirGrupo(nombre){
        let nuevoGrupo = new Grupo(nombre);
        this.grupos.push(nuevoGrupo);
        console.log(this.grupos);
    }

    eliminarGrupo(nombreGrupo){
        let i = 0;

        this.grupos.forEach(grupo => {
            if(nombreGrupo == grupo.nombre){
                this.grupos.splice(i, 1);
            }
            i++;
        });

        console.log(this.grupos);
    }

    mostrarGrupo(grupo){
        let zonaMostrarGrupo = document.getElementById("zonaMostrarGrupo");
        zonaMostrarGrupo.innerHTML = "";
        
        grupo.estudiantes.forEach(estudiante => {
            let nuevoEstudianteInfo = document.createElement("div");
            nuevoEstudianteInfo.textContent = `
            Id: ${estudiante.id} || 
            Nombre: ${estudiante.nombre} || 
            Apellido: ${estudiante.apellido} || 
            Grupo: ${estudiante.grupo} ||
            Promedio: ${estudiante.getPromedio()};
            `

            zonaMostrarGrupo.appendChild(nuevoEstudianteInfo);
        })
    }
}

class Grupo{
    constructor(nombre){
        this.nombre = nombre;
        this.estudiantes = [];
        this.promedio = null;
    }

    anadirEstudiante(id, nombre, apellido, grupo){
        let nuevoEstudiante = new Estudiante(id,nombre, apellido, grupo);
        this.estudiantes.push(nuevoEstudiante);
        console.log(this.estudiantes);
    }

    eliminarEstudiante(idEstudiante){
        let i = 0;

        this.estudiantes.forEach(estudiante => {
            if(idEstudiante == estudiante.id){
                this.estudiantes.splice(i, 1);
            }
            i++;
        });

        console.log(this.estudiantes);
    }
}

class Estudiante{
    constructor(id, nombre, apellido, grupo){
        this.id = id;        
        this.nombre = nombre;
        this.apellido = apellido;
        this.clases = [];
        this.grupo = grupo;
    }

    anadirClase(nombre, calificacion){
        let nuevaClase = new Clase(nombre, calificacion);
        this.clases.push(nuevaClase);
    }

    getPromedio(){
        let sumaCalificaciones = 0;

        this.clases.forEach(clase => {
            sumaCalificaciones = sumaCalificaciones + Number(clase.calificacion);
        })

        let promedio = sumaCalificaciones / this.clases.length;
        return promedio;
    }

}

class Clase{
    constructor(nombre, calificacion){
        this.nombre = nombre;
        this.calificacion = calificacion;
    }
}

const miEscuela = new Escuela("miEscuela");

let btnAnadirGrupo = document.getElementById("anadirGrupo");
btnAnadirGrupo.addEventListener("click", () => {
    let nombreGrupo = document.getElementById("nombreGrupo").value;
    miEscuela.anadirGrupo(nombreGrupo);
})

let btnEliminarGrupo = document.getElementById("eliminarGrupo");
btnEliminarGrupo.addEventListener("click", () => {
    let nombreGrupo = document.getElementById("eliminar_nombreGrupo").value;
    miEscuela.eliminarGrupo(nombreGrupo);
})

let btnAnadirEstudiante = document.getElementById("anadirEstudiante");
btnAnadirEstudiante.addEventListener("click", () => {
    let idEstudiante = document.getElementById("idEstudiante").value;
    let grupoEstudiante = document.getElementById("grupoEstudiante").value;
    let nombreEstudiante = document.getElementById("nombreEstudiante").value;
    let apellidoEstudiante = document.getElementById("apellidoEstudiante").value;

    miEscuela.grupos.forEach(grupo => {
        if(grupo.nombre == grupoEstudiante){
            grupo.anadirEstudiante(idEstudiante, nombreEstudiante, apellidoEstudiante, grupoEstudiante);
        }
    })
})

let btnEliminarEstudiante = document.getElementById("eliminarEstudiante");
btnEliminarEstudiante.addEventListener("click", () => {
    let grupoEstudiante = document.getElementById("eliminar_grupoEstudiante").value;
    let idEstudiante = document.getElementById("eliminar_idEstudiante").value;

    miEscuela.grupos.forEach(grupo => {
        if(grupo.nombre == grupoEstudiante){
            grupo.eliminarEstudiante(idEstudiante);
        }
    })
})

let btnMostrarGrupo = document.getElementById("mostrarGrupo");
btnMostrarGrupo.addEventListener("click", () => {
    let nombreGrupo = document.getElementById("mostrar_nombreGrupo").value;
    

    miEscuela.grupos.forEach(grupo => {
        if(grupo.nombre == nombreGrupo){
            miEscuela.mostrarGrupo(grupo);
        }
    })
})

let btnAnadirClase = document.getElementById("anadirClase");
btnAnadirClase.addEventListener("click", () => {
    let grupoClase = document.getElementById("grupoClase").value;
    let idEstudiante = document.getElementById("idEstudianteClase").value;
    let nombreClase = document.getElementById("nombreClase").value;
    let calificacionClase = document.getElementById("calificacionClase").value;

    miEscuela.grupos.forEach(grupo => {
        if(grupo.nombre == grupoClase){
            grupo.estudiantes.forEach(estudiante => {
                if(estudiante.id == idEstudiante){
                    estudiante.anadirClase(nombreClase, calificacionClase);
                }
            })
        }
    })
})