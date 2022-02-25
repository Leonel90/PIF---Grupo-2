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