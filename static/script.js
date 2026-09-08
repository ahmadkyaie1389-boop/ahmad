let yesSize = 1;


// شروع سوال

function startQuestion(){

    document.getElementById("page1").classList.add("hidden");

    document.getElementById("page2").classList.remove("hidden");

    playMusic();

}



// دکمه بله

function yesClick(){


    document.getElementById("page2").classList.add("hidden");


    document.getElementById("page3").classList.remove("hidden");


}



// دکمه نه

function noClick(){


    let no = document.getElementById("no");


    let x = Math.random()*250 - 125;

    let y = Math.random()*150 - 75;


    no.style.transform =
    `translate(${x}px,${y}px)`;


    let yes =
    document.getElementById("yes");


    yesSize += 0.15;


    yes.style.transform =
    `scale(${yesSize})`;

}



// صفحه آخر

function finalPage(){


    let date =
    document.getElementById("date").value;


    let time =
    document.getElementById("time").value;



    if(date=="" || time==""){


        alert("اول تاریخ و ساعت قرار رو انتخاب کن ❤️");

        return;

    }



    document.getElementById("page3").classList.add("hidden");


    document.getElementById("page4").classList.remove("hidden");


    createPetals();



}




// موزیک

function playMusic(){


    let music =
    document.getElementById("music");


    music.volume = 0.4;


    music.play()
    .catch(()=>{});


}




// ساخت گلبرگ

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