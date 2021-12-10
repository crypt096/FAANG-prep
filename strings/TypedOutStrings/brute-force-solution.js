const S = "abz#";
const T = "ab";

const buildString = (str) => {
  const builtArray = [];
  for (let p = 0; p < str.length; p++) {
    if (str[p] !== "#") {
      builtArray.push(str[p]);
    } else {
      builtArray.pop();
    }
  }

  return builtArray;
}

const backSpaceCompare = (S, T) => {
  const finalS = buildString(S);
  const finalT = buildString(T);

  if (finalS.length !== finalT.length) {
    return false;
  } else {
    for (let p = 0; p < finalS.length; p++) {
      if (finalS[p] !== finalT[p]) {
        return false;
      }
    }
  }
}

console.log(backSpaceCompare(S, T));
