import { alumnos, crearTextoAlumno } from './alumno.js';

for (const alumno of alumnos) {
    const listaAlumnos = document.querySelector('#alumnos')
    const miAlumno = crearTextoAlumno(alumno);
    const parrafo = document.createElement('p');
    parrafo.classList.add('alumno');
    listaAlumnos.appendChild(parrafo);
    parrafo.textContent = miAlumno;
}