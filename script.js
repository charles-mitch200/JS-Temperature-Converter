// Get html elemnts into JavaScript
const celciusElem = document.getElementById("celcius");
const fahrenheitElem = document.getElementById("fahrenheit");
const kelvinElem = document.getElementById("kelvin");

const changeTemperature = (event) => {
  // Convert the input value to a number
  const currentValue = +event.target.value;
  // Performs the conversion based on the name assigned to the input
  switch (event.target.name) {
    case "celcius":
      kelvinElem.value = currentValue + (273.32).toFixed(2);
      fahrenheitElem.value = (currentValue * 1.8 + 32).toFixed(2);
      break;
    case "fahrenheit":
      celciusElem.value = ((currentValue - 32) / 1.8).toFixed(2);
      kelvinElem.value = ((currentValue - 32) / 1.8 + 272.32).toFixed(2);
      break;
    case "kelvin":
      celciusElem.value = (currentValue - 273.32).toFixed(2);
      fahrenheitElem.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
      break;

    default:
      break;
  }
};
