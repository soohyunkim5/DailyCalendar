let now1 = document.querySelector(".now1");
let now2 = document.querySelector(".now2");
let now3 = document.querySelector(".now3");
let today = new Date();
today.setMonth(6);
today.setDate(28);
let date = today.getDate();
let day = today.getDay();
let month = today.getMonth();
let year = today.getFullYear();
let dayArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
let monthArr = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
let calendar = document.querySelector(".calendar")


now1.textContent = dayArr[day];
now2.textContent = date;
now3.textContent = monthArr[month] + " " + year;

let remainder = date % 7;
let first = day - (remainder - 1);

if (first < 0) {
    first += 7;
} else if (first === 7) {
    first = 0;
}

console.log(first);

console.log(calendar[1]);