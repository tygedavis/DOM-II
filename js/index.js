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


