function classifyConsumption() {
    let kwh = document.getElementById("kwhInput").value;
    kwh = Number(kwh);

    let error = document.getElementById("error");

    // clear error first
    error.innerHTML = "";

    // error condition
    if (kwh < 0 || isNaN(kwh)) {
        error.innerHTML = "Please input a non-negative number.";
        return;
    }

    let message = "";

    if (kwh <= 100) {
        message = "Lifeline Consumer : Discounted electricity rates.";
    } else if (kwh <= 200) {
        message = "Low Consumption : Normal residential rate.";
    } else if (kwh <= 300) {
        message = "Average Consumption : Typical electricity usage.";
    } else if (kwh <= 500) {
        message = "High Consumption : Higher electricity usage.";
    } else {
        message = "Very High Consumption : Heavy electricity users.";
    }

    alert(message);
}