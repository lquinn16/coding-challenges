function printStars(num) {
  let res = "";
  for (let i = 0; i<num; i++) {
    let numSpaces = num - (i+1);
    let spaces = getSpaces(numSpaces);
    let numStars = i + (i + 1);
    let stars = getStars(numStars);
    let line = spaces + stars;
    res += line + "\n";
    
  }
  return res;
}

function getSpaces(numSpaces) {
  let result = "";
  for (let i = 0; i<numSpaces; i++) {
    result += " ";
  }
  return result;
}

function getStars(numStars) {
  let result = "";
  for (let i = 0; i<numStars; i++) {
    result += "*";
  }
  return result;
}

let result = printStars(9);
console.log(result);
