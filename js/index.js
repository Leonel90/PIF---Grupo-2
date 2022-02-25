const grid =  new Muuri('.grid',{
    layout: {
        rounding: false
    }
});

window.addEventListener('load', () => {
    grid.refreshItems().layout();

    //codigo para filtrar las categorias con listener
    const enlaces = document.querySelectorAll('#categorias a');
    enlaces.forEach((elemento) => {
        elemento.addEventListener('click', (evento) =>{
            evento.preventDefault();
            enlaces.forEach((enlace) => {enlace.classList.remove('activo')});
            evento.target.classList.add('activo');

            const categoria = evento.target.innerHTML.toLowerCase();
            if (categoria === 'todo') {
                grid.filter('[data-categoria]');
            } else {
                grid.filter(`[data-categoria="${categoria}"]`);
            }
        });
    });
})