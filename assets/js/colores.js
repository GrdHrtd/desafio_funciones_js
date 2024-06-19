const divs = document.querySelectorAll("#div1, #div2, #div3, #div4");

for (const div of divs) {
  div.addEventListener("click", () => {
    div.style.backgroundColor = "black";
  });
}