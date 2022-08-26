const arrSort = (array) => {
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        let tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
 }
 return array;
}

let numberArr = [30, 9, 15, 18, 21, 20, 51, 100];
const result = arrSort(numberArr);
console.log("Sorted Array >>>>> ",result);