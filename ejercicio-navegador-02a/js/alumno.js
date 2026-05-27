export const alumnos = [];
const alumno0 = {
  nombre: 'Ana',
  edad: 22,
  curso: 'JavaScript avanzado',
  activo: true,
};
const alumno1 = {
  nombre: 'Julia',
  edad: 20,
  curso: 'Python avanzado',
  activo: false,
};
const alumno2 = {
  nombre: 'Amalia',
  edad: 19,
  curso: 'Java básico',
  activo: true,
};
const alumno3 = {
  nombre: 'Estrella',
  edad: 9,
  curso: 'Iniciación a la programación',
  activo: false,
};
alumnos.push(alumno0,alumno1,alumno2,alumno3);
export function crearTextoAlumno(alumno) {
  return `${alumno.nombre} tiene ${alumno.edad} años${alumno.activo ? ` y está matriculada en ${alumno.curso}`:``}.`;
};