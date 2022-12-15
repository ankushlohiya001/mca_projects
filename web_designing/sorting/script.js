const userNumsEl = document.getElementById("user_nums");
const sortBtn = document.getElementById("btn");
const sortedNumsEl = document.getElementById("sorted_nums");

sortBtn
  .addEventListener("click", eve => {
    eve.preventDefault();
    const nums = userNumsEl.value.replaceAll(" ", "").split(",").filter(val => val.trim().length > 0).map(val => parseInt(val.trim(), 10));
    const sortedNums = sorted(nums);
    
    for(let v of sortedNums){
      const li = document.createElement("li");
      li.textContent = v;
      sortedNumsEl.appendChild(li);
    }
  });

// 9 8 7 6 5 4
// 7 6 5 4 8 9

function sorted(arr) {
  const sortedArr = [];
  return arr;
}
