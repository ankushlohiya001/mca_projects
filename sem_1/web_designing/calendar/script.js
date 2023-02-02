const form = document.mainForm;
const yearEl = form.year;
for (let i = -30; i <= 50; i++) {
  const opt = document.createElement("option");
  yearEl.appendChild(opt);
  opt.value = opt.textContent = 2000 + i;
}

const monthEl = form.month;
const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
for (let i = 0; i < months.length; i++) {
  const opt = document.createElement("option");
  monthEl.appendChild(opt);
  opt.value = i;
  opt.textContent = months[i];
}

const dateEl = form.date;

let year, month, maxDays;

monthEl.onchange = yearEl.onchange = function() {
  year = yearEl.value;
  month = monthEl.value;
  if (year === "" || month === "") {
    return;
  }
  const leap = year % 1000 ? (year % 4 === 0) : (year % 400 == 0);
  maxDays = month == 1 ? (leap ? 29 : 28) : (month < 7 ? (month % 2 ? 30 : 31) : (month % 2 ? 31 : 30));
  dateEl.innerHTML = "";
  for (let i = 1; i <= maxDays; i++) {
    const opt = document.createElement("option");
    dateEl.appendChild(opt);
    opt.value = opt.textContent = i;
  }

  drawCalendar(1);
}

dateEl.onchange = function() {
  drawCalendar(dateEl.value);
};

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function drawCalendar(date) {
  const dt = new Date(year, month, 1);
  const day = dt.getDay();
  const tab = document.querySelector("table");
  tab.innerHTML = "";
  const rw = document.createElement("tr");
  tab.appendChild(rw);
  for (let i = 0; i < 7; i++) {
    const dat = document.createElement("th");
    const dayIndex = (day + i) % 7;
    dat.textContent = days[dayIndex];
    dat.classList.add(dayIndex === 0 ? "sun" : (dayIndex === 6) ? "sat" : "d");
    rw.appendChild(dat);
  }

  for (let d = 1; d <= maxDays;) {
    const rw = document.createElement("tr");
    tab.appendChild(rw);
    for (let i = 0; i < 7; i++) {
      if(d > maxDays) break;
      const dat = document.createElement("td");
      const dayIndex = (day + i) % 7;
      if(date == d){
        dat.classList.add("rb");
      }
      dat.classList.add(dayIndex === 0 ? "sun" : (dayIndex === 6) ? "sat" : "d");
      dat.textContent = d ++;
      rw.appendChild(dat);
    }
  }

}

