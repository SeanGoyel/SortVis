function quickSortAlgorithm() {
  currentDelay = 0;
  resetToDefaultColor();
  quickSort(0, arraySize - 1);
  algorithmIsComplete();
}

function quickSort(low, high) {
  if (low >= high) return;

  let piv = partition(low, high);


  quickSort(low, piv - 1);
  for (let p = 0; p <= piv && p < arraySize; p++) {
    updateProcessedBar(bars[p]);
    simultaneousEvents();
  }
  quickSort(piv + 1, high);

  for (let p = piv + 1; p <= high + 1 && p < arraySize; p++) {
    updateProcessedBar(bars[p]);
    simultaneousEvents();
  }
}

function partition(low, high) {

  let piv = barHeights[low];
  updateComparisonBar(bars[low]);

  let i = low + 1;

  for (let j = low + 1; j <= high; j++) {


    updateCurrentBar(bars[j]);
    updateUnprocessedBar(bars[j]);
    simultaneousEvents();

    if (barHeights[j] < piv) {

      updateCurrentBar(bars[j], barHeights[i]);
      simultaneousEvents();
      updateCurrentBar(bars[i], barHeights[j]);

      updateUnprocessedBar(bars[j]);
      simultaneousEvents();
      updateMarkedBar(bars[i]);

      let temp = barHeights[i];

      barHeights[i] = barHeights[j];
      barHeights[j] = temp;

      i++;
    }


  }

  let temp = barHeights[low];
  barHeights[low] = barHeights[i - 1];
  barHeights[i - 1] = temp;

  updateComparisonBar(bars[i - 1], barHeights[i - 1]);
  simultaneousEvents();
  updateMarkedBar(bars[low], barHeights[low]);

  updateUnprocessedBar(bars[i - 1]);
  simultaneousEvents();
  updateMarkedBar(bars[low]);

  return i - 1;
}
