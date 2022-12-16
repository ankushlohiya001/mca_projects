const userNumsEl = document.getElementById("user_nums");
const sortBtn = document.getElementById("btn");
const sortedNumsEl = document.getElementById("sorted_nums");

sortBtn
  .addEventListener("click", eve => {
    eve.preventDefault();

    const nums = userNumsEl
      .value
      .replaceAll(" ", "")
      .split(",")
      .filter(val => val.length > 0)
      .map(val => parseInt(val, 10));
    const sortedNums = sorted(nums);

    sortedNumsEl.innerHTML = "";
    for (let v of sortedNums) {
      const li = document.createElement("li");
      li.textContent = v;
      sortedNumsEl.appendChild(li);
    }
  });


function sorted(arr) {
  const sortedArr = [];
  for(;arr.length > 0;) {
    let minIndx = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndx]) {
        minIndx = j;
      }
    }
    sortedArr.push(arr[minIndx]);
    if (minIndx === (arr.length - 1)) {
      arr.pop();
    } else {
      arr[minIndx] = arr.pop();
    }
  }
  return sortedArr;
}
