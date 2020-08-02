var currentDelay = 0;
var speed = 600;
var defualtBarColor = getComputedStyle(bars[0]).backgroundColor;
var isCompleteFunction;

// TODO: Not functional - invert speed values
function getSpeedFromSlider(input) {
  speed = 1000 - input.value;
  console.log(speed);
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
    bar.style.background = "green";
  }, currentDelay += speed);
}

function updateCurrentBar(bar, height) {
  setTimeout(function() {

    if (!isNaN(height)) {
      bar.style.height = height + "px";
    }
    bar.style.background = "red";
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
    updateUnprocessedBar(bars[i]);
    simultaneousEvents();
  }
}
