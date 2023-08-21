// Counting Sort1
function freqCount(arr){
    let x= new Array(100).fill(0);
    
    for(let i=0; i<arr.length; i++){
      x[arr[i]]++;
    }
    return x;
  }
  
  console.log(freqCount([1,1,1,3,5,4]))