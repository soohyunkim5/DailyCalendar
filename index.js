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
let buttonPre = document.querySelector(".buttonPre1");
let buttonNext = document.querySelector(".buttonNext1");
let calendar7 = document.querySelector(".calendar7");
let calendar8 = document.querySelector(".calendar8");
let calendar9 = document.querySelector(".calendar9");
let calendar10 = document.querySelector(".calendar10");
let calendar11 = document.querySelector(".calendar11");
let calendar12 = document.querySelector(".calendar12");
let calendar13 = document.querySelector(".calendar13");
let calendar14 = document.querySelector(".calendar14");
let calendar15 = document.querySelector(".calendar15");
let calendar16 = document.querySelector(".calendar16");
let calendar17 = document.querySelector(".calendar17");
let calendar18 = document.querySelector(".calendar18");
let calendar19 = document.querySelector(".calendar19");
let calendar20 = document.querySelector(".calendar20");
let calendar21 = document.querySelector(".calendar21");
let calendar22 = document.querySelector(".calendar22");
let calendar23 = document.querySelector(".calendar23");
let calendar24 = document.querySelector(".calendar24");
let calendar25 = document.querySelector(".calendar25");
let calendar26 = document.querySelector(".calendar26");
let calendar27 = document.querySelector(".calendar27");
let calendar28 = document.querySelector(".calendar28");
let calendar29 = document.querySelector(".calendar29");
let calendar30 = document.querySelector(".calendar30");
let calendar31 = document.querySelector(".calendar31");
let calendar32 = document.querySelector(".calendar32");
let calendar33 = document.querySelector(".calendar33");
let calendar34 = document.querySelector(".calendar34");
let calendar35 = document.querySelector(".calendar35");
let calendar36 = document.querySelector(".calendar36");
let calendar37 = document.querySelector(".calendar37");
let calendar38 = document.querySelector(".calendar38");
let calendar39 = document.querySelector(".calendar39");
let calendar40 = document.querySelector(".calendar40");
let calendar41 = document.querySelector(".calendar41");
let calendar42 = document.querySelector(".calendar42");
let calendar43 = document.querySelector(".calendar43");
let calendar44 = document.querySelector(".calendar44");
let calendar45 = document.querySelector(".calendar45");
let calendar46 = document.querySelector(".calendar46");
let calendar47 = document.querySelector(".calendar47");
let calendar48 = document.querySelector(".calendar48");
let calendarArr = [calendar7, calendar8, calendar9, calendar10, calendar11, calendar12, calendar13, calendar14, calendar15, calendar16, calendar17, calendar18, calendar19, calendar20, calendar21, calendar22, calendar23, calendar24, calendar25, calendar26, calendar27, calendar28, calendar29, calendar30, calendar31, calendar32, calendar33, calendar34, calendar35, calendar36, calendar37, calendar38, calendar39, calendar40, calendar41, calendar42, calendar43, calendar44, calendar45, calendar46, calendar47, calendar48]


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


for (let i = 0; i < 42; i++) {
    calendarArr[i].addEventListener("click", function onClick() {
        date = today.getDate();
        day = today.getDay();
        remainder = date % 7;
        first = day - (remainder - 1);

        if (first < 0) {
            first += 7;
        } else if (first === 7) {
            first = 0;
        }
        if (i < first) {
            now2.textContent = calendar[7 + i].textContent;
            now1.textContent ="";
        } else {
            now2.textContent = calendar[7 + i].textContent;
            now1.textContent = dayArr[i % 7];
        }
    })
}

