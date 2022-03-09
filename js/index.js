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
    //agrandar imagene 
    const overlay = document.getElementById('overlay');
    document.querySelectorAll('.grid .item img').forEach((elemento) => { //pide que entre donde esta la img dentro de la clase grid item
        const ruta = elemento.getAttribute('src');
        const descripcion = elemento.parentNode.parentNode.dataset.description;
        const link = elemento.getAttribute("href");

        elemento.addEventListener('click', () => {
            overlay.classList.add('visible');
            document.querySelector('#overlay img').src = ruta;
            document.querySelector('#overlay .descripcion-img').innerHTML = descripcion;
            document.querySelector('#overlay a').href = link;
        });

    });
   
    
    //codigo de cerrar la imagen

    document.querySelector('#boton').addEventListener('click', () => {
        overlay.classList.remove('visible');
    });

    overlay.addEventListener('click', (evento) => {
        if ( evento.target.id === 'overlay') {
            overlay.classList.remove('visible');
        } 
        
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });

