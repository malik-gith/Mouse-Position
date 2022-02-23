let main = document.querySelector('.main');
document.onmousemove = function (e) {
       main.innerHTML = `<p><span>X: </span>${e.clientX}</p><p><span>Y: </span>${e.clientY}</p>`;
};
