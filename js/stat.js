'use strict';

window.renderStatistics = function (ctx, names, times) {
  var max = -1;
  var i = 0;
  var histogramHeight = 150;
  var initialXForHistogram = 150;
  var initialYForHistogram = 240;
  var histogramWidth = 40;
  var histogramIndent = 50;

  function renderCloud(cloudColor) {
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
    ctx.fillStyle = cloudColor;
    ctx.fill();
  }

  function renderShadowOfCloud(ShadowColor) {
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
    ctx.fillStyle = ShadowColor;
    ctx.fill();
  }

  function showCongratulation() {
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 150, 30);
  }

  function showTitleOfHistogram() {
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Список результатов:', 150, 50);
  }

  function getMaxTime() {
    for (i = 0; i < times.length; i++) {
      var time = times[i];
      if (time > max) {
        max = time;
      }
    }
  }

  function renderHistogram() {
    for (i = 0; i < times.length; i++) {
      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'rgba(0, 0, 255, ' + (Math.random()) + ')';
      }
      var step = histogramHeight / max;
      ctx.textBaseline = 'top';
      ctx.fillRect(initialXForHistogram + (histogramWidth + histogramIndent) * i, initialYForHistogram, histogramWidth, times[i] * -step);
      ctx.fillStyle = '#000';
      ctx.fillText(names[i], initialXForHistogram + (histogramWidth + histogramIndent) * i, initialYForHistogram + 10);
      ctx.fillText(times[i].toFixed(), initialXForHistogram + (histogramWidth + histogramIndent) * i, initialYForHistogram - 20 + times[i] * -step);
    }
  }

  renderShadowOfCloud('rgba(0, 0, 0, 0.7)');
  renderCloud('#fff');
  showCongratulation();
  showTitleOfHistogram();
  getMaxTime();
  renderHistogram();
};
