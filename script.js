// Equal sign does not mean that number and 0 are equal
let number = 0
// Event listener for "Calculate" button
document.getElementById('calculate').addEventListener('click', calculate)
function calculate () {
  number = document.getElementById('input').value
  // "parseInt" takes whatever is stored into number, and convert it into an integer
  number = parseInt(number)
  // because it is a square, the number is multiplied by itself
  number = number * number
  // Displays final answer
  alert(number)
} 
