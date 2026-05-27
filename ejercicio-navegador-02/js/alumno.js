export const alumno = {
  nombre: 'Ana',
  edad: 22,
  curso: 'JavaScript avanzado',
  activo: true,
};
export function crearTextoAlumno(alumno) {
  return `${alumno.nombre} tiene ${alumno.edad} años${alumno.activo ? ` y está matriculada en ${alumno.curso}`:``}.`;
};