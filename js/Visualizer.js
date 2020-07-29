var currentDelay = 0;
speed = 700;


// TODO: Not functional - invert speed values
function getSpeedFromSlider(input) {
  if (buttonsDisabled) {
    return;
  }
  // speed = 1000000 / 10 ** input.value;

  speed = 0;

  // console.log(speed);

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

function simultaneousEvents() {
  currentDelay -= speed;

}
