// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

function MatrixDiaSum(arr){
    let x=arr.length;
     let a=0,b=0;
     
     for(let i=0 ; i<x; i++){
       a=a+arr[i][i];
       b=b+arr[i][x-1-i]
     }
     return Math.abs(a-b);
     
   }
   
   console.log(MatrixDiaSum([[1,2,3],[4,5,6],[9,8,9]]));
   