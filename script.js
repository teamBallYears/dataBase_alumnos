class Escuela {
  constructor(nombre) {
    this.nombre = nombre;
    this.grupos = [];
  }

  guardarGrupo(grupo) {
    this.grupos.push(grupo);
  }

  actualizarListaGrupos() {
    let opcionesGrupos = document.getElementById("opcionesGrupos");

    while (opcionesGrupos.firstChild) {
      opcionesGrupos.removeChild(opcionesGrupos.firstChild);
    }

    this.grupos.forEach((grupo) => {
      let itemGrupo = document.createElement("option");
      itemGrupo.setAttribute("value", `${grupo.nombre}`);
      itemGrupo.innerText = `${grupo.nombre}`;

      opcionesGrupos.appendChild(itemGrupo);
    });
  }

  seleccionarGrupo(grupoSeleccionado) {
    this.grupos.forEach((grupo) => {
      console.log("verificando");
      if (grupoSeleccionado == grupo.nombre) {
        let tituloGrupo = document.getElementById("nombreGrupo");
        tituloGrupo.innerText = `${grupo.nombre}`;
      }
    });
  }

  eliminarGrupo(){

  }
}

class Grupo {
  constructor(nombre) {
    this.nombre = nombre;
    this.estudiantes = [];
    this.promedioGrupal = null;
    this.mejorPromedio = null;
  }

  anadirAlumno(){

  }
  seleccionarAlumno(){

  }
  eliminarAlumno(){

  }
}


class Alumno {
  constructor(nombre, apellido){
    this.id = null;
    this.nombre = nombre;
    this.apellido = apellido;
    this.promedio = null;
    this.clases = [];
  }
}


let escuela1 = new Escuela("Mariano Carrillo");

/* AÑADIR GRUPO */
let btn_anadirGrupo = document.getElementById("btn_anadirGrupo");
btn_anadirGrupo.addEventListener("click", () => {
  let input_nombreGrupo = document.getElementById("input_nombreGrupo");
  let nombreGrupo = input_nombreGrupo.value;
  input_nombreGrupo.value = "";

  let nuevoGrupo = new Grupo(nombreGrupo);
  escuela1.guardarGrupo(nuevoGrupo);
  escuela1.actualizarListaGrupos();
});

/* BTN SELECCIONAR GRUPO */
let btn_seleccionarGrupo = document.getElementById("btn_seleccionarGrupo");
btn_seleccionarGrupo.addEventListener("click", () => {
  let opcionesGrupos = document.getElementById("opcionesGrupos");
  let grupoSeleccionado = opcionesGrupos.value;
  escuela1.seleccionarGrupo(grupoSeleccionado);
});


/* BTN CREAR ALUMNO */
let btn_nuevoAlumno = document.getElementById("btn_nuevoAlumno");
btn_nuevoAlumno.addEventListener('click', () => {

  /* Despliegue de section nuevoAlumno */
  let section_nuevoAlumno = document.getElementById("sectionNuevoAlumno");
  section_nuevoAlumno.style.display = "flex";


})



let i_aC = 0;
let btn_anadirClase = document.getElementById("btn_anadirClase");
btn_anadirClase.addEventListener('click', () => {
  
  /* Leer el form */
  let form_clasesAlumnos = document.getElementById("form_clasesAlumnos");

  /* Crear item */
  let item_claseNuevoAlumno = document.createElement("div");
  item_claseNuevoAlumno.setAttribute("class", `item_claseNuevoAlumno`);
  item_claseNuevoAlumno.setAttribute("id", `item_claseNuevoAlumno_${i_aC}`);
  item_claseNuevoAlumno.innerHTML = `
    <label for="nombreClase_${i_aC}">Clase</label>
    <input type="text" id="nombreClase_${i_aC}" class="p-input nombreClase">
    <label for="calificacionClase_${i_aC}">Cal</label>
    <input type="number" id="calificacionClase_${i_aC}" class="p-input calificacionClase">
  `;

  form_clasesAlumnos.appendChild(item_claseNuevoAlumno)

  i_aC++;
})

let btn_guardarAlumno = document.getElementById("btn_guardarAlumno");
btn_guardarAlumno.addEventListener('click', () => {
  i_aC = 0;

  /* Instancia Alumno */
  let input_nombreNuevoAlumno = document.getElementById("input_nombreNuevoAlumno");
  let input_apellidoNuevoAlumno = document.getElementById("input_apellidoNuevoAlumno");
  let nombreAlumno = input_nombreNuevoAlumno.value;
  let apellidoAlumno = input_apellidoNuevoAlumno.value;

  const alumno = new Alumno(nombreAlumno, apellidoAlumno);

  /* Despliegue de section nuevoAlumno */
  let section_nuevoAlumno = document.getElementById("sectionNuevoAlumno");
  section_nuevoAlumno.style.display = "none";

  let formularios = [];
  let form_clasesAlumnos = document.getElementById("form_clasesAlumnos");
  let forms_clases = form_clasesAlumnos.querySelectorAll("#form_clasesAlumnos .item_claseNuevoAlumno")

  forms_clases.forEach(form => {
    formularios.push(form);
  });

  formularios.forEach(respuestas => {
    let elementoClase = respuestas.querySelector(".item_claseNuevoAlumno .nombreClase")
    let elementoCalificacion = respuestas.querySelector(".item_claseNuevoAlumno .calificacionClase")

    let nombreClase = elementoClase.value;
    let calificacionClase = elementoCalificacion.value;

    
  });

  console.log(formularios);
})

/* 
  let form_clasesAlumnos = document.getElementById("form_clasesAlumnos");
  
  let item_claseNuevoAlumno = document.createElement("div");
  item_claseNuevoAlumno.setAttribute("class", "item_claseNuevoAlumno");
  item_claseNuevoAlumno.innerHTML = `
    <label for="">Clase</label>
    <input type="text" id="clase" class="p-input">
    <label for="">Cal</label>
    <input type="number" id="promedioClase" class="p-input">
    <button class="p-button" id="btn_anadirClase">Añadir</button>
  `
  form_clasesAlumnos.appendChild(item_claseNuevoAlumno);
*/