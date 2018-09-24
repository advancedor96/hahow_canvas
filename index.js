let canvas = document.querySelector('#mycanvas');
let ctx = canvas.getContext('2d');

canvas.height= 400;
canvas.width = 400;
let timer = 0;
let mouse = {
   x: 0,
   y: 0
}

function draw(){
   ctx.clearRect(0, 0 , 400, 400);
   ctx.strokeStyle = 'black';
   ctx.fillStyle = 'black';
   ctx.beginPath();
   for(let i = 0;i<10;i++){
      let pos = i* 50;
      ctx.moveTo(pos, 0);
      ctx.lineTo(pos, 400);
      ctx.fillText(pos, pos, 10);

      ctx.moveTo(0, pos);
      ctx.lineTo(400, pos);
      ctx.fillText(pos, 0, pos);
   }
   ctx.strokeStyle = 'rgba(0 ,0 ,0, 0.1)'
   ctx.stroke();

   // 地平面
   ctx.beginPath();
   ctx.moveTo(0, 350);
   ctx.lineTo(375, 350);
   ctx.strokeStyle="rgba(0, 0, 0, 1)"
   ctx.stroke();

   //2個橘色柱子
   ctx.fillStyle="#ef7326";
   ctx.fillRect(100, 250, 50, 100);
   ctx.strokeStyle="black";
   ctx.strokeRect(100, 250, 50, 100);

   ctx.fillRect(200, 250, 50, 100);
   ctx.strokeRect(200, 250, 50, 100);

   // 拱形
   ctx.beginPath();
   ctx.moveTo(100, 200);
   ctx.lineTo(250, 200);
   ctx.lineTo(250, 250);
   ctx.lineTo(200, 250);
   ctx.arc(175,250, 25, 0, Math.PI , true);
   ctx.lineTo(100, 250);
   ctx.closePath();
   ctx.stroke();

   // 旗幟
   ctx.beginPath();
   ctx.moveTo(175, 200);
   // ctx.lineTo(175, 150);
   ctx.lineTo(175, (600-mouse.y)/4);
   ctx.lineTo(200, 10+ (600-mouse.y)/4 - timer%5);
   ctx.lineTo(175, 20+ (600-mouse.y)/4);
   ctx.stroke();

   ctx.fillStyle = '#2d7aff'
   ctx.fill();

   // 畫滑鼠
   ctx.beginPath();
   ctx.fillStyle="black"
   ctx.arc(mouse.x, mouse.y, 5, 0, Math.PI * 2);
   ctx.fill();

   timer ++;
}

window.setInterval(draw, 30);

canvas.addEventListener('mousemove', function(e){
   mouse.x = e.offsetX;
   mouse.y = e.offsetY;
})