var img = new Image();
img.src = "img.jpg";
var i = 0;
  var j = 0;
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
    ctx.strokeText("Реклама кошек. Ведь они этого достойны!", 400, 100);

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

    ctx.fillRect (i, j, 50, 45);

    switch(k)
    {
      case 0:
        i += 10;
        if(i == 1820) 
          k++;
        break;
      case 1:
        j += 10;
        if(j == 870)
          k++;
        break;
      case 2:
        i -= 10;
        if(i == 0)
          k++;
        break;
      case 3:
        j -= 10;
        if(j == 0)
        {
          k = 0;
          z+= 25;
          z = z % 256;
        }
        break;
    }
    window.requestAnimationFrame(draw2);
  }
}