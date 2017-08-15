'use strict';

window.renderStatistics = function (ctx, names, times) {
  // рисуем облако
  ctx.beginPath();
  ctx.moveTo(110, 20);

  ctx.bezierCurveTo(130, 10, 190, 10, 210, 20);
  ctx.bezierCurveTo(230, 10, 290, 10, 310, 20);
  ctx.bezierCurveTo(330, 10, 390, 10, 410, 20);
  ctx.bezierCurveTo(440, 10, 500, 10, 530, 30);

  ctx.bezierCurveTo(550, 50, 550, 90, 530, 110);
  ctx.bezierCurveTo(550, 130, 550, 190, 530, 210);
  ctx.bezierCurveTo(550, 230, 550, 260, 530, 280);

  ctx.bezierCurveTo(490, 300, 440, 300, 410, 290);
  ctx.bezierCurveTo(390, 300, 330, 300, 310, 290);
  ctx.bezierCurveTo(290, 300, 230, 300, 210, 290);
  ctx.bezierCurveTo(190, 300, 130, 300, 110, 290);

  ctx.bezierCurveTo(80, 260, 80, 240, 100, 200);
  ctx.bezierCurveTo(80, 180, 80, 120, 100, 100);
  ctx.bezierCurveTo(80, 70, 80, 30, 100, 10);

  ctx.closePath();
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(100, 10);

  ctx.bezierCurveTo(120, 0, 180, 0, 200, 10);
  ctx.bezierCurveTo(220, 0, 280, 0, 300, 10);
  ctx.bezierCurveTo(320, 0, 380, 0, 400, 10);
  ctx.bezierCurveTo(430, 0, 490, 0, 520, 20);

  ctx.bezierCurveTo(540, 40, 540, 80, 520, 100);
  ctx.bezierCurveTo(540, 120, 540, 180, 520, 200);
  ctx.bezierCurveTo(540, 220, 540, 250, 520, 270);

  ctx.bezierCurveTo(480, 290, 430, 290, 400, 280);
  ctx.bezierCurveTo(380, 290, 320, 290, 300, 280);
  ctx.bezierCurveTo(280, 290, 220, 290, 200, 280);
  ctx.bezierCurveTo(180, 290, 120, 290, 100, 280);

  ctx.bezierCurveTo(80, 260, 80, 240, 100, 200);
  ctx.bezierCurveTo(80, 180, 80, 120, 100, 100);
  ctx.bezierCurveTo(80, 70, 80, 30, 100, 10);

  ctx.closePath();
  ctx.fillStyle = '#ffffff';
  ctx.fill();

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 140, 30);

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Список результатов:', 140, 50);
  // гистограмма
  var max = -1;
  var histogramHeight = 150;
  var initialX = 150;
  var initialYForHistogram = 240;
  var histogramWidth = 40;
  var histogramIndent = 50;
  var initialYForNames = 70;

  ctx.textBaseline = 'top';

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }

    var step = histogramHeight / max;

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + (Math.random()) + ')';
    }
    ctx.fillRect(initialX + (histogramWidth + histogramIndent) * i, initialYForHistogram, histogramWidth, times[i] * -step);
    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], initialX + (histogramWidth + histogramIndent) * i, initialYForHistogram);
    ctx.fillText(times[i].toFixed(), initialX + (histogramWidth + histogramIndent) * i, initialYForNames);
  }
};
