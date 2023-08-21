// Pangrams
function pangramCount(str){
    const x= 'qwertyuiopasdfghjklzxcvbnm';
    const s= str.toLowerCase();
    let pangram=true;
    [...x].forEach(char=>{
      if(!s.includes(char)){
        pangram=false;
      }
    })
    return pangram? 'pangram':'not pangram';
    
  }
  
  console.log(pangramCount('The Quick brown fox jumps over the lazy dog'));