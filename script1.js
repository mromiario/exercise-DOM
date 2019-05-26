var body = document.body;
var bodyChilds = body.children;
console.log(bodyChilds);

var findH1 = document.getElementById("fill-me");
findH1.innerHTML = "HALO";

var changeOfMe = document.getElementsByClassName("change-all-of-me");
for(var i=0;i<changeOfMe.length;i++){
    changeOfMe[i].innerHTML = "HALO JUGA!";
}
document.getElementsByTagName('h2')[0].innerHTML = "Apa Kabar!"