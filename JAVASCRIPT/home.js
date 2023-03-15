function header()
{
    document.getElementById("h1").style.transform="translate(20vw,0vh) rotateX(360deg)"
    document.getElementById("h1").style.color="white"
    document.getElementById("h1").style.transition="transform 1s,color 1s"
    document.getElementById("h2").style.transform="translate(20vw,0vh) rotateX(360deg)"
    document.getElementById("h2").style.color="white"
    document.getElementById("h2").style.transition="transform 0.5s,color 0.5s"
    
    document.getElementById("h3").style.transform="translate(0vw,-40vh) rotateX(360deg)"
    document.getElementById("h3").style.color="white"
    document.getElementById("h3").style.transition="transform 1s,color 1s"

    document.getElementById("h4").style.transform="translate(0vw,-25vh) rotateX(360deg)"
    document.getElementById("h4").style.color="white"
    document.getElementById("h4").style.transition="transform 0.5s,color 0.5s"

    document.getElementById("hexagon").style.backgroundColor="white"
    document.getElementById("v").style.color="black"
}
var a=setTimeout(header,500)
function hoverhexa(){
    document.getElementById("hexagon").style.backgroundColor="black"
    document.getElementById("v").style.color="white"

}
function hoverhexaout(){
    document.getElementById("hexagon").style.backgroundColor="white"
    document.getElementById("v").style.color="black"
}