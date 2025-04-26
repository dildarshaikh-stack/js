function calculator(operation) {
    const spc1 = parseFloat(document.getElementById("spc1").value);
    const spc2 = parseFloat(document.getElementById("spc2").value);
    let result = "";

    if (isNaN(spc1) || isNaN(spc2)) {
        result = "Please enter valid numbers.";
    } else {
        switch (operation) {
            case 'add':
                result = `Addition: ${spc1 + spc2}`;
                break;

            case 'subtract':
                result = `Subtraction: ${spc1 - spc2}`;
                break;

            case 'multiply':
                result = `Multiplication: ${spc1 * spc2}`;
                break;

            case 'divide':
                result = spc2 !== 0 ? `Division: ${spc1 / spc2}` : "Cannot divide by zero.";
                break;

            case 'sqrt':
                result = spc1 >= 0 ? `Square Root of ${spc1}: ${Math.sqrt(spc1)}` : "Cannot calculate sqrt of negative number.";
                break;

            case 'double':
                result = `Double of ${spc1} is ${spc1 * 2}, Double of ${spc2} is ${spc2 * 2}`;
                break;

            case 'exponent':
                result = `${spc1} ^ ${spc2} = ${Math.pow(spc1, spc2)}`;
                break;

            default:
                result = "Invalid operation.";
        }
    }

    document.getElementById("result").innerText = result;
}
