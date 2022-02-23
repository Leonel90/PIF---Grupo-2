//variables para header
const altura = document.body.scrollHeight - window.innerHeight; //accedemos al scrol del tamaño completo y restamos el alto
const fondo = document.getElementById("fondo"); //accedemos al id de fondo 

//calculo dque funcione cada vez que el usuario da scroll en la pagina 
window.onscroll = () => {
    const anchoFondo = (window.pageYOffset / altura) * 900; 
    if(anchoFondo <= 100){
        fondo.style.width = anchoFondo + "%"; //calcular el porcentaje decuador el tamaño del scrol de la pagina
    }
}
