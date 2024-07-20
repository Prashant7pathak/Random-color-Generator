let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let h3 = document.querySelector("h3");
    let random = color();
    h3.innerText=random;
    let div = document.querySelector("div");
    div.style.backgroundColor = random;
    console.log("Color updated");
})


function color() {
    let red = Math.floor(Math.random()*255) + 1;
    let green = Math.floor(Math.random()*255) + 1;
    let blue = Math.floor(Math.random()*255) + 1;
    let col=`rgb(${red},${green},${blue})`;
    return col;
}