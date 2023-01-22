let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");
button.addEventListener("click", () => {
  let li = document.createElement("li");
  let data = input.value;
  li.innerText = data;
  ul.appendChild(li);
});
