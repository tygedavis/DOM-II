// Your code goes here

//Number 1

const busImg = document.querySelector(".intro img");
//console.log(busImg);
busImg.addEventListener('mouseover', () => {
    busImg.style.opacity = "0.65";
    busImg.style.transition = "all 0.5s"
});

//Number 2

busImg.addEventListener("mouseleave", () => {
    busImg.style.opacity = "1";
    busImg.style.transition = "all 0.3s"
})

//Number 3

let button = document.querySelector(".btn");
// console.log(button);
button.addEventListener("dblclick", () => {
    let curColor = document.body.style.backgroundColor;

    if (curColor === 'white'){
        document.body.style.backgroundColor = 'lightblue';
    }else{
        document.body.style.backgroundColor = 'white';
    }
});

//Number 4

littleImg = document.querySelectorAll('.img-content');
//console.log(littleImg);
littleImg.forEach(element => {
    element.addEventListener("click", () => {
        element.style.transform = "scale(3)";
        element.style.transition = "all 0.3s";
    })
});

//Number 5

navs = document.querySelectorAll(".nav-link");
//console.log(navs);
navs.forEach(e => {
    e.addEventListener("mouseover", () => {
        e.style.color = "orange";
    });
});

//Number 6

navs.forEach( e => {
    e.addEventListener("mouseout", () => {
        e.style.color = "limegreen";
    });
});

//Number 7

paragraphs = document.querySelectorAll("p");
//console.log(paragraphs);
paragraphs.forEach(e => {
    e.addEventListener("click", () => {
        e.style.color = "#FF00FF";
    })
})

//Number 8

headings = document.querySelectorAll("h1, h2, h4");
//console.log(headings);
headings.forEach( e => {
    e.addEventListener("dblclick", () => {
        e.style.color = "#FF1493";
    })
})

//Number 9

let footer = document.querySelector(".footer");
//console.log(footer);
footer.addEventListener("mousedown", () => {
    footer.textContent = "It's a trap! No Fun Bus!";
});

//Number 10

let secBtn = document.querySelector(".secBtn");
//console.log(secBtn);
secBtn.addEventListener("dblclick", () => {
    let curColor = document.body.style.backgroundColor;

    if (curColor === 'white'){
        document.body.style.backgroundColor = 'lime';
    }else{
        document.body.style.backgroundColor = 'white';
    }
})

//Practice for "keydown"
let imgBrdr = document.querySelector(".img-content img");
document.addEventListener("keypress", () => {
    imgBrdr.style.border = "10px solid brown";
});

//I tried playing with CSS selectors but I couldn't get it to work...
// let secImgBrdr = document.querySelector(".img-content img:lastChild");
// document.addEventListener("keypress", () => {
//     secImgBrdr.style.border = "10px solid green";
// });

//Practice with wheel

let pEffect = document.querySelectorAll("p");
pEffect.forEach(e => {
    e.addEventListener("wheel", () => {
        e.style.filter = "blur(10px)";
    });
})

//For the last button, **also used for nested events**

let content = document.querySelector(".content-pick");
//console.log(destination);
content.addEventListener("dblclick", () => {
    content.style.backgroundColor = "pink";
})

let destination = document.querySelectorAll('.destination');
console.log(destination);
destination.forEach(e => {
    e.addEventListener("dblclick", (event) => {
        e.style.backgroundColor = "#00BFFF";
        event.stopPropagation();
    })
})

let lastBtn = document.querySelector(".lastBtn");
//console.log(lastBtn);
lastBtn.addEventListener("dblclick", () => {
    let curColor = document.body.style.backgroundColor;

    if (curColor === 'white'){
        document.body.style.backgroundColor = 'red';
    }else{
        document.body.style.backgroundColor = 'white';
    }
})
