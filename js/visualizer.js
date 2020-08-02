var currentDelay = 0;
var speed = 100;
var defualtBarColor = getComputedStyle(bars[0]).background;
var isCompleteFunction;

function getSpeedFromSlider(input) {
  speed = 1000 - input.value;
}

function updateUnprocessedBar(bar, height) {
  setTimeout(function() {

    if (!isNaN(height)) {
      bar.style.height = height + "px";
    }
    bar.style.background = defualtBarColor;
  }, currentDelay += speed);
}

function updateProcessedBar(bar, height) {
  setTimeout(function() {

    if (!isNaN(height)) {
      bar.style.height = height + "px";
    }
    bar.style.background = "#11d411";
  }, currentDelay += speed);
}

function updateCurrentBar(bar, height) {
  setTimeout(function() {

    if (!isNaN(height)) {
      bar.style.height = height + "px";
    }
    bar.style.background = "#f80040";
  }, currentDelay += speed);

}

function updateComparisonBar(bar, height) {
  setTimeout(function() {

    if (!isNaN(height)) {
      bar.style.height = height + "px";
    }
    bar.style.background = "yellow";
  }, currentDelay += speed);

}

function updateMarkedBar(bar, height) {
  setTimeout(function() {

    if (!isNaN(height)) {
      bar.style.height = height + "px";
    }
    bar.style.background = "orange";
  }, currentDelay += speed);

}

function simultaneousEvents() {
  currentDelay -= speed;
}

function algorithmIsComplete() {
  isCompleteFunction = setTimeout(function() {
  enableButtons();
}, currentDelay += speed);
}

function resetToDefaultColor() {

  for (let i = 0; i < bars.length; i++) {
      bars[i].style.background = defualtBarColor;

  }
}
