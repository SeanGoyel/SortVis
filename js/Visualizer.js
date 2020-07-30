var currentDelay = 0;
var speed = 600;


// TODO: Not functional - invert speed values
function getSpeedFromSlider(input) {
  if (buttonsDisabled) {
    return;
  }
  speed =  1000 - input.value;
  console.log(speed);

}


function disableSpeedSlider() {
  document.getElementById("speed").disable = true;
}

function updateUnprocessedBar(bar, height) {
  setTimeout(function() {

    if (!isNaN(height)) {
      bar.style.height = height + "px";
    }
    bar.style.background = "steelblue";   // sameColor As Original Bar!!! - Fix
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
