// You will be given a list of 32 bit unsigned integers. Flip all the bits (1->0 and 0->1) and return the result as an unsigned integer.
function change(n){
    let x= n.toString(2).padStart(32,'0');
    let z='';
    for(let y of x){
      z+= y==="0"? "1" : "0";
    }
    
    return parseInt(z,2)
    
  }
  
  console.log(change(12))