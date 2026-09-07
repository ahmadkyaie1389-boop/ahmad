// ===============================
// دکمه های بله و خیر ❤️
// ===============================

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const questionPage = document.getElementById("questionPage");
const datePage = document.getElementById("datePage");
const finalPage = document.getElementById("finalPage");

let noScale = 1;
let yesScale = 1;


// دکمه خیر
if (noBtn) {
    noBtn.addEventListener("click", () => {

        noScale -= 0.12;

        if (noScale < 0.25) {
            noScale = 0.25;
        }

        noBtn.style.transform = `scale(${noScale})`;

        yesScale += 0.12;

        if (yesScale > 2.5) {
            yesScale = 2.5;
        }

        if (yesBtn) {
            yesBtn.style.transform = `scale(${yesScale})`;
        }

        const messages = [
            "مطمئنی؟ 🥺",
            "یه بار دیگه فکر کن ❤️",
            "قول میدم خوش بگذره 😌",
            "نه نگو دیگه 😭",
            "فقط یه قرار کوچولو 🥹💕",
            "بله رو بزن دیگه ❤️",
            "این دکمه داره کوچیک میشه 😭"
        ];

        const randomMessage =
            messages[Math.floor(Math.random() * messages.length)];

        const message =
            document.getElementById("message");

        if (message) {
            message.textContent = randomMessage;
        }
    });
}


// دکمه بله
if (yesBtn) {

    yesBtn.addEventListener("click", () => {

        // شروع موزیک ❤️
        const music =
            document.getElementById("music");

        if (music) {
            music.play().catch(() => {});
        }


        // انفجار قلب
        createLoveExplosion();


        // گلبرگ ها
        createPetals(35);


        // کمی صبر برای دیدن افکت
        setTimeout(() => {

            if (questionPage) {
                questionPage.classList.remove("active");
            }

            if (datePage) {
                datePage.classList.add("active");
            }

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 900);

    });
}

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    ;



// ===============================
// تقویم شمسی
// ===============================

const persianMonths = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند"
];

const persianNumbers = [
    "۰", "۱", "۲", "۳", "۴",
    "۵", "۶", "۷", "۸", "۹"
];

function toPersianNumber(number) {
    return String(number).replace(
        /\d/g,
        digit => persianNumbers[digit]
    );
}


// ===============================
// تبدیل تاریخ
// ===============================

function div(a, b) {
    return Math.floor(a / b);
}

function mod(a, b) {
    return a - Math.floor(a / b) * b;
}


function jalaliToGregorian(jy, jm, jd) {

    jy += 1595;

    let days =
        -355668 +
        365 * jy +
        div(jy, 33) * 8 +
        div((mod(jy, 33) + 3), 4) +
        jd;

    if (jm < 7) {
        days += (jm - 1) * 31;
    } else {
        days += (jm - 7) * 30 + 186;
    }

    let gy = 400 * div(days, 146097);

    days = mod(days, 146097);

    if (days > 36524) {

        gy += 100 * div(--days, 36524);

        days = mod(days, 36524);

        if (days >= 365) {
            days++;
        }
    }

    gy += 4 * div(days, 1461);

    days = mod(days, 1461);

    if (days > 365) {

        gy += div(days - 1, 365);

        days = mod(days - 1, 365);
    }

    let gd = days + 1;

    const monthDays = [
        31, 28, 31, 30, 31, 30,
        31, 31, 30, 31, 30, 31
    ];

    const leap =
        (gy % 4 === 0 && gy % 100 !== 0) ||
        gy % 400 === 0;

    if (leap) {
        monthDays[1] = 29;
    }

    let gm = 0;

    while (
        gm < 12 &&
        gd > monthDays[gm]
    ) {
        gd -= monthDays[gm];
        gm++;
    }

    return {
        gy: gy,
        gm: gm + 1,
        gd: gd
    };
}


function gregorianToJalali(gy, gm, gd) {

    let gYear = gy - 1600;
    let gMonth = gm - 1;
    let gDay = gd - 1;

    let gDayNo =
        365 * gYear +
        div(gYear + 3, 4) -
        div(gYear + 99, 100) +
        div(gYear + 399, 400);

    const days = [
        0, 31, 59, 90, 120, 151,
        181, 212, 243, 273, 304, 334
    ];

    gDayNo += days[gMonth] + gDay;

    if (
        gMonth > 1 &&
        (
            (gy % 4 === 0 && gy % 100 !== 0) ||
            gy % 400 === 0
        )
    ) {
        gDayNo++;
    }

    let jDayNo = gDayNo - 79;

    let jNp = div(jDayNo, 12053);

    jDayNo = mod(jDayNo, 12053);

    let jy =
        979 +
        33 * jNp +
        4 * div(jDayNo, 1461);

    jDayNo = mod(jDayNo, 1461);

    if (jDayNo >= 366) {

        jy += div(jDayNo - 1, 365);

        jDayNo =
            mod(jDayNo - 1, 365);
    }

    let jm;
    let jd;

    if (jDayNo < 186) {

        jm =
            1 + div(jDayNo, 31);

        jd =
            1 + mod(jDayNo, 31);

    } else {

        jm =
            7 + div(jDayNo - 186, 30);

        jd =
            1 + mod(jDayNo - 186, 30);
    }

    return {
        jy: jy,
        jm: jm,
        jd: jd
    };
}


// ===============================
// تعداد روز ماه
// ===============================

function getDaysInJalaliMonth(year, month) {

    if (month <= 6) {
        return 31;
    }

    if (month <= 11) {
        return 30;
    }

    const nextYear =
        jalaliToGregorian(
            year + 1,
            1,
            1
        );

    const day30 =
        jalaliToGregorian(
            year,
            12,
            30
        );

    const d1 = new Date(
        nextYear.gy,
        nextYear.gm - 1,
        nextYear.gd
    );

    const d2 = new Date(
        day30.gy,
        day30.gm - 1,
        day30.gd
    );

    return Math.round(
        (d1 - d2) / 86400000
    ) === 1 ? 30 : 29;
}


// ===============================
// عناصر تقویم
// ===============================

const dateInput =
    document.getElementById("dateInput");

const calendar =
    document.getElementById("calendar");

const monthTitle =
    document.getElementById("monthTitle");

const daysContainer =
    document.getElementById("days");

const prevMonth =
    document.getElementById("prevMonth");

const nextMonth =
    document.getElementById("nextMonth");

const selectedDateInput =
    document.getElementById("selectedDate");


// ===============================
// تاریخ امروز
// ===============================

const today = new Date();

const todayJalali =
    gregorianToJalali(
        today.getFullYear(),
        today.getMonth() + 1,
        today.getDate()
    );

let currentYear =
    todayJalali.jy;

let currentMonth =
    todayJalali.jm;

let selectedDate = null;


// ===============================
// ساخت تقویم
// ===============================

function renderCalendar() {

    if (!monthTitle || !daysContainer) {
        return;
    }

    monthTitle.textContent =
        `${persianMonths[currentMonth - 1]} ${toPersianNumber(currentYear)}`;

    daysContainer.innerHTML = "";

    const firstGregorian =
        jalaliToGregorian(
            currentYear,
            currentMonth,
            1
        );

    const firstDate = new Date(
        firstGregorian.gy,
        firstGregorian.gm - 1,
        firstGregorian.gd
    );

    // شنبه اول تقویم
    const startDay =
        (firstDate.getDay() + 1) % 7;

    const daysInMonth =
        getDaysInJalaliMonth(
            currentYear,
            currentMonth
        );


    // خانه های خالی
    for (let i = 0; i < startDay; i++) {

        const empty =
            document.createElement("span");

        empty.className = "empty";

        daysContainer.appendChild(empty);
    }


    // روزهای ماه
    for (
        let day = 1;
        day <= daysInMonth;
        day++
    ) {

        const button =
            document.createElement("button");

        button.type = "button";

        button.textContent =
            toPersianNumber(day);


        // امروز
        if (
            todayJalali.jy === currentYear &&
            todayJalali.jm === currentMonth &&
            todayJalali.jd === day
        ) {
            button.classList.add("today");
        }


        // تاریخ انتخاب شده
        if (
            selectedDate &&
            selectedDate.year === currentYear &&
            selectedDate.month === currentMonth &&
            selectedDate.day === day
        ) {
            button.classList.add("selected");
        }


        button.addEventListener(
            "click",
            () => {

                selectedDate = {
                    year: currentYear,
                    month: currentMonth,
                    day: day
                };

                selectedDateInput.value =
                    `${currentYear}/${currentMonth}/${day}`;

                dateInput.textContent =
                    `❤️ ${toPersianNumber(day)} ${persianMonths[currentMonth - 1]} ${toPersianNumber(currentYear)}`;

                dateInput.classList.add("chosen");

                calendar.classList.remove("show");

                renderCalendar();
            }
        );

        daysContainer.appendChild(button);
    }
}


// ===============================
// باز کردن تقویم
// ===============================

if (dateInput) {

    dateInput.addEventListener(
        "click",
        () => {

            calendar.classList.toggle("show");

            renderCalendar();
        }
    );
}


// ===============================
// ماه قبل
// ===============================

if (prevMonth) {

    prevMonth.addEventListener(
        "click",
        () => {

            currentMonth--;

            if (currentMonth < 1) {
                currentMonth = 12;
                currentYear--;
            }

            renderCalendar();
        }
    );
}


// ===============================
// ماه بعد
// ===============================

if (nextMonth) {

    nextMonth.addEventListener(
        "click",
        () => {

            currentMonth++;

            if (currentMonth > 12) {
                currentMonth = 1;
                currentYear++;
            }

            renderCalendar();
        }
    );
}


// ===============================
// ساعت + تأیید
// ===============================

const timeInput =
    document.getElementById("timeInput");

const confirmBtn =
    document.getElementById("confirmBtn");

const dateError =
    document.getElementById("dateError");


if (confirmBtn) {

    confirmBtn.addEventListener(
        "click",
        () => {

            if (!selectedDate) {

                dateError.textContent =
                    "اول تاریخ قرارمون رو انتخاب کن ❤️";

                return;
            }

            if (!timeInput.value) {

                dateError.textContent =
                    "حالا ساعت قرارمون رو هم انتخاب کن 🥰";

                return;
            }


            const finalDate =
                document.getElementById("finalDate");

            const finalTime =
                document.getElementById("finalTime");


            if (finalDate) {

                finalDate.textContent =
                    `${toPersianNumber(selectedDate.day)} ${persianMonths[selectedDate.month - 1]} ${toPersianNumber(selectedDate.year)}`;
            }


            if (finalTime) {

                finalTime.textContent =
                    toPersianNumber(timeInput.value);
            }


            if (datePage) {
                datePage.classList.remove("active");
            }

            if (finalPage) {
                finalPage.classList.add("active");
            }
        }
    );
}


// ===============================
// موزیک
// ===============================

const music =
    document.getElementById("music");

const musicBtn =
    document.getElementById("musicBtn");

if (musicBtn && music) {

    musicBtn.addEventListener(
        "click",
        () => {

            if (music.paused) {

                music.play();

                musicBtn.textContent =
                    "⏸️ توقف موزیک";

            } else {

                music.pause();

                musicBtn.textContent =
                    "🎵 پخش موزیک";
            }
        }
    );
}


// ===============================
// قلب های شناور ❤️
// ===============================

function createHeart() {

    const heart =
        document.createElement("div");

    heart.className =
        "floating-heart";

    heart.textContent =
        Math.random() > 0.5
            ? "❤️"
            : "💗";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (4 + Math.random() * 5) + "s";

    heart.style.fontSize =
        (12 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(
        () => heart.remove(),
        9000
    );
}

setInterval(
    createHeart,
    700
);


// شروع تقویم
renderCalendar();
// =====================================
// انفجار قلب ❤️
// =====================================

function createLoveExplosion() {

    const explosion =
        document.createElement("div");

    explosion.className =
        "love-explosion";

    document.body.appendChild(explosion);


    const hearts = [
        "❤️",
        "💗",
        "💕",
        "💖",
        "💘",
        "💝"
    ];


    for (let i = 0; i < 35; i++) {

        const heart =
            document.createElement("div");

        heart.className =
            "explosion-heart";

        heart.textContent =
            hearts[
                Math.floor(
                    Math.random() * hearts.length
                )
            ];


        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            150 + Math.random() * 400;


        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;


        heart.style.setProperty(
            "--x",
            `${x}px`
        );

        heart.style.setProperty(
            "--y",
            `${y}px`
        );

        heart.style.setProperty(
            "--rotate",
            `${Math.random() * 720 - 360}deg`
        );


        heart.style.animationDelay =
            `${Math.random() * 0.15}s`;


        explosion.appendChild(heart);
    }


    setTimeout(() => {

        explosion.remove();

    }, 1600);
}



// =====================================
// گلبرگ های عاشقانه 🌸
// =====================================

function createPetals(amount) {

    const petals = [
        "🌸",
        "🌹",
        "💗",
        "💕"
    ];


    for (let i = 0; i < amount; i++) {

        setTimeout(() => {

            const petal =
                document.createElement("div");

            petal.className =
                "love-petal";

            petal.textContent =
                petals[
                    Math.floor(
                        Math.random() * petals.length
                    )
                ];


            petal.style.left =
                Math.random() * 100 + "vw";


            petal.style.setProperty(
                "--drift",
                `${Math.random() * 250 - 125}px`
            );


            petal.style.setProperty(
                "--duration",
                `${4 + Math.random() * 4}s`
            );


            petal.style.fontSize =
                `${15 + Math.random() * 20}px`;


            document.body.appendChild(petal);


            setTimeout(() => {
                petal.remove();
            }, 9000);

        }, i * 70);
    }
}



// =====================================
// متن تایپی صفحه آخر ✨
// =====================================

function typeLoveMessage() {

    const loveText =
        document.querySelector(".love-text");

    if (!loveText) {
        return;
    }


    const text =
        "بعضی قرارها فقط یه قرار نیستن...\nشروع یه خاطره‌ی قشنگن که دلم می‌خواد با تو بسازمش ❤️";


    loveText.innerHTML = "";


    const textContainer =
        document.createElement("span");

    loveText.appendChild(textContainer);


    const cursor =
        document.createElement("span");

    cursor.className =
        "typing-cursor";

    loveText.appendChild(cursor);


    let index = 0;


    function type() {

        if (index < text.length) {

            if (text[index] === "\n") {

                textContainer.innerHTML +=
                    "<br>";

            } else {

                textContainer.innerHTML +=
                    text[index];
            }

            index++;

            setTimeout(
                type,
                55
            );

        } else {

            setTimeout(() => {

                cursor.style.display =
                    "none";

            }, 2500);
        }
    }


    type();
}



// =====================================
// وقتی صفحه نهایی باز شد
// =====================================

const finalPageElement =
    document.getElementById("finalPage");


if (finalPageElement) {

    const observer =
        new MutationObserver(() => {

            if (
                finalPageElement.classList.contains(
                    "active"
                )
            ) {

                typeLoveMessage();

                createPetals(20);

                observer.disconnect();
            }

        });


    observer.observe(
        finalPageElement,
        {
            attributes: true,
            attributeFilter: ["class"]
        }
    );
}