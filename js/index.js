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

const littleImg = document.querySelectorAll(".img-content");
//console.log(littleImg);

littleImg.addEventListener('wheel', (event) => {
    let scale = 1;

    event.preventDefault();

    scale += eventdeltaY * -0.01;

    scale = Math.min(Math.max(.125, scale), 4);

    littleImg.style.transform = `scale(${scale})`;
})

//Number 4


