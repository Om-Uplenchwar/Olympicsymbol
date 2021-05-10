Canvas = document.getElementById("myCanvas");
ctx = Canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "Blue";
ctx.lineWidth = 5;
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="Black";
ctx.lineWidth = 5;
ctx.arc(300, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Red";
ctx.lineWidth = 5;
ctx.arc(400, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Yellow";
ctx.lineWidth = 5;
ctx.arc(250, 240, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Green";
ctx.lineWidth = 5;
ctx.arc(350, 240, 40, 0, 2 * Math.PI);
ctx.stroke();