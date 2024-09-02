document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario-receta');
    const inputNombre = document.getElementById('input-nombre');
    const inputDescripcion = document.getElementById('input-descripcion');
    const lista = document.getElementById('lista-recetas');

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombreReceta = inputNombre.value.trim();
        const descripcionReceta = inputDescripcion.value.trim();
        if (nombreReceta && descripcionReceta) {
            const li = document.createElement('li');
            const h3 = document.createElement('h3');
            h3.textContent = nombreReceta;
            const p = document.createElement('p');
            p.textContent = descripcionReceta;
            li.appendChild(h3);
            li.appendChild(p);
            lista.appendChild(li);
            inputNombre.value = '';
            inputDescripcion.value = '';
        }
    });
});
