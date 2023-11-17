class Escuela{
    constructor(nombre){
        this.nombre = nombre;
        this.grupos = [];
    }

    anadirGrupo(nombre){
        let nuevoGrupo = new Grupo(nombre);
        this.grupos.push(nuevoGrupo);
        this.actualizarListasGrupos(this.grupos);
    }

    eliminarGrupo(nombreGrupo){
        let i = 0;

        this.grupos.forEach(grupo => {
            if(nombreGrupo == grupo.nombre){
                this.grupos.splice(i, 1);
            }
            i++;
        });

        this.actualizarListasGrupos(this.grupos);

    }

    actualizarListasGrupos(grupos){
        let selectEliminarGrupo = document.getElementById("eliminar_nombreGrupo");
        let selectMostrarGrupo = document.getElementById("mostrar_nombreGrupo");
        let selectAnadirEstudiante = document.getElementById("grupoEstudiante");
        let selectEliminarEstudiante = document.getElementById("eliminar_grupoEstudiante");
        let selectBuscarEstudiante = document.getElementById("buscarGrupoEstudiante");
        let selectAnadirClase = document.getElementById("grupoClase");
    
        selectEliminarGrupo.innerHTML = "";
        selectMostrarGrupo.innerHTML = "";
        selectAnadirEstudiante.innerHTML = "";
        selectEliminarEstudiante.innerHTML = "";
        selectBuscarEstudiante.innerHTML = "";
        selectAnadirClase.innerHTML = "";

        let elementosSelect = [];
        elementosSelect.push(selectEliminarGrupo);
        elementosSelect.push(selectMostrarGrupo);
        elementosSelect.push(selectAnadirEstudiante);
        elementosSelect.push(selectEliminarEstudiante);
        elementosSelect.push(selectBuscarEstudiante);
        elementosSelect.push(selectAnadirClase);

        elementosSelect.forEach(elemento => {
            let itemNullOption = document.createElement("option");
            itemNullOption.setAttribute("value", `null`);
            itemNullOption.textContent = `(---)`;
            elemento.appendChild(itemNullOption);
        })

        elementosSelect.forEach(elemento => {
            grupos.forEach(grupo => {
                let itemOptionGrupo = document.createElement("option");
                itemOptionGrupo.setAttribute("value", `${grupo.nombre}`);
                itemOptionGrupo.textContent = `${grupo.nombre}`;
                elemento.appendChild(itemOptionGrupo);
            })
        })
    }

    mostrarGrupo(grupo){
        let zonaMostrarGrupo = document.getElementById("zonaMostrarGrupo");
        zonaMostrarGrupo.innerHTML = "";
        
        let headerTable = document.createElement("ul");
        headerTable.setAttribute("class", "header");
        headerTable.innerHTML = `
            <li class="item-header" id="id_header">ID</li>
            <li class="item-header" id="nombre_header">Nombre</li>
            <li class="item-header" id="apellido_header">Apellido</li>
            <li class="item-header" id="grupo_header">Grupo</li>
            <li class="item-header" id="promedio_header">Promedio</li>
        `
        zonaMostrarGrupo.appendChild(headerTable);

        grupo.estudiantes.forEach(estudiante => {
            let rowInfoEstudiante = document.createElement("ul");
            rowInfoEstudiante.innerHTML = `
            <li>${estudiante.id}</li>
            <li>${estudiante.nombre}</li>
            <li>${estudiante.apellido}</li>
            <li>${estudiante.grupo}</li>
            <li>${estudiante.getPromedio()}</li>
            `

            zonaMostrarGrupo.appendChild(rowInfoEstudiante);
        })
    }

    mostrarIDAsc(grupo){
        let estudiantes = grupo.estudiantes;
        let idMayor = 0;
        let arregloDesplegable = [];

        estudiantes.forEach(estudiante => {
            let idEstudiante = estudiante.id;
            
            if(idEstudiante > idMayor){
                arregloDesplegable.push(estudiante);
                idMayor = idEstudiante;
            } else {
                
            }
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
        this.actualizarListasEstudiantes(this.estudiantes);
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

    actualizarListasEstudiantes(selectActualizable){
        selectActualizable.innerHTML = "";

        this.estudiantes.forEach(estudiante => {
            let itemOptionEstudiante = document.createElement("option");
            itemOptionEstudiante.setAttribute("value", `${estudiante.id}`);
            itemOptionEstudiante.textContent = `${estudiante.id} - ${estudiante.nombre} ${estudiante.apellido}`;
            selectActualizable.appendChild(itemOptionEstudiante);
        })

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

    mostrarEstudiante(estudiante){
        let idEstudiante = document.getElementById("mostrarIdEstudiante");
        let nombreEstudiante = document.getElementById("mostrarNombreEstudiante");
        let apellidoEstudiante = document.getElementById("mostrarApellidoEstudiante");
        let grupoEstudiante = document.getElementById("mostrarGrupoEstudiante");
        let clasesEstudiante = document.getElementById("mostrarClasesEstudiante");

        idEstudiante.innerHTML = "";
        nombreEstudiante.innerHTML = "";
        apellidoEstudiante.innerHTML = "";
        grupoEstudiante.innerHTML = "";
        clasesEstudiante.innerHTML = "";

        idEstudiante.textContent = `${estudiante.id}`;
        nombreEstudiante.textContent = `${estudiante.nombre}`;
        apellidoEstudiante.textContent = `${estudiante.apellido}`;
        grupoEstudiante.textContent = `${estudiante.grupo}`;

        estudiante.clases.forEach(clase => {
            let itemClase = document.createElement("li");
            itemClase.innerHTML = `<div class="eLIzquierda">${clase.nombre}: </div><div class="eLDerecha">${clase.calificacion}</div>`
            clasesEstudiante.appendChild(itemClase);
        })
        
        let promedioEstudiante = document.createElement("li");
        promedioEstudiante.innerHTML = `<div class="eLIzquierda">Promedio:</div><div class="eLDerecha">${estudiante.getPromedio()}</div>`;
        clasesEstudiante.appendChild(promedioEstudiante);
    }

}

class Clase{
    constructor(nombre, calificacion){
        this.nombre = nombre;
        this.calificacion = calificacion;
    }
}

const miEscuela = new Escuela("miEscuela");

/* -------------------- BOTONES TARGETS -------------------- */

/* Añadir Grupo */
let btnAnadirGrupo = document.getElementById("anadirGrupo");
btnAnadirGrupo.addEventListener("click", () => {
    let nombreGrupo = document.getElementById("nombreGrupo");
    miEscuela.anadirGrupo(nombreGrupo.value);
    nombreGrupo.value = "";
    
})

/* Eliminar Grupo */
let btnEliminarGrupo = document.getElementById("eliminarGrupo");
btnEliminarGrupo.addEventListener("click", () => {
    let nombreGrupo = document.getElementById("eliminar_nombreGrupo").value;
    miEscuela.eliminarGrupo(nombreGrupo);
})

/* Mostrar Grupo */
let btnMostrarGrupo = document.getElementById("mostrarGrupo");
btnMostrarGrupo.addEventListener("click", () => {
    let nombreGrupo = document.getElementById("mostrar_nombreGrupo").value;
    
    let zonaMostrarGrupo = document.getElementById("zonaMostrarGrupo");
    zonaMostrarGrupo.innerHTML = "";

    miEscuela.grupos.forEach(grupo => {
        if(grupo.nombre == nombreGrupo){
            miEscuela.mostrarGrupo(grupo);
        }
    })
})

/* Añadir Estudiante */
let btnAnadirEstudiante = document.getElementById("anadirEstudiante");
btnAnadirEstudiante.addEventListener("click", () => {

    let idEstudiante = document.getElementById("idEstudiante");
    let grupoEstudiante = document.getElementById("grupoEstudiante");
    let nombreEstudiante = document.getElementById("nombreEstudiante");
    let apellidoEstudiante = document.getElementById("apellidoEstudiante");

    miEscuela.grupos.forEach(grupo => {
        if(grupo.nombre == grupoEstudiante.value){
            grupo.anadirEstudiante(idEstudiante.value, nombreEstudiante.value, apellidoEstudiante.value, grupoEstudiante.value);
        }
    })

    idEstudiante.value = "";
    grupoEstudiante.value = "";
    nombreEstudiante.value = "";
    apellidoEstudiante.value = "";
})

/* Eliminar Estudiante */
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

/* Buscar Estudiante */
let btnBuscarEstudiante = document.getElementById("buscarEstudiante");
btnBuscarEstudiante.addEventListener("click", () => {
    let grupoEstudiante = document.getElementById("buscarGrupoEstudiante").value;
    let idEstudiante = document.getElementById("buscarIdEstudiante").value;

    miEscuela.grupos.forEach(grupo => {
        if(grupo.nombre == grupoEstudiante){
            console.log("encontré el Grupo")
            grupo.estudiantes.forEach(estudiante => {
                if(estudiante.id == idEstudiante){
                    console.log("encontré el Estudiante");
                    estudiante.mostrarEstudiante(estudiante);
                }
            })
        }
    });
})

/* Añadir Clase */
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

/* -------------------- ACTUALIZAR OPTIONS -------------------- */


/* Actualizar Options Estudiantes */
let selectGrupoClase = document.getElementById("grupoClase");
selectGrupoClase.addEventListener("change", () => {
    let grupoSeleccionado = document.getElementById("grupoClase").value;
    let selectActualizable = document.getElementById("idEstudianteClase");

    miEscuela.grupos.forEach(grupo => {
        if(grupo.nombre == grupoSeleccionado){
            grupo.actualizarListasEstudiantes(selectActualizable);
        }
    })
})

/* Actualizar Options Estudiantes */
let buscarGrupoEstudiante = document.getElementById("buscarGrupoEstudiante");
buscarGrupoEstudiante.addEventListener("change", () => {
    let grupoSeleccionado = document.getElementById("buscarGrupoEstudiante").value;
    let selectActualizable = document.getElementById("buscarIdEstudiante");

    miEscuela.grupos.forEach(grupo => {
        if(grupo.nombre == grupoSeleccionado){
            grupo.actualizarListasEstudiantes(selectActualizable);
        }
    })
})

/* Actualizar Options Estudiantes */
let eliminar_grupoEstudiante = document.getElementById("eliminar_grupoEstudiante");
eliminar_grupoEstudiante.addEventListener("change", () => {
    let grupoSeleccionado = document.getElementById("eliminar_grupoEstudiante").value;
    let selectActualizable = document.getElementById("eliminar_idEstudiante");

    miEscuela.grupos.forEach(grupo => {
        if(grupo.nombre == grupoSeleccionado){
            grupo.actualizarListasEstudiantes(selectActualizable);
        }
    })
})

 
/* -------------------- BOTONES TABLA -------------------- */

let btnIdHeader = document.getElementById("id_header");
btnIdHeader.addEventListener("click", () => {
    let grupoActual = document.getElementById("mostrar_nombreGrupo").value;
    miEscuela.grupos.forEach(grupo => {
        if(grupo.nombre == grupoActual){
            miEscuela.mostrarIDAsc(grupo);
        }
    })
})