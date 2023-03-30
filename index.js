console.log('hola a todos js');
let container =document.querySelector('product-container')
console.log(container);

container.textContent='HOLA';
let imagen=document.createElement('img')
imagen.src='./images/image-product-desktop.jpg'
container.appendChild(imagen)