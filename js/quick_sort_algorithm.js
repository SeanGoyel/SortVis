function quickSortAlgorithm() {
  console.log(barHeights);

  quickSort(0,arraySize-1);

  console.log(barHeights);

}

function quickSort(low, high) {
  if(low >= high) return;

  let piv = partition(low,high);

  quickSort(low, piv-1);
  quickSort(piv+1, high);
}

function partition(low, high) {

  let piv = barHeights[low];
  let i = low + 1;


  for(let j = low + 1; j <= high; j++) {

    if(barHeights[j] < piv) {

      let temp = barHeights[i];

      barHeights[i] = barHeights[j];
      barHeights[j] = temp;

      i++;

    }
  }

  let temp = barHeights[low];
  barHeights[low] = barHeights[i-1];
  barHeights[i-1] = temp;


  for (let p = low; p <= i && p <= high; p++) {

    updateProcessedBar(bars[p],barHeights[p]);

  }


  return i-1;
}
