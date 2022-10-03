const result = document.getElementById("result");

const convert = () => {
    const inputTemp = document.querySelector("#input").value;
    const inputTempType = document.querySelector("#tempUnit").value;

    //check if input is empty
    if (inputTemp == "") {
        alert("Input cannot be empty");
        return;
    }

    let convertedTemp;
    if (inputTempType == "fahrenheit") {
        convertedTemp = (inputTemp - 32) * 5 / 9;
        result.innerText = "Converted temperature is " + convertedTemp.toFixed(2) + "°C";
    }

    if (inputTempType == "celsius") {
        convertedTemp = (inputTemp * 9 / 5) + 32;
        result.innerText = "Converted temperature is " + convertedTemp.toFixed(2) + "°F";
    }
}