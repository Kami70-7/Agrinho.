const titulo = document. getElementById('titulo')
let pos = 0;

function mover () {
    if (pos < 300){
        pos++;
        titulo.style.left = pos + 'px';
        requestAnimationFrame(mover);// animação mais suave
    }
}
  
// Começa a animação ao carregar a página
window.onload = mover;
