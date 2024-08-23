document.addEventListener('DOMContentLoaded', function () {
    function calculateInterest() {
        let principalElement = document.getElementsByClassName("principal-amount")[0].querySelector('input');
        let interestElement = document.getElementsByClassName("interest-rate")[0].querySelector('input');
        let timeElement = document.getElementsByClassName("time-period")[0].querySelector('input');

        let principal = parseFloat(principalElement.value);
        let interest = parseFloat(interestElement.value);
        let time = parseFloat(timeElement.value);

        if (principal < 500 || principal > 10000) {
            alert("Enter The principal amount Between 500 and 10000");
            document.getElementById("error-message").innerHTML = "Enter The principal amount Between 500 and 10000";
            return;
        } else {
            document.getElementById("error-message").innerHTML = ""; 
        }

        if (principal < 1000) {
            interest += 5;
        } else if (principal >= 1000 && principal < 5000) {
            interest += 7;
        } else if (principal >= 5000) {
            interest += 10;
        }

        if (time > 5) {
            interest += 2;
        }

        let totalInterest = (principal * interest * time) / 100;
        let totalAmount = principal + totalInterest;

        document.getElementById("interest").innerHTML = `Interest: ${totalInterest.toFixed(2)}`;
        document.getElementById("total").innerHTML = `Total Amount: ${totalAmount.toFixed(2)}`;
        document.getElementById("information").innerHTML = `
            ${principal} * ${interest} * ${time} / 100 = ${totalInterest.toFixed(2)}
        `;
    }

    document.querySelector(".Calculate-button button").addEventListener('click', calculateInterest);
});
