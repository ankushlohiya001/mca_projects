const form = document.mainForm;


form.onsubmit = function(eve) {
  let errors = [];

  eve.preventDefault();
  const username = form.username.value;

  // dissallowing space in username
  if (showDanger(form.username, username.includes(" "))) {
    errors.push("space not allowed in user name");
  }
  // constraining username to length 3-10
  else if (showDanger(form.username, username.length < 3 || username.length > 10)) {
    errors.push("username should be in range 3-10");
  }

  const email = form.email.value;
  // only allowing email only from ".com" domain
  if (showDanger(form.email, email.split("@")[1].split(".")[1] != "com")) {
    errors.push("only email from .com are allowed");
  }

  const mobile = form.mobile.value;
  // checking if mobile number length between 10 or 13(with country code), and only +91
  if (showDanger(form.mobile, !(mobile.length === 10 || (mobile.length === 13 && mobile.startsWith("+91"))))) {
    errors.push("only indian number are allowed. that is 10 digit number with or without +91");
  }

  if (errors.length === 0) {
    alert(`You entered correctly`);
  } else {
    alert(errors.join("\n"));
  }
}


function showDanger(elem, will) {
  elem.style.borderColor = will?"red":"";
  return will;
}
