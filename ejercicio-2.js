// Seleccionar elementos del DOM
const formulario = document.getElementById("formulario");
const nuevoElemento = document.getElementById("nuevoElemento");
const lista = document.getElementById("lista");

// Manejar el evento de envío del formulario
formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

  // Obtener el valor del campo de texto
  const texto = nuevoElemento.value.trim();
  if (texto !== "") {
    agregarElementoALista(texto);
    nuevoElemento.value = ""; // Limpiar el campo de texto
  }
});

// Función para agregar un nuevo elemento a la lista
function agregarElementoALista(texto) {
  const li = document.createElement("li");
  li.textContent = texto;

  // Añadir funcionalidad para eliminar el elemento al hacer doble clic
  li.addEventListener("dblclick", function () {
    lista.removeChild(li);
  });

  lista.appendChild(li);
}
