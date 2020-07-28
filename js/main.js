var sizeSlider = document.getElementById("size");
var speedSlider = document.getElementById("speed");
var buttonsDisabled = false;
var arraySize = 8; //defualt size
var bars;

genrateArray();

function getArrayFromSlider(input) {
  if(buttonsDisabled) {
    return;
  }
  arraySize = input.value;
  genrateArray();
}


function genrateArray() {
  document.getElementById('bars-container').innerHTML = ""

  for(let i = 0; i < arraySize * 10; i++) {
    let div = document.createElement('div');
    let randomNumber = Math.ceil(Math.random()*100);
    div.setAttribute("class","bar");

    div.style.height= (randomNumber) * 5 + "px " ;

    if(i === 0) {

      div.style.background= "red";
    }

    document.getElementById('bars-container').appendChild(div);
    bars = document.getElementsByClassName("bar");
  }



}


function swap(bar1Pos,bar2Pos) {

  let temp1 = bars[bar1Pos].cloneNode(true);
  let temp2 = bars[bar2Pos].cloneNode(true);

  bars[bar1Pos].parentNode.replaceChild(temp2, bars[bar1Pos]);
  bars[bar2Pos].parentNode.replaceChild(temp1, bars[bar2Pos]);

  let barTemp = bars[bar1Pos];
  bars[bar1Pos] = bar2Pos;
  bar2Pos[bar1Pos] = barTemp;

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
