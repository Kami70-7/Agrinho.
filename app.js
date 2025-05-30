const h2s = document.querySelectorAll('h2');

setInterval(() => {
      h2s.forEach(h2 => {
        h2.style.color = h2.style.color === 'rgb(78, 66, 42)' ? 'rgb(240, 0, 248)' : 'rgb(78, 66, 42)';
      });
    }, 500); 

const h1s = document.querySelectorAll('h1');
setInterval(() => {
      h1s.forEach(h1 => {
        h1.style.color = h1.style.color === 'rgb(194, 135, 9)' ? 'rgb(255, 255, 255)' : 'rgb(194, 135, 9)'
      });
    }, 500); 

window.onload = mover;
