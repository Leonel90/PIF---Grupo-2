//galeria
const imagenes = document.querySelectorAll('.imagenes')
const imagenesAgrandar = document.querySelector('.img-agrandar')
const contenedorImagen = document.querySelector('.imagen-grande')
const menu = document.querySelector('.menu');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
    })
})
contenedorImagen.addEventListener('click', (e)=>{
    if(e.target !== imagenesAgrandar){
        contenedorImagen.classList.toggle('show')
        imagenesAgrandar.classList.toggle('showImagen')
        menu.style.opacity = '1'
    }
})

const aparecerImagen = (Imagen)=>{
    imagenesAgrandar.src = Imagen;
    contenedorImagen.classList.toggle('show')
    imagenesAgrandar.classList.toggle('showImagen')
    menu.style.opacity = '0'

}

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