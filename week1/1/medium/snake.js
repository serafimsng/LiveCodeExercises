function generateSnake(row, column) {
  //your code here
  // console.log(row)
  function generateSnakeMini(len){
    let out = ''
    for(let i = 0; i < len; i++){
      if(i === 0)out += '~'
      else if(i === len-1)out += 'o'
      else out += '_'
    }
    return out
  }
  
  function generateSnakeHead(len){
    let out = ''
    for(let i = 0; i < len; i++){
      if(i === 0)out += '~'
      else out += '_'
    }
    return out
  }
  
  function generateSnakeTail(len){
    let out = ''
    for(let i = 0; i < len; i++){
      if(i === 0)out += 'o'
      else if(i === len-1)out += '|'
      else out += '_'
    }
    return out
  }
  
  function generateNormalSnakeBody(len){
    let out = ''
    for(let i = 0; i < len; i++){
      if(i === 0 || i === len-1)out += '|'
      else out += '_'
    }
    return out
  }

  if(row === 1){
    console.log(generateSnakeMini(column))
    return
  }

  //tail kebalik jika genap
  
  for(let i = 0; i < row; i++){
    if(i === 0){
      console.log(generateSnakeHead(column))
    }else if(i === row-1){
      if( (row-1) % 2 === 0) console.log(generateSnakeTail(column).split('').reverse().join(''))
      else console.log(generateSnakeTail(column))
    }else{
      console.log(generateNormalSnakeBody(column))
    }
  }
  return

  
}

generateSnake(1, 16);
generateSnake(3, 6);
generateSnake(5, 16);
generateSnake(4, 16);


// console.log(generateSnakeHead(15))
// console.log(generateNormalSnakeBody(15))
// console.log(generateSnakeTail(15).split('').reverse().join(''))
