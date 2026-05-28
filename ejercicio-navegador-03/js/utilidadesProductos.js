export const contarProductos = lista => lista.length;
export const calcularPrecioTotal = lista => 
  lista.map(lista => lista.precio).reduce((total, precio) => total + precio);
export const obtenerNombres = lista => {
  const nombres = [];
  lista.forEach((producto, id) => nombres[id] = producto.nombre);
  return nombres;
}
export const crearTextoResumen = lista => 
  `Hay ${contarProductos(lista)} productos, que cuestan un total de ${calcularPrecioTotal(lista)}€:`;