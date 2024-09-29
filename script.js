function calculateAge() {
    const birthdayInput = document.getElementById('birthday');
    const birthDate = new Date(birthdayInput.value);
    const today = new Date();

    // Calculate years
    let years = today.getFullYear() - birthDate.getFullYear();
    if (
        today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
    ) {
        years--;
    }

    let months = (today.getMonth() - birthDate.getMonth() + 12) % 12;

    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let days = today.getDate() - birthDate.getDate();
    if (days < 0) {
    const prevMonth = (today.getMonth() - 1 + 12) % 12;
    days += monthDays[prevMonth];
    }

    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
}
