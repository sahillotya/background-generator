var css = document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body= document.querySelector("#gradient");
console.log(body);

function setGradient(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", "+ color2.value +")";

    css.textContent=body.style.background +";";
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input",setGradient);

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
function randomGenerator(){
    randoms=[];
    for (var i=0; i<6;i++)
        randoms[i] = Math.floor((Math.random() * 255) + 1);
    console.log(randoms);
    color1.value=rgbToHex(randoms[0],randoms[1],randoms[2]);
    color2.value=rgbToHex(randoms[3],randoms[4],randoms[5]);
    setGradient();
    

}