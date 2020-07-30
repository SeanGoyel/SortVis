function selectionSort() {

  for (let i = 0; i < arraySize; i++) {
    updateCurrentBar(bars[i]);
    let minIndex = i;
    for (let j = i + 1; j < arraySize; j++) {
      updateComparisonBar(bars[j]);
      updateUnprocessedBar(bars[j]);

      simultaneousEvents();
      if (barHeights[j] < barHeights[minIndex]) {


        if (minIndex > i) {
          updateUnprocessedBar(bars[minIndex]);
          simultaneousEvents();
        }

        updateMarkedBar(bars[j]);
        minIndex = j;
      }
    }

    let temp = barHeights[i];

    barHeights[i] = barHeights[minIndex];
    barHeights[minIndex] = temp;

    updateMarkedBar(bars[i], barHeights[i]);
    simultaneousEvents();
    updateCurrentBar(bars[minIndex], barHeights[minIndex]);


    if(minIndex > i){
      updateUnprocessedBar(bars[minIndex], barHeights[minIndex]);
      simultaneousEvents();
    }
    updateProcessedBar(bars[i], barHeights[i]);

  }

}
