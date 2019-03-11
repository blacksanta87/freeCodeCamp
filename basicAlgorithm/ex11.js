// Title case a sentence
function titleCase(str) {
  // return first letter capitalize for each words.
  // the rest are lower case.
  // capitalize the connecting words to. eg: the, of
  let splitStr = str.split(' ');
  let result = [];
  
  for(let i = 0; i < splitStr.length; i++) {
    let subSplitStr = splitStr[i].split('');
    subSplitStr[0] = subSplitStr[0].toUpperCase();
    
    for(let j = 1; j < subSplitStr.length; j++) {
      subSplitStr[j] = subSplitStr[j].toLowerCase();
    }

    let joinedStr = subSplitStr.join('');
    result.push(joinedStr);
  }
  return result.join(' ');
}

console.log(titleCase("SO, YOU WANT TO DANCE?"));
console.log(titleCase("I'm a little tea pot"));