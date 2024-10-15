document.getElementById('calculate-btn').addEventListener('click', function () {
    let currentDate = new Date(document.getElementById('current-date').value);
    let birthDate = new Date(document.getElementById('Birth-date').value);

    if (!isNaN(currentDate.getTime()) && !isNaN(birthDate.getTime())) {
        let age = currentDate.getFullYear() - birthDate.getFullYear();

        let currentMonth = currentDate.getMonth();
        let birthMonth = birthDate.getMonth();
        let currentDay = currentDate.getDate();
        let birthDay = birthDate.getDate();

        if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
            age--;
        }

        document.getElementById('result').innerHTML = `Your Age is: ${age} years`;
    }
    else {
        document.getElementById('result').innerHTML = "Please enter valid dates.";
    }
});