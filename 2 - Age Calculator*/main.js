const date = document.getElementById("dob");
const x = document.getElementById("age");
const calc = document.getElementById("calcul");
const ans = document.getElementById("resp");

function calculate () {
  const dateval = new Date(date.value);
  const year = dateval.getFullYear();
  
  if (isNaN(year)) {
    ans.innerText = "Enter your true date of birth!";
  return;
  };
  
  const result = 2025 - year; 
  x.innerText = ` ${result} `;
} 
calc.addEventListener("click", calculate);
