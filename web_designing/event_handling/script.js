/// utility functions
function setTitle(elem, title) {
  elem.setAttribute("title", title);
}

function showDanger(elem, will) {
  elem.style.borderColor = will ? "red" : "";
  return will;
}

function handleValidation(elem, checkCb, warnMsg) {
  elem.oninput = function() {
    const value = elem.value;
    let title = showDanger(elem, checkCb(value)) ? warnMsg : "yeah, it's valid";
    setTitle(elem, title);
  }
}

const form = document.mainForm;

handleValidation(form.username, username => username.includes(" ") || username.length < 3 || username.length > 10, "username must contain no space and it's length must be in range 3, 10");

handleValidation(form.email, email => email.split("@")[1].split(".")[1] != "com", "only email from .com are allowed");

handleValidation(form.mobile, mobile => !(mobile.length === 10 || (mobile.length === 13 && mobile.startsWith("+91"))), "only indian number are allowed. that is 10 digit number with or without +91");

const btn = document.getElementById("btn");

document.body.onmousemove = function(eve){
  let dx = eve.shiftKey ? - 20 : 5;
  btn.style.top = (eve.clientY+dx)+"px";
  btn.style.left= (eve.clientX+dx)+"px";
}

form.onsubmit = function(eve){
  eve.preventDefault();
  alert("yeah, entered everything correctly");
}
