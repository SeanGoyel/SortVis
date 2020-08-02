function insertionSort() {
  currentDelay = 0;
  resetToDefaultColor();
  for (let i = 0; i < arraySize; i++) {

    updateCurrentBar(bars[i]);

    let currentHeight = barHeights[i];
    let j = i - 1;

    while (j >= 0 && barHeights[j] >
      currentHeight) {

      updateComparisonBar(bars[j]);

      barHeights[j + 1] = barHeights[j];

      updateCurrentBar(bars[j], currentHeight);
      simultaneousEvents();
      updateComparisonBar(bars[j + 1], barHeights[j]);

      updateProcessedBar(bars[j + 1], barHeights[j]);

      j--;
    }

    if (j >= 0) updateComparisonBar(bars[j]);

    barHeights[j + 1] = currentHeight;

    if (j >= 0) updateProcessedBar(bars[j]);

    updateProcessedBar(bars[j + 1], currentHeight);
  }
  algorithmIsComplete();
}
