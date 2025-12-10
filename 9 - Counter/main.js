const numb = document.getElementById("numb");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");

let x = 0;
    
minus.addEventListener("click", () => {
  numb.innerText = (x - 1);
  x = x - 1;
});

plus.addEventListener("click", () => {
  numb.innerText = (x + 1);
  x = x + 1;
});