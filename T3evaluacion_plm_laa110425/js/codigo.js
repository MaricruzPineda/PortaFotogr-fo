// Seleccionar elementos del DOM
const botones = document.querySelectorAll('#indice-categoria button');
const tarjetas = document.querySelectorAll('.tarjeta-imagen');

// Función para manejar el filtrado
function filtrarImagenes(categoria) {
    tarjetas.forEach(tarjeta => {
        if (categoria === 'todo' || tarjeta.classList.contains(categoria)) {
            tarjeta.style.display = 'block';
            setTimeout(() => {
                tarjeta.style.opacity = '1';
            }, 50);
        } else {
            tarjeta.style.opacity = '0';
            setTimeout(() => {
                tarjeta.style.display = 'none';
            }, 500);
        }
    });
}

// Agregar event listeners a los botones
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        botones.forEach(b => b.classList.remove('activo'));
        boton.classList.add('activo');
        
        // Obtener categoría y filtrar
        const categoria = boton.dataset.categoria;
        filtrarImagenes(categoria);
    });
});

// Mostrar todas las imágenes al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const botonTodo = document.querySelector('[data-categoria="todo"]');
    if (botonTodo) {
        botonTodo.classList.add('activo');
        filtrarImagenes('todo');
    }
});

