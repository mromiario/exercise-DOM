var body = document.body;
var main = document.getElementById("main");
var main_div = document.createElement("div");
main_div.setAttribute("id","content");
main.appendChild(main_div);

var main_div_div = document.createElement("div");
main_div_div.setAttribute("class","content-post");
main_div.appendChild(main_div_div);

var main_div_div_h1 = document.createElement("h1");
var h1Text = document.createTextNode("Judul Post")
main_div_div_h1.appendChild(h1Text);
main_div_div.appendChild(main_div_div_h1);

var main_div_div_span = document.createElement("span");
var fillSpan = document.createTextNode("Published on 12 May 2016");
main_div_div_span.appendChild(fillSpan);
main_div_div.appendChild(main_div_div_span);

var main_div_div_p = document.createElement("p");
var fillP = document.createTextNode("Lorem Ipsum Dolor Sit Amet");
main_div_div_p.appendChild(fillP);
main_div_div.appendChild(main_div_div_p);

var main_div_div_bttn = document.createElement("button");
main_div_div_bttn.setAttribute("class","content-post");
var buttonText = document.createTextNode("Share this Post");
main_div_div_bttn.appendChild(buttonText);
main_div_div_bttn.addEventListener('click',function(){
    alert('You have shared this post!')
})
main_div_div.appendChild(main_div_div_bttn);

var main_div_div2 = document.createElement("div");
main_div_div2.setAttribute("class","content-post");
main_div.appendChild(main_div_div2);
