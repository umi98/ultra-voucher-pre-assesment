const arr = ["cook", "save", "taste", "aves", "vase", "state", "map"];

const newArr = [];

const sortLetters = (letter) => letter.split("").sort().join("");

let skipElement = [];

for (let i = 0; i < arr.length; i++) {
  const tempArr = [];
  const sortElementI = sortLetters(arr[i]);
  tempArr.push(arr[i]);
  if (!skipElement.includes(i)) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        const sortElementJ = sortLetters(arr[j]);
        if (sortElementI === sortElementJ) {
          tempArr.push(arr[j]);
          skipElement.push(j);
        }
      }
    }
    newArr.push(tempArr);
  }
}

console.log(newArr);
