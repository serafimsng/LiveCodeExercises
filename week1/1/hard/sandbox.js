const stage3 = 'oxooxooxooxo';
const lengthStage3 = 3;

function printBoard(strTrack, lengthTrack) {
    // code here
    // console.log(strTrack.length)
    let out = []
    let temp = []
    // let counter = 0
    for(let i = 0; i < strTrack.length; i++){
        if(i % (lengthTrack) === 0 && i !== 0){
            out.push(temp)
            temp = []   
        }
        temp.push(strTrack[i])
    }
    return out
}

console.log(printBoard(stage3,lengthStage3))