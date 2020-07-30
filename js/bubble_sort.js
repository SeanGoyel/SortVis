function bubbleSort() {
  for(let i = 0; i < arraySize - 1; i++) {
    for(let j = 0; j < arraySize - 1 - i; j++) {
      updateCurrentBar(bars[j]);
      simultaneousEvents();
      updateCurrentBar(bars[j+1]);
      if(barHeights[j] > barHeights[j+1]) {
        updateMarkedBar(bars[j]);
        simultaneousEvents();
        updateMarkedBar(bars[j+1]);

        updateMarkedBar(bars[j], barHeights[j+1]);
        simultaneousEvents();
        updateMarkedBar(bars[j+1], barHeights[j]);

        let temp = barHeights[j];

        barHeights[j] = barHeights[j+1];
        barHeights[j+1] = temp;
      }

      updateUnprocessedBar(bars[j]);
      simultaneousEvents();
      updateUnprocessedBar(bars[j+1]);
      simultaneousEvents();



      if(j == arraySize  - i - 2) {
        updateProcessedBar(bars[j+1])
        simultaneousEvents();
      }
    }
  }
  updateUnprocessedBar(bars[0]);
  updateProcessedBar(bars[0]);

}
