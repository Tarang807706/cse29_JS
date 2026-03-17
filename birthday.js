function showWish(){
document.getElementById("message").innerHTML =
"🎉 Wishing you a day filled with happiness and a year filled with joy! Happy Birthday! 🎂";

startConfetti();
}


const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

for(let i=0;i<150;i++){
confetti.push({
x: Math.random()*canvas.width,
y: Math.random()*canvas.height,
r: Math.random()*6+2,
d: Math.random()*150,
color: "hsl(" + Math.random()*360 + ",100%,50%)",
tilt: Math.random()*10-10
});
}

function drawConfetti(){
ctx.clearRect(0,0,canvas.width,canvas.height);

for(let i=0;i<confetti.length;i++){
let c = confetti[i];

ctx.beginPath();
ctx.fillStyle = c.color;
ctx.fillRect(c.x,c.y,c.r,c.r);
}

update();
}

function update(){
for(let i=0;i<confetti.length;i++){
let c = confetti[i];

c.y += 2;
c.x += Math.sin(c.d);

if(c.y > canvas.height){
c.y = 0;
c.x = Math.random()*canvas.width;
}
}
}

function startConfetti(){
setInterval(drawConfetti,20);
}