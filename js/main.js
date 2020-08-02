var buttonsDisabled = false;
var arraySizeMultiple = 8; //defualt size
// var arraySize = arraySizeMultiple * 10;
var currentBars;
var currentBarHeights;
var arraySize =10;
var bars;
var barHeights = new Array();

var currentDelay= 0;

// TODO: Current Bar color
// done bars
// spliting color
generateArray();

function getArrayFromSlider(input) {
  if(buttonsDisabled) {
    return;
  }
  arraySizeMultiple = input.value;
  arraySize = arraySizeMultiple * 10;
  generateArray();
  currentDelay= 0;

}


function generateArray() {
  document.getElementById('bars-container').innerHTML = ""

  for(let i = 0; i < arraySize; i++) {
    let div = document.createElement('div');
    let randomNumber = Math.ceil(Math.random()*100);
    div.setAttribute("class","bar");

    let barHeight = (randomNumber) * 5;
    div.style.height= barHeight + "px";
    barHeights[i] = (barHeight);

    document.getElementById('bars-container').appendChild(div);
  }
  currentBars = document.getElementById('bars-container').innerHTML;
  currentBarHeights = barHeights;
  bars = document.getElementsByClassName("bar");

}


function runAlgorithm(button) {

  document.getElementById('bars-container').innerHTML = "";
  document.getElementById('bars-container').innerHTML = currentBars;
  barHeights = currentBarHeights;

  bars = document.getElementsByClassName("bar");


if(buttonsDisabled) {
  return;
}
  switch(button.innerHTML) {

    case "Quick Sort": quickSortAlgorithm();
      break;

    case "Bubble Sort": bubbleSort();
      break;

    case "Merge Sort": mergeSortAlgorithm();
      break;

    case "Selection Sort": selectionSort();
      break;

    case "Insertion Sort": insertionSort();
      break;
  }

}
