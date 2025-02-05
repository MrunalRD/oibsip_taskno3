function convertTemperature() {
    let temp = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    let resultText = '';

    // Check if the input is a valid number
    if (isNaN(temp) || temp === '') {
        document.getElementById('result').innerText = 'Please enter a valid number!';
        return;
    }

    temp = parseFloat(temp); // Convert input to a float

    // Convert based on the selected unit
    if (unit === 'celsius') {
        const fahrenheit = (temp * 9/5) + 32;
        const kelvin = temp + 273.15;
        resultText = `${temp}°C = ${fahrenheit.toFixed(2)}°F = ${kelvin.toFixed(2)}K`;
    } else if (unit === 'fahrenheit') {
        const celsius = (temp - 32) * 5/9;
        const kelvin = (temp - 32) * 5/9 + 273.15;
        resultText = `${temp}°F = ${celsius.toFixed(2)}°C = ${kelvin.toFixed(2)}K`;
    } else if (unit === 'kelvin') {
        const celsius = temp - 273.15;
        const fahrenheit = (temp - 273.15) * 9/5 + 32;
        resultText = `${temp}K = ${celsius.toFixed(2)}°C = ${fahrenheit.toFixed(2)}°F`;
    }

    // Display the result
    document.getElementById('result').innerText = resultText;
}
