  // Cambiar texto del párrafo al hacer clic en el botón
  const boton = document.getElementById('boton');
  const parrafo = document.getElementById('parrafo');
  boton.onclick = () => {
      parrafo.textContent = '¡El texto del párrafo ha cambiado!';
  };

  // Cambiar color del encabezado al pasar el mouse
  const titulo = document.getElementById('titulo');
  titulo.onmouseover = () => {
      titulo.style.color = 'blue';
  };

  titulo.onmouseout = () => {
      titulo.style.color = 'black';
  };