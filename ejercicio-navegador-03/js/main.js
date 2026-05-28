import { obtenerNombres, crearTextoResumen } from './utilidadesProductos.js';
import { productos } from './productos.js';

const resumenProductos = document.querySelector('#resumenProductos');
resumenProductos.textContent = crearTextoResumen(productos);
const nombres = obtenerNombres(productos);
nombres.forEach(nombre => {
  const resultados = document.querySelector('#resultados');
  const parrafo = document.createElement('li');
  parrafo.textContent = nombre;
  resultados.appendChild(parrafo);
});