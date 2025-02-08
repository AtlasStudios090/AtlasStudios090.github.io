// JavaScript para funcionalidades interactivas (si es necesario)

// Gráfica (ejemplo básico)
const graphic = document.getElementById("graphic");
const canvas = document.createElement("canvas");
canvas.width = graphic.offsetWidth;
canvas.height = graphic.offsetHeight;
graphic.appendChild(canvas);

const ctx = canvas.getContext("2d");
ctx.moveTo(0, canvas.height);
ctx.lineTo(canvas.width, 0);
ctx.strokeStyle = "black";
ctx.stroke();
