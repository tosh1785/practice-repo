//alert("Did I work?")

/*function isAdult (age){
    if (age >= 18){
        return `Welcome to adulthood!`
    }
    else {
        return `Come back in ${18 - age} years`
    }
}*/

function calculateTaxes(income) {
    if (income > 30000) {
      return income * 0.25;
    } else {
      return income * 0.15;
    }
  }
  
  console.log(calculateTaxes(500))