'use strict';

function decode(string) {
  var result = [];
  for(let i = 0; i< string.length; i++){
    if (isNaN(string[i]*1) || string[i] === " "){result.push(string[i])}
    else if(!isNaN(parseInt(string[i])) && !isNaN(parseInt(string[i+1]))){result.push(string[i + 2].repeat([string[i],string[i+1]].join("")-1)); i++}
    else {result.push(string[i + 1].repeat(string[i]-1))}
  }
  return result.join("")
}
