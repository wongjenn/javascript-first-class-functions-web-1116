function receivesAFunction(callback){
  callback()
}


function returnsANamedFunction(){
  function runFiveMiles(){}
  return runFiveMiles
}

function returnsAnAnonymousFunction(){
  return function(){}
}
