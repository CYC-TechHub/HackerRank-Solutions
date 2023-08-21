// TimeConversion

function timeConversion(s) {
    let hour=parseInt(s.slice(0,2));
    let minute=s.slice(3,5);
    let second=s.slice(6,8);
     
    if (s.slice(-2)==='PM' && hour!==12){
        hour+=12;
    }if(s.slice(-2)==='AM' && hour===12){
        hour=0
    }
    return (`${String(hour).padStart(2,'0')}:${minute}:${second}`)
}