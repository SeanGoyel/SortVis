
var mergedArray = new Array();

function mergeSortAlgorithm() {
  mergeSort(0, arraySize - 1);
}


function mergeSort(low,high) {
  if(low >= high) return;
  let mid = Math.floor((low+high)/2);

  mergeSort(low,mid);
  mergeSort(mid+1,high);

  merge(low,mid,high);

}

function merge(low,mid,high) {

  updateMarkedBar(bars[low]);
  updateMarkedBar(bars[high]);

    let i=low,j=mid+1,k=0;

    while(i<mid+1 && j<high+1) {
      if(barHeights[i]<=barHeights[j]) {
        mergedArray[k]=barHeights[i];

        if(k != low && k != high) updateCurrentBar(bars[k],barHeights[i]);
        i++;
      } else {
        mergedArray[k]=barHeights[j];
        if(k != low && k != high) updateCurrentBar(bars[k],barHeights[j]);
        j++;
      }
      k++;
    }

    while(i<mid+1) {
      mergedArray[k]=barHeights[i];
      if(k != low && k != high) updateCurrentBar(bars[k],barHeights[i]);
      i++;
      k++;
    }

    while(j<high+1) {
      mergedArray[k]=barHeights[j];
      if(k != low && k != high) updateCurrentBar(bars[k],barHeights[j]);
      j++;
      k++;
    }

    for(let p=0; p<k; p++)
    {
        barHeights[low]=mergedArray[p];
        updateProcessedBar(bars[low],barHeights[low]);
        low++;
      }

  }
