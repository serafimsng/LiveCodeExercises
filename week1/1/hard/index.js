// STATIC Stage Information
const stage1 = 'oooooooooooooooo';
const lengthStage1 = 4;
const stage2 = 'oooooooooooooooooxoo';
const lengthStage2 = 5;
const stage3 = 'oxooxooxooxo';
const lengthStage3 = 3;
const stage4 = 'ooooooooooxooooooxxooooxxxooooxxxoooxxxxxo';
const lengthStage4 = 7;
const jumpPowerStage1 = 0;
const jumpPowerStage2 = 3;
const jumpPowerStage3 = 6;
const jumpPowerStage4 = 2;
// STATIC Stage End

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
  out.push(temp)
  return out
}



const boards1 = printBoard(stage1, lengthStage1);
const boards2 = printBoard(stage2, lengthStage2);
const boards3 = printBoard(stage3, lengthStage3);
const boards4 = printBoard(stage4, lengthStage4);

// RELEASE 0
// console.log(boards1);
// console.log(boards2);
// console.log(boards3);
// console.log(boards4);



function marioLastPosition(boards, jumpPower) {
  // code here
  
  let arena = boards
  if(jumpPower > arena.length)jumpPower = arena.length

  let obstacle = []
  for(let horizontalMove = 0; horizontalMove < arena[0].length; horizontalMove++){
    let heightX = 0
    for(let j = 0; j < arena.length; j++){
      if(arena[j][horizontalMove] === 'x')heightX ++
    }
    obstacle.push(heightX)
  }

  for(let i = 0; i < obstacle.length; i++){
    if(jumpPower <= obstacle[i] && obstacle[i] !== 0){
      var lastPosition = i-1
    }
  }

  if(lastPosition === undefined)return 'Congratulation you win the game'
  else return `you stuck at step ${lastPosition}`

}


// RELEASE 1
const marioLastPos1 = marioLastPosition(boards1, jumpPowerStage1);
const marioLastPos2 = marioLastPosition(boards2, jumpPowerStage2);
const marioLastPos3 = marioLastPosition(boards3, jumpPowerStage3);
// console.log(marioLastPos1)
// console.log(marioLastPos2)
// console.log(marioLastPos3)



function clearScreen() {
  // Un-comment this line if you have trouble with console.clear();
  // return process.stdout.write('\033c');
  console.clear();
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function animate(boards, jumpPower) {
  // code here
  clearScreen()
  let obstacle = marioObstacle(boards)
  let mario = [ (boards.length-1) , 0 ]
  console.log(mario)
  boards[mario[0]][mario[1]] = 'M'
  // console.log(boards)
  for(let i = 0; i < obstacle.length; i++){
    
    sleep(2000)
    clearScreen()
    console.log(boards)
    // console.log(mario)
    boards[mario[0]][mario[1]] = 'O'
    mario = eachJump(jumpPower,mario)
    // console.log(mario)
    boards[mario[0]][mario[1]] = 'M'

    sleep(1000)
    clearScreen()
    console.log(boards)

    boards[mario[0]][mario[1]] = 'O'
    mario = eachMove(mario)
    // console.log(mario)
    boards[mario[0]][mario[1]] = 'M'



  }



  function eachJump(jumpPower,position){
    console.log(position[1])
    if(position[0] - jumpPower < 0){
      position[0] = 0
    }else{
      // console.log('bb')
      position[0] -= jumpPower
    }
    return [ position[0] , Number(position[1]) ]

  }
  function eachMove(position){
    // console.log('eachmove=> ' , position)
    if(boards.length-1 , [position[1] + 1] === 'x'){
      return [boards.length-2 , [position[1] + 1]]
    }
    return [boards.length-1 , [position[1] + 1]]
    
  }

  function marioObstacle(boards, jumpPower) {
    // code here
    
    let arena = boards
    if(jumpPower > arena.length)jumpPower = arena.length
  
    let obstacle = []
    for(let horizontalMove = 0; horizontalMove < arena[0].length; horizontalMove++){
      let heightX = 0
      for(let j = 0; j < arena.length; j++){
        if(arena[j][horizontalMove] === 'x')heightX ++
      }
      obstacle.push(heightX)
    }
  
    for(let i = 0; i < obstacle.length; i++){
      if(jumpPower <= obstacle[i] && obstacle[i] !== 0){
        var lastPosition = i-1
      }
    }
    return obstacle
  }

}


// RELEASE 2
animate(boards1, jumpPowerStage1);
// RELEASE 3
// animate(boards2, jumpPowerStage2);
// animate(boards3, jumpPowerStage3);
// RELEASE 4
// animate(boards4, jumpPowerStage4);