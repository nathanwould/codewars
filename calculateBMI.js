function bmi(weight, height) {
  let message = null
  let value = weight / height**2
  if (value <= 18.5) {
    message = "Underweight"
  } else if (value > 18.5 && value <= 25.00) {
    message = "Normal"
  } else if (value > 25 && value <= 30) {
    message = "Overweight"
  } else if (value > 30) {
    message = "Obese"
  } else {
    message = "Please enter valid height and weight."
  }
  return message;
}

console.log(bmi(80, 1.8))