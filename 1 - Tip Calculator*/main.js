const bob = document.getElementById("bill");
const tips = document.getElementById("perc"); 
const calcul = document.getElementById("calc");
const tot = document.getElementById("total");

function calculate (/* bob, tips */) {
  const bill = parseFloat(bob.value);
  const perc = parseFloat(tips.value);

  if (isNaN(bill) || isNaN(perc)) {
    tot.innerText = "Enter valid numbers!";
    return;
  };

  const result = bill + (bill * perc) / 100;
  tot.innerText = ` $${result.toFixed(2)}`;
};

/* calcul.addEventListener("click", (event) => {
  event.preventDefault();
  calculate(bob, tips); 
}); */

calcul.addEventListener("click", calculate); 
