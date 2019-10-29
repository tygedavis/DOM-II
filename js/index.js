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

//Number 3  //TODO: NOT FINISHED

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
        element.style.transform = "scale(2)";
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

//For the last button, also used for propagation

let content = document.querySelector(".content-pick");
//console.log(destination);
content.addEventListener("dblclick", () => {
    content.style.backgroundColor = "pink";
})

let destination = document.querySelectorAll('.destination');
console.log(destination);
destination.forEach(e => {
    e.addEventListener("dblclick", () => {
        e.style.backgroundColor = "#00BFFF";
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

//