var img = new Image();
img.src = "img.jpg";
var i = 1810;
var j = 435;
var k = 0;
var z = 0;

function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    //тени
    ctx.shadowColor = "#bbbbbb";
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 7;
    ctx.shadowOffsetY = 7;

    //текст сверху
    ctx.font = "30px Verdana";
    ctx.strokeStyle = "blue";
    ctx.strokeText("Реклама кошек. Ведь они этого достойны!", 500, 100);

    //текст снизу
    ctx.font = "15px Arial Black";
    ctx.fillText("Тут могла быть ваша реклама,", 700, 650);
    ctx.fillText("  но тут котик. И это лучше, чем какая-то там реклама!", 750, 740);

    //треугольник сверху
    ctx.strokeStyle = "Black";
    var gradient = ctx.createLinearGradient(800, 200, 500, 150);
    gradient.addColorStop(0, "red");
    gradient.addColorStop(1, "white");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(520,160);
    ctx.lineTo(820,160);
    ctx.lineTo(520,360);
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    //фотка кота
    ctx.drawImage(img, 660, 200, 600, 400);

    //нижний треугольник
    ctx.beginPath();
    ctx.moveTo(1000,650);
    ctx.lineTo(1350,650);
    ctx.lineTo(1350,450);
    ctx.closePath();
    ctx.stroke();

  }
  ctx.shadowColor = 'rgba(0, 0, 0, 0)';
  draw2(); 
}

function draw2(){

  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
 
    ctx.fillStyle = 'rgb(' 
                      + i / 2 
                      + ',' 
                      + j / 2 
                      + ',' 
                      + z 
                      + ')';

    ctx.fillRect (i, j, 50, 50);

    switch(k)
    {
        case 0:
            i -= 5;
            j -= 5;
            if(j <= 100){ 
                k++;
                i = 0;
                j = 435;
            }
            break;
        case 1:
            i += 5;
            j -= 5;
            if(j <= 100){
                k++;
                i = 310;
                j = 635;
            }
            break;
        case 2:
            i -= 5;
            j += 5;
            if(j >= 800){
                k++;
                i = 1510;
                j = 635;
            }
            break;
        case 3:
            j += 5;
            i += 5;
            if(j >= 800)
            {
                k = 0;
                i = 1810;
                j = 435;
                z += 60;
                z = z % 256;
            }
            break;
    }
    window.requestAnimationFrame(draw2);
  }
}