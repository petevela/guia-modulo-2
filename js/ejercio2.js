function notaFinal(nombre,carnet,calificaciones){

    let nf = 0;
    let pondExamen = 0.20;
    let pondTarea = 0.40;
    let pondAsistencia = 0.10;
    let pondInvestigacion = 0.30;

    nf = ((calificaciones.examen*pondExamen) + (calificaciones.tarea*pondTarea) + (calificaciones.asistencia*pondAsistencia) + (calificaciones.investigacion*pondInvestigacion))

    return ("nombre:" + nombre + ", Carnet: " + carnet + ", Nota final: " + nf); 
}

let nombre = "Pedro Velasco";
let carnet = "pe01245";
let calificaciones = {
    'examen' : 5,
    'tarea' : 8,
    'asistencia' : 8,
    'investigacion' : 8
}
console.log(notaFinal(nombre, carnet, calificaciones));