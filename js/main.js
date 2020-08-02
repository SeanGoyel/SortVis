
var arraySizeMultiple;
var arraySize = 50;
var bars;
var barHeights = new Array();
var speedSlider = document.getElementById("speed");
var buttons = document.getElementsByTagName("button");
var currentAlgorithm;

generateArray();

function getArrayFromSlider(input) {
  arraySizeMultiple = input.value;
  arraySize = arraySizeMultiple * 10;
  generateArray();
  currentDelay = 0;
}


function generateArray() {
  document.getElementById('bars-container').innerHTML = ""

  for (let i = 0; i < arraySize; i++) {
    let div = document.createElement('div');
    let randomNumber = Math.ceil(Math.random() * 500);
    div.setAttribute("class", "bar");

    let barHeight = (randomNumber);
    div.style.height = barHeight + "px";
    barHeights[i] = (barHeight);

    document.getElementById('bars-container').appendChild(div);
  }
  bars = document.getElementsByClassName("bar");
  enableButtons();

}


function disableButtons() {
  speedSlider.disabled = true;
  speedSlider.className = "disabled-slider";

  for (let i = 0; i < buttons.length; i++) {
    let currentButton = buttons[i];
    if (!(currentButton.innerHTML == "Generate New Array")) {
      currentButton.disabled = true;
      currentButton.className = "disabled-button";
      if (currentButton.innerHTML == currentAlgorithm) {
        currentButton.className = "selected-button"
      }
    }
  }
}

function enableButtons() {
speedSlider.disabled = false;
speedSlider.className = "slider";

  for (let i = 0; i < buttons.length; i++) {
    if (!(buttons[i].innerHTML == "Generate New Array")) {
      buttons[i].disabled = false;
      buttons[i].className = "button";
    }
  }
}


function runAlgorithm(button) {
  currentAlgorithm = button.innerHTML;
  clearTimeout(isCompleteFunction);
  disableButtons();

  switch (currentAlgorithm) {

    case "Quick Sort":
      quickSortAlgorithm();
      break;

    case "Bubble Sort":
      bubbleSort();
      break;

    case "Merge Sort":
      mergeSortAlgorithm();
      break;

    case "Selection Sort":
      selectionSort();
      break;

    case "Insertion Sort":
      insertionSort();
      break;
  }





}
