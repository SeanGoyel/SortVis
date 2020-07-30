function bubbleSort() {
  for(let i = 0; i < arraySize - 1; i++) {
    for(let j = 0; j < arraySize - 1 - i; j++) {

      if(barHeights[j] > barHeights[j+1]) {

        let temp = barHeights[j];

        barHeights[j] = barHeights[j+1];
        barHeights[j+1] = temp;
      }
    }
  }
}
