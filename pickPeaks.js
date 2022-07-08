function pickPeaks(arr){
  let posArray = [];
  let peaksArray = [];
  for (let i = 1; i < arr.length-1; i++) {
    if (
      arr[i] > arr[i-1] && arr[i] > arr[i+1]
      || 
      arr[i] > arr[i-1] && arr[i] === arr[i+1] && arr.slice(i).find( item =>  item !== arr[i] ) < arr[i]
    ) {
      posArray.push(i);
      peaksArray.push(arr[i]);
    }
  };
  return {pos: posArray, peaks: peaksArray};
};