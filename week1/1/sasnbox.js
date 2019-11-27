const stage1 = '123456789';

function printBoard(strTrack, lengthTrack) {
    // code here
    console.log(strTrack.length)
    let out = []
    let temp = []
    for(let i = 0; i < strTrack.length; i++){
      if(i % lengthTrack === 0 && i !== 0){
        // temp.push(strTrack[i])
        out.push(temp)
        temp = []
        i--
      }else{
        temp.push(strTrack[i])
      }
    }
    
    out.push(temp)
    return out
  
  
}

console.log(printBoard(stage1,3))