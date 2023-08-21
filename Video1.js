// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

function matchString(strings, queries){
  let result=[];
  
  for(let i of queries){
    let x=0;
    for(let j of strings){
      if(i===j){
        x+=1;
      }
    }
    result.push(x)
  }
  return result;
 
}
const string= ['ab','abc','bc','abc','ab']
const querie=['ab','abc','dc','bc']
const res= matchString(string,querie)

console.log(res)