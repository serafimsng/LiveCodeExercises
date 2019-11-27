// RELEASE 0
function makeSolvent() {
  const availableIngredients = 'CFHOP';
  // code here
  let len = Math.round(Math.random()*10)
  if(len < 4)return makeSolvent()
  let out = ''
  for(let i = 0; i < len; i++){
    let randomIngridient = Math.round(Math.random()*4)
    out += availableIngredients[randomIngridient]
  }
  return out
}

// RELEASE 1
function checkTotalEnergy(solvent) {
  // code here
  let countH = 0
  let countO  = 0
  for(let i = 0; i < solvent.length; i++){
    if(solvent[i] === 'H')countH ++
    else if(solvent[i] === 'O')countO ++
  }
  
  let energyH = Math.floor(countH/2)
  let energyO = countO

  if(energyH === energyO){
    return energyH
  }else if(energyH < energyO){
    return energyH
  }else if(energyH > energyO){
    return energyO
  }
   

}

// RELEASE 2
let ingridients = []
function waterSupply(needEnergy) {
  // code here
  
  let solvent = makeSolvent()
  let energy = checkTotalEnergy(solvent)

  let obj = {
    name: solvent,
    energy: energy
  }

  ingridients.push(obj)
  let energyTotal = 0
  for(let i = 0; i < ingridients.length; i++){
    energyTotal += ingridients[i].energy
  }

  if(energyTotal >= needEnergy){
    return ingridients
  }else{
    return waterSupply(needEnergy)
  }

}

// RELEASE 3
function aggregate(solvent) {
  // code here
  solvent = solvent.split('')
  solvent = solvent.sort()
  
  let countC = 0
  let countH = 0
  let countO = 0
  let countP = 0

  for(let i = 0; i < solvent.length; i++){
    if(solvent[i] === 'C')countC ++
    else if(solvent[i] === 'H')countH++
    else if(solvent[i] === 'O')countO++
    else if(solvent[i] === 'P')countP++
  }

  let str =''
  
  if(countC === 1)str += 'C'
  else if(countC !== 0)str +=`C${countC}`

  if(countH === 1)str += 'H'
  else if(countH !== 0)str+=`H${countH}`
  if(countO === 1)str += 'O'
  else if(countO !== 0)str +=`O${countO}`

  if(countP === 1)str += 'P'
  else if(countP !== 0)str +=`P${countP}`

  return str

}

console.log(waterSupply(3));
console.log(aggregate('HHPOC'))
// console.log(makeSolvent())
// console.log(checkTotalEnergy('HHHHOOPC'))