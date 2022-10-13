var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function random(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}


const inY = canvas.height/8
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;



const q = Math.floor(random(1,1.3))

const colors1 = ["#212529"]
const colors2 = ["#2f0e07"]
const colors3 = ["#312244"]
const colors4 = ["#001a2c"]
const colors5 = ["#1d2e28"]
const colors6 = ["#001514"]
const colors7 = ["#25000e"]
const colors8 = ["#50233e"]
const colors9 = ["#28005d"]
const colors10 = ["#0b525b"]
const colors11 = ["#f9e9e6"]
const colors12 = ["#f7cad0"]
const colors13 = ["#dab6fc"]


const colors14 = ["#deaaff"]
const colors15 = ["#c1d3fe"]
const colors16 = ["#ff87ab"]
const colors17 = ["#c8b6ff"]
const colors18 = ["#60d394"]
const colors19 = ["#b8e0d2"]
const colors20 = ["#ffee93"]
const colors21 = ["#9cadce"]
const colors22 = ["#f9dc5c"]
const colors23 = ["#e2a0ff"] 
const colors24 = ["#d17b88"]
const colors25 = ["#cfe795"]
const colors26 = ["#ffbeef"]

const colors27 = ["#ccd5ae"]
const colors28 = ["#fec5bb"]
const colors29 = ["#ffd6a5"]
const colors30 = ["#9bf6ff"] 
const colors31 = ["#a0c4ff"]
const colors32 = ["#bdb2ff"]
const colors33 = ["#ffc6ff"]
const colors34 = ["#d3b44e"]
const colors35 = ["#fffd5d"]
const colors36 = ["#d3e6be"]


function randomFromList(items){
    return items[Math.floor(Math.random()*items.length)];
    }



const colorTronco = `#000`
const colorPrueba = '#a4133c'

const coloresMonta = [ colors1,colors2,colors3,colors4,colors5,colors6,colors7,colors8,colors9,colors10]
const colorMonta1 = randomFromList(coloresMonta)
const colorMonta2 = randomFromList(coloresMonta)
const colorMonta3 = randomFromList(coloresMonta)
const colorMonta4 = randomFromList(coloresMonta)

const coloresSol = [ colors27,colors28,colors29,colors30,colors31,colors32,colors33,colors34,colors35,colors36]
const colorSol = randomFromList(coloresSol)


const coloresAgua = [colors14,colors15,colors16,colors17,colors18,colors19,colors20,colors21,colors22,colors23,colors24,colors25,colors26]
// const colorAgua = randomFromList(coloresAgua)
const colorAgua = randomFromList(coloresAgua)
const colorAgua2 = randomFromList(coloresAgua)
const colorAgua3 = randomFromList(coloresAgua)
const colorAgua4 = randomFromList(coloresAgua)



a = random(10,25)
b = random(10,25)
c = random(10,25)
d = random(10,40)
e = random(20,40)
f = random(20,40)
g = random(20,40)
h = random(0.4,0.8)
i = random(0.4,0.8)
j = random(0.4,0.8)
k = random(0.4,0.8)
l = random(0.4,0.8)
m = random(0.4,0.8)
n = random(0.4,0.8)
o = random(0.4,0.8)
xs = random(100,900)
ys  = random(50,300)
tams = random(30,150)
def = Math.random()


const botonBorrar = document.getElementById("reset");
botonBorrar.addEventListener("click", limpiarCanvas);
function limpiarCanvas() {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
}


generate()

function generate(){

if (Math.random()<0.5){
  createWater(colorAgua, 0.9, 2, h,a);
createWater(colorAgua, 0.9, 2, i,b);
createWater(colorAgua, 0.9, 2,j,c);
createWater(colorAgua, 0.9, 2,k,d);
createOverlay(colorMonta1, 0.6, 2, l, e);
createOverlay(colorMonta2, 0.6, 2, m, f);
createOverlay(colorMonta3, 0.6, 3, n, g);
createOverlay(colorSol, 0.6, 3,100,100);
createSun()
createSky()


function drawBackground() {
  var lg = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
  lg.addColorStop(0, `#ced4da`);
  lg.addColorStop(0.5, `#dee2e6`);
  lg.addColorStop(0.5, `#dee2e6`);
  lg.addColorStop(1, `#fff`);
  ctx.fillStyle = lg;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function createSky() {
  ctx.fillStyle ="#ccd5ae";
  ctx.beginPath();
  ctx.fillRect(0,0,1000,1000)
  ctx.fill();   
}

function createSun() {
  ctx.fillStyle = colorSol;
  ctx.beginPath();
  ctx.arc(xs,ys,tams,0,Math.PI *2 )
  ctx.fill(); 

}
  function createOverlay(color, filling, saw, hard, noise) {
    hard = hard || 0.5;
    var	maxHeight = 1000;
  
    var x,
      height = Math.random() * maxHeight,
      slope = (Math.random() * saw) * 2 - saw;
  

  
    for (x = 0; x < canvas.width; x++) {
    
      height += slope * 0.5;
      slope += (Math.random() * hard) * 2 - hard;
  
      if (slope > saw) {
        slope = saw;
      }
      if (slope < -saw) {
        slope = -saw * 0.25;
      }
  
      ctx.beginPath();
      ctx.moveTo(x * 2, maxHeight );
      ctx.lineTo(x, height);
  
      ctx.globalAlpha = filling;
      ctx.strokeStyle = color;
      ctx.stroke();
  
    
      
      
     
      ctx.globalCompositeOperation = 'color-dodge'; 
      // if(def<0.9){
      //   ctx.globalCompositeOperation = 'color-dodge'; 
      // }else{
      //   ctx.globalCompositeOperation = 'lighter '; 
      // }
  
  
  
  
      if (noise) {
        ctx.lineTo(x, height - noise);
        ctx.globalAlpha = 0.15;
        ctx.stroke();
  
      }
  
  
  
    }
  }
  
  
  function createWater(color, filling, saw, hard, noise) {
  
    
    
    hard = hard || 0.5;
  
  
    var	maxHeight = 1000;
  
    var x,
      height = 1000 ,
      slope = (Math.random() * saw) * 2 - saw;
  
    for (x = 0; x < canvas.width; x++) {
      
      height += slope * 0.09;
      slope += (Math.random() * hard) * 2 - hard;
  
      if (slope > saw) {
        slope = saw;
      }
  
      if (slope < -saw) {
        slope = -saw * 0.25;
      }
  
      ctx.beginPath();
      ctx.moveTo(x * 2, maxHeight );
      ctx.lineTo(x, height);
  
      ctx.globalAlpha = filling;
      ctx.strokeStyle = color;
      ctx.stroke();
  
    
      // ctx.globalCompositeOperation = 'color-dodge'; 
      
      if(def <0.9){
        ctx.globalCompositeOperation = 'color-dodge'; 
      }else{
        ctx.globalCompositeOperation = 'lighter '; 
      }
      
      // if(def<0.3){
      //   ctx.globalCompositeOperation = 'color-dodge'; 
      // }else if(def>0.5){
      //   ctx.globalCompositeOperation = 'lighter '; 
      // }else if(def>0.7){
      //   ctx.globalCompositeOperation = ' screen'; 
      // }else if(def>0.8){
      //   ctx.globalCompositeOperation = 'soft-light'; 
      // }else{
      //   ctx.globalCompositeOperation = 'exclusion'; 
      // } 
  
  
  
  
      if (noise) {
        ctx.lineTo(x, height - noise);
        ctx.globalAlpha = 0.15;
        ctx.stroke();
  
      }
  
  
  
    }
  
  }

}else{
  createWater(colorAgua, 0.9, 2, h,a);
createWater(colorAgua, 0.9, 2, i,b);
createWater(colorAgua, 0.9, 2,j,c);
createWater(colorAgua, 0.9, 2,k,d);
createOverlay(colorMonta1, 0.6, 2, l, e);
createOverlay(colorMonta2, 0.6, 2, m, f);
createOverlay(colorMonta3, 0.6, 3, n, g);
createOverlay(colorSol, 0.6, 3,100,100);
createSun()
createSky()
fxpreview()

function drawBackground() {
  var lg = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
  lg.addColorStop(0, `#ced4da`);
  lg.addColorStop(0.5, `#dee2e6`);
  lg.addColorStop(0.5, `#dee2e6`);
  lg.addColorStop(1, `#fff`);
  ctx.fillStyle = lg;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function createSky() {
  ctx.fillStyle ="#ccd5ae";
  ctx.beginPath();
  ctx.fillRect(0,0,1000,1000)
  ctx.fill();   
}

function createSun() {
  ctx.fillStyle = colorSol;
  ctx.beginPath();
  ctx.arc(xs,ys,tams,0,Math.PI *2 )
  ctx.fill(); 

  ctx.lineTo(xs, height - noise);
	ctx.globalAlpha = 0.15;
	ctx.stroke();

}
  function createOverlay(color, filling, saw, hard, noise) {
    hard = hard || 0.5;
    var	maxHeight = 1000;
  
    var x,
      height = Math.random() * maxHeight,
      slope = (Math.random() * saw) * 2 - saw;
  
    for (x = 0; x < canvas.width; x++) {
    
      height += slope * 0.5;
      slope += (Math.random() * hard) * 2 - hard;
  
      if (slope > saw) {
        slope = saw;
      }
  
      if (slope < -saw) {
        slope = -saw * 0.25;
      }
  
      ctx.beginPath();
      ctx.moveTo(x * 2, maxHeight );
      ctx.lineTo(x, height);
  
      ctx.globalAlpha = filling;
      ctx.strokeStyle = color;
      ctx.stroke();
  
    
      
      
     
      ctx.globalCompositeOperation = 'color-dodge'; 
      // if(def<0.9){
      //   ctx.globalCompositeOperation = 'color-dodge'; 
      // }else{
      //   ctx.globalCompositeOperation = 'lighter '; 
      // }

    }
  }
}
  
  function createWater(color, filling, saw, hard, noise) {
  
    
    
    hard = hard || 0.5;
  
  
    var	maxHeight = 1000;
  
    var x,
      height = 1000 ,
      slope = (Math.random() * saw) * 2 - saw;
  
    for (x = 0; x < canvas.width; x++) {
      
      height += slope * 0.09;
      slope += (Math.random() * hard) * 2 - hard;
  
      if (slope > saw) {
        slope = saw;
      }
  
      if (slope < -saw) {
        slope = -saw * 0.25;
      }
  
      ctx.beginPath();
      ctx.moveTo(x * 2, maxHeight );
      ctx.lineTo(x, height);
  
      ctx.globalAlpha = filling;
      ctx.strokeStyle = color;
      ctx.stroke();
  
    
      // ctx.globalCompositeOperation = 'color-dodge'; 
      
      if(def <0.9){
        ctx.globalCompositeOperation = 'color-dodge'; 
      }else{
        ctx.globalCompositeOperation = 'lighter '; 
      }
      
      // if(def<0.3){
      //   ctx.globalCompositeOperation = 'color-dodge'; 
      // }else if(def>0.5){
      //   ctx.globalCompositeOperation = 'lighter '; 
      // }else if(def>0.7){
      //   ctx.globalCompositeOperation = ' screen'; 
      // }else if(def>0.8){
      //   ctx.globalCompositeOperation = 'soft-light'; 
      // }else{
      //   ctx.globalCompositeOperation = 'exclusion'; 
      // } 
  
    }
  
  }

}


