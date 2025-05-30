const h2s = document.querySelectorAll('h2');

setInterval(() => {
      h2s.forEach(h2 => {
        h2.style.color = h2.style.color === 'rgb(114, 76, 0)' ? 'rgb(180, 15, 189)' : 'rgb(114, 76, 0)';
      });
    }, 500); 

const h1s = document.querySelectorAll('h1');
setInterval(() => {
      h1s.forEach(h1 => {
        h1.style.color = h1.style.color === 'rgb(194, 135, 9)' ? 'rgb(244, 255, 205)' : 'rgb(194, 135, 9)'
      });
    }, 500); 

window.onload = mover;
