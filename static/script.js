// =======================
// تغییر صفحات
// =======================
function openEnvelope(){


let env =
document.querySelector(".envelope");


env.classList.add("open");



document.getElementById("hint")
.innerHTML=
"نامه باز شد ❤️";



setTimeout(()=>{


document.getElementById("startBtn")
.classList.remove("hide");


},1200);



createHearts();


}





function createHearts(){


for(let i=0;i<20;i++){


let heart =
document.createElement("div");


heart.className="heart-float";

heart.innerHTML="❤️";


heart.style.left =
Math.random()*100+"%";


heart.style.animationDelay =
Math.random()*5+"s";


document.body.appendChild(heart);


}



}
function openQuestion(){

    document.getElementById("start")
    .classList.add("hide");


    document.getElementById("question")
    .classList.remove("hide");


    playMusic();

}



// =======================
// دکمه ها
// =======================

let yesScale = 1;


function yesAnswer(){


    document.getElementById("question")
    .classList.add("hide");


    document.getElementById("datePage")
    .classList.remove("hide");


}




function noAnswer(){


    let btn =
    document.getElementById("noBtn");


    let x =
    Math.random()*250-125;


    let y =
    Math.random()*150-75;



    btn.style.transform =
    `translate(${x}px,${y}px)`;



    yesScale += 0.15;


    document.getElementById("yesBtn")
    .style.transform =
    `scale(${yesScale})`;

}



// =======================
// موزیک
// =======================


function playMusic(){


let music =
document.getElementById("music");


music.volume=.35;


music.play()
.catch(()=>{});


}





// =======================
// تقویم شمسی
// =======================


const months=[

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



let currentMonth=0;


let selectedDay=null;



function showCalendar(){


document
.getElementById("calendar")
.classList.remove("hide");


renderCalendar();


}





function renderCalendar(){


let box =
document.getElementById("dates");


box.innerHTML="";



document.getElementById("monthTitle")
.innerHTML =
months[currentMonth]+" ۱۴۰۵";



let days = 31;



if(currentMonth==11)
days=29;



for(let i=1;i<=days;i++){


let day =
document.createElement("div");


day.innerHTML=i;



day.onclick=function(){


selectedDay=i;


document.getElementById("selectedDate")
.innerHTML =

i+" "+months[currentMonth]+" ۱۴۰۵ ❤️";


};



box.appendChild(day);



}



}




function changeMonth(value){


currentMonth += value;



if(currentMonth<0)
currentMonth=11;


if(currentMonth>11)
currentMonth=0;



renderCalendar();



}





// =======================
// صفحه آخر
// =======================


function finishDate(){



if(selectedDay==null){


alert("اول تاریخ رو انتخاب کن ❤️");


return;

}



document.getElementById("datePage")
.classList.add("hide");



document.getElementById("final")
.classList.remove("hide");



createPetals();



}




// =======================
// گلبرگ رز
// =======================


function createPetals(){


let box =
document.getElementById("petals");



for(let i=0;i<40;i++){


let petal =
document.createElement("span");


petal.innerHTML="🌹";


petal.style.left =
Math.random()*100+"%";



petal.style.animationDelay =
Math.random()*5+"s";



box.appendChild(petal);



}


}