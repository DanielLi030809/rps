const container = document.querySelector("#container");

/* Add red node to website */
const red = document.createElement("p");
red.textContent = "Hey I'm red!";
red.style.color = "red";
container.appendChild(red);

/* Add blue text to DOM */
const blue = document.createElement("h3");
blue.style.color = "blue";
blue.textContent = "I'm a blue h3!";
container.appendChild(blue);

/* Create black and pink div element */
const div = document.createElement("div");
div.style.border = "black";
div.style.backgroundColor = "pink"

/* Create child nodes of div */
const p = document.createElement('p');
p.textContent = "ME TOO!";
const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

/* Add child nodes to div */
div.appendChild(p);
div.appendChild(h1);

/* Add div to container */
container.appendChild(div);

/* Create clickable button */
const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });

const text = document.createTextNode("hi");
container.appendChild(text);
  
  
  
