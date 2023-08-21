// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
function minMaxSum(arr){
    const x= arr.sort();
    let a=0, b=0;
    for(let i=0; i<x.length; i++){
      if(i>=1){
        a=a+x[i];
      }
      if(i<x.length-1){
        b=b+x[i];
      }
    }
    
    return (b+" "+a)
  }
  
  console.log(minMaxSum([9,5,3,7,1]));