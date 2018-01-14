'use strict';

/*jshint esnext: true */

function encode(string) {

  var result = []; var number = []; var letter = []; var count = []; var one = [];
  for(let i = 0 ; i < string.length; i++){if(string[i] !== string[i+1]){letter.push(string[i]);number.push(i+1)}};
  count.push(number[0]);
  for(let i = 1; i < letter.length; i++){count.push(number[i] - number[i-1])};
  for(let i = 0; i < letter.length; i++){result.push(count[i], letter[i])};
  for(let i = 0; i < result.length; i++){if(result[i] === 1){result.splice(i,1)}}
  return result.join("");
}
