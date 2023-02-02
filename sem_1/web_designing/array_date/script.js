
function handleForm(form, outputEl, methods) {
  const operationEl = form.operation;

  for (let name of Object.keys(methods)) {
    const optEl = document.createElement("option");
    optEl.value = optEl.textContent = name;
    operationEl.appendChild(optEl);
  }

  form.onsubmit = function(eve) {
    eve.preventDefault();

    const operation = methods[form.operation.value];
    if(form.params) outputEl.textContent = operation(form.params.value.split(",").map(elem => elem.trim()), form.params);
    else outputEl.textContent = operation();
  }
}

let arr = [];
handleForm(document.arrForm, document.getElementById("arr_output"), {
  push(params, elem) {
    arr.push.apply(arr, params);
    elem.value = "";
    return arr;
  },
  pop(_params, elem) {
    arr.pop();
    elem.value = "";
    return arr;
  },
  sort(_params, elem) {
    arr.sort();
    elem.value = "";
    return arr;
  },
  shift(_params, elem) {
    arr.shift();
    elem.value = "";
    return arr;
  },
  unshift(params, elem) {
    arr.unshift.apply(arr, params);
    elem.value = "";
    return arr;
  }
});

handleForm(document.dateForm, document.getElementById("date_output"), {
  seconds() {
    let date = new Date();
    return date.getSeconds();
  },
  minutes() {
    let date = new Date();
    return date.getMinutes();
  },
  hours() {
    let date = new Date();
    return date.getHours();
  },
  minutes() {
    let date = new Date();
    return date.getMinutes();
  },
  date() {
    let date = new Date();
    return date.getDate();
  },
  day() {
    let date = new Date();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  },
  month() {
    let date = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months[date.getMonth()];
  },
  year() {
    let date = new Date();
    return date.getFullYear();
  }
});
