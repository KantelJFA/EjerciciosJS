import { alumno, crearTextoAlumno } from './alumno.js';

const textoAlumno = document.querySelector('#alumno');
const miAlumno = crearTextoAlumno(alumno);
textoAlumno.textContent = miAlumno;