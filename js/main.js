var sizeSlider = document.getElementById("size");
var speedSlider = document.getElementById("speed");
var buttonsDisabled = false;

function runAlgorithm(button) {


if(buttonsDisabled) {
  return;
}
  switch(button.innerHTML) {

    case "Quick Sort": quickSort();
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
