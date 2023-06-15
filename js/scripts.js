function handleCalculation(event) {
  event.preventDefault();
  const side1 = parseInt(document.querySelector("#side1").value);
  const side2 = parseInt(document.querySelector("#side2").value);
  const side3 = parseInt(document.querySelector("#side3").value);


  let result;

  if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
    if (side1 === side2 && side2 === side3) {
      result = "Equilateral";
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
      result = "Isosceles";
    } else {
      result = "Scalene";
    }
  } else {
    result = "Not a triangle"
  }


  document.getElementById("result").innerText = result;
}

window.onload = function () {
  const form = document.querySelector("form")
  form.addEventListener("submit", handleCalculation)
}