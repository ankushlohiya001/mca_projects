const txts = ["Welcome user", "Hello again", "How's going", "Hii"];
const keyPair = document.cookie.split(";").filter(pair => pair.startsWith("count"));

let presenceCount = 0;

if(keyPair.length === 0){
  document.cookie = "count=1";
  presenceCount = 1;
}else{
  const count = parseInt(keyPair[0].split("=")[1], 10);
  document.cookie = `count=${count+1}`;
  presenceCount = count+1;
}

const greetEl = document.getElementById("greet_h");
const counter = document.getElementById("counter");
const greetImg = document.getElementById("greet_img");

const index = presenceCount % txts.length;
greetEl.textContent = txts[index];
greetImg.src = `/img_${index}.png`;
if(presenceCount > 1){
  counter.textContent = `You visited this page ${presenceCount} times`;
}
