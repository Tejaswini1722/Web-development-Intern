document.getElementById('nssForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop default form submission

    const fullName = document.getElementById('fullName').value.trim();
    const regNo = document.getElementById('regNo').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const gender = document.getElementById('gender').value;
    const dept = document.getElementById('dept').value.trim();
    const year = document.getElementById('year').value;
    const medical = document.getElementById('medical').value.trim();
    const message = document.getElementById('formMessage');

    // Validation checks
    if (!fullName || !regNo || !email || !phone || !gender || !dept || !year) {
        message.textContent = "Please fill in all required fields.";
        message.style.color = "red";
        return;
    }

    // Email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        message.textContent = "Enter a valid email address.";
        message.style.color = "red";
        return;
    }

    // Phone validation (10 digits)
    if (!/^\d{10}$/.test(phone)) {
        message.textContent = "Phone number must be exactly 10 digits.";
        message.style.color = "red";
        return;
    }

    // Success
    message.textContent = "Registration successful!";
    message.style.color = "green";

    // Optionally reset the form
    // document.getElementById('nssForm').reset();
});
