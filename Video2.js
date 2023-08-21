// Given an array of integers, where all elements but one occur twice, find the unique element.
// a=[1,2,3,4,3,2,1]
// The unique element is 4.
// Function Description
// Complete the lonelyinteger function in the editor below.
// lonelyinteger has the following parameter(s):
// int a[n]: an array of integers


function lonelyInteger(data){
    let UniData={};
   for(let x of data){
     UniData[x] = ( UniData[x] || 0 ) + 1;
   }
   let UniValue=[];
   
   for(let y of data){
     if(UniData[y]===1){
       UniValue.push(y)
     }
   }
   return UniValue;
 }
 
 console.log(lonelyInteger([1,2,3,4,3,2,1,5,6,6,6,7]))