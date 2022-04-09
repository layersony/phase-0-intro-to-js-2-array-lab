let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
  return cats.push(name)
}
function destructivelyPrependCat(name){
  return cats.unshift(name)
}
function destructivelyRemoveLastCat(){
  return cats.pop()
}
function destructivelyRemoveFirstCat(){
  return cats.shift()
}
function appendCat(name){
  var newarr = [...cats]
  newarr.push(name)
  return newarr
}
function prependCat(name){
  var newarr = [...cats]
  newarr.unshift(name)
  return newarr
}
function removeLastCat(){
  var newarr = [...cats]
  newarr.pop()
  return newarr
}
function removeFirstCat(){
  var newarr = [...cats]
  newarr.shift()
  return newarr
}