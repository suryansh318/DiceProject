var randomNumber1 = Math.ceil(6*Math.random());
document.querySelector("#image1").setAttribute("src","../Dicee Challenge - Starting Files/images/dice"+randomNumber1+".png");

var randomNumber2 = Math.ceil(6*Math.random());
document.querySelector("#image2").setAttribute("src","../Dicee Challenge - Starting Files/images/dice"+randomNumber2+".png");

if (randomNumber1 > randomNumber2) {
    document.querySelector("h2").innerHTML = "🚩Winner is player 1";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h2").innerHTML = "Winner is player 2🚩";
}
else {
    document.querySelector("h2").innerHTML = "It is a draw";
}