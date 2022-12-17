const items = document.querySelectorAll("img");
let count = 0;

for(let item of items){
  item.onmouseenter = function(eve){
    if(count < 4) count++;
    else{
      alert("stop for god sake!");
      return;
    }
    const elem = eve.target;
    const url = `http://${elem.alt}.com`;
    open(url, "_blank", true);
  }
}
