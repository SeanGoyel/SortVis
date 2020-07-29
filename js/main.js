var buttonsDisabled = false;
var arraySizeMultiple = 8; //defualt size
var arraySize = arraySizeMultiple * 10;
var bars;
var barHeights = new Array();

var currentDelay= 0;

// TODO: Current Bar color
// done bars
// spliting color
genrateArray();

function getArrayFromSlider(input) {
  if(buttonsDisabled) {
    return;
  }
  arraySizeMultiple = input.value;
  arraySize = arraySizeMultiple * 10;
  genrateArray();
  currentDelay= 0;

}


function genrateArray() {
  document.getElementById('bars-container').innerHTML = ""

  for(let i = 0; i < arraySize; i++) {
    let div = document.createElement('div');
    let randomNumber = Math.ceil(Math.random()*100);
    div.setAttribute("class","bar");

    let barHeight = (randomNumber) * 5;
    div.style.height= barHeight + "px";
    barHeights[i]= (barHeight);

    document.getElementById('bars-container').appendChild(div);
    bars = document.getElementsByClassName("bar");

  }

}


function runAlgorithm(button) {
if(buttonsDisabled) {
  return;
}
  switch(button.innerHTML) {

    case "Quick Sort": swap(0,7);
      break;

    case "Bubble Sort": bubbleSort();
      break;

    case "Merge Sort": mergSort();
      break;

    case "Selection Sort": selectionSort();
      break;

    case "Insertion Sort": insertionSort();
      break;
  }

}
