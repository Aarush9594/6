canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(100,210,40,0,2*Math.PI);
ctx.stroke();

color="black"
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(195,210,40,0,2*Math.PI);
ctx.stroke();

color="red"
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(290,205,40,0,2*Math.PI);
ctx.stroke();

color="gold"
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(150,255,40,0,2*Math.PI);
ctx.stroke();

color="green"
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(245,250,40,0,2*Math.PI);
ctx.stroke();

