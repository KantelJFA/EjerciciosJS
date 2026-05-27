# Preguntas
## 1 ¿Por qué separamos los datos (productos.js) de las funciones(utilidadesProductos.js)?
Por compartimentalizarlo todo, y que sea más facil de leer el programa.
## 2 ¿Cómo recorrerías el array para mostrar solo los productos disponibles?
Hay varias opciones, yo usaría array.map() para descartar los objetos que no lo estan y mostrar los datos a partir de dicho array.
## 3 ¿Qué pasaría si calcularPrecioTotal no tuviera return?
Si no es una función flecha de una linea (porque en ese caso hay un return implicito), devuelve undefined.