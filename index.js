// 1일과 마지막일 앞뒤로 숫자랑 요일 안뜨게 하는거 아이디어 구하기!!


let now1 = document.querySelector(".now1");
let now2 = document.querySelector(".now2");
let now3 = document.querySelector(".now3");
let today = new Date();
let date = today.getDate();
let day = today.getDay();
let month = today.getMonth();
let year = today.getFullYear();
let dayArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
let monthArr = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
let calendar = document.getElementsByTagName("th");
console.log(calendar[3].textContent)
let buttonPre = document.querySelector(".buttonPre1");
let buttonNext = document.querySelector(".buttonNext1");
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

if (month === 1) {
    for (let i = 0; i < 28; i++) {
        calendar[7 + first + i].textContent = i + 1;
    }
} else if (month <= 6 && month % 2 === 0) {
    for (let i = 0; i < 31; i++) {
        calendar[7 + first + i].textContent = i + 1;
    }
} else if (month <= 6 && month % 2 === 1) {
    for (let i = 0; i < 30; i++) {
        calendar[7 + first + i].textContent = i + 1;
    }
} else if (month >= 7 && month % 2 === 0) {
    for (let i = 0; i < 30; i++) {
        calendar[7 + first + i].textContent = i + 1;
    }
} else if (month >= 7 && month % 2 === 1) {
    for (let i = 0; i < 31; i++) {
        calendar[7 + first + i].textContent = i + 1;
    }
}

for (let i = 0; i < 42; i++) {
    calendar[7 + i].addEventListener("click", function onClick() {
            if (calendar[7 + i].textContent === "") {

            } else {
                now1.textContent = dayArr[i % 7];
                now2.textContent = calendar[7 + i].textContent;
            }
        }
    )
}

buttonPre.addEventListener("click", function onClick() {

    for (let i = 0; i < 42; i++) {
        calendar[7 + i].textContent = ""
    }

    today = new Date(today.setMonth(today.getMonth() - 1));
    date = today.getDate();
    month = today.getMonth();
    year = today.getFullYear();
    day = today.getDay();

    now3.textContent = monthArr[month] + " " + year;

    remainder = date % 7;
    first = day - (remainder - 1);

    if (first < 0) {
        first += 7;
    } else if (first === 7) {
        first = 0;
    }

    now1.textContent = dayArr[first];
    now2.textContent = 1;

    if (month === 1) {
        for (let i = 0; i < 28; i++) {
            calendar[7 + first + i].textContent = i + 1;
        }
    } else if (month <= 6 && month % 2 === 0) {
        for (let i = 0; i < 31; i++) {
            calendar[7 + first + i].textContent = i + 1;
        }
    } else if (month <= 6 && month % 2 === 1) {
        for (let i = 0; i < 30; i++) {
            calendar[7 + first + i].textContent = i + 1;
        }
    } else if (month >= 7 && month % 2 === 0) {
        for (let i = 0; i < 30; i++) {
            calendar[7 + first + i].textContent = i + 1;
        }
    } else if (month >= 7 && month % 2 === 1) {
        for (let i = 0; i < 31; i++) {
            calendar[7 + first + i].textContent = i + 1;
        }
    }


})


buttonNext.addEventListener("click", function onClick() {

    for (let i = 0; i < 42; i++) {
        calendar[7 + i].textContent = ""
    }

    today = new Date(today.setMonth(today.getMonth() + 1));
    date = today.getDate();
    month = today.getMonth();
    year = today.getFullYear();
    day = today.getDay();

    now3.textContent = monthArr[month] + " " + year;

    remainder = date % 7;
    first = day - (remainder - 1);

    if (first < 0) {
        first += 7;
    } else if (first === 7) {
        first = 0;
    }

    now1.textContent = dayArr[first];
    now2.textContent = 1;

    if (month === 1) {
        for (let i = 0; i < 28; i++) {
            calendar[7 + first + i].textContent = i + 1;
        }
    } else if (month <= 6 && month % 2 === 0) {
        for (let i = 0; i < 31; i++) {
            calendar[7 + first + i].textContent = i + 1;
        }
    } else if (month <= 6 && month % 2 === 1) {
        for (let i = 0; i < 30; i++) {
            calendar[7 + first + i].textContent = i + 1;
        }
    } else if (month >= 7 && month % 2 === 0) {
        for (let i = 0; i < 30; i++) {
            calendar[7 + first + i].textContent = i + 1;
        }
    } else if (month >= 7 && month % 2 === 1) {
        for (let i = 0; i < 31; i++) {
            calendar[7 + first + i].textContent = i + 1;
        }
    }
})



