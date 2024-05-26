document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let isValid = true;

    if (firstName === '') {
        document.getElementById('first-name-error').style.display = 'block';
        document.getElementById('one-alert').style.display = 'block';
        document.getElementById('one-alert').style.top = '4%';
        isValid = false;
    } else {
        document.getElementById('first-name-error').style.display = 'none';
        document.getElementById('one-alert').style.display = 'none';
        document.getElementById('one-alert').style.top = '4%';

    }

    if (lastName === '') {
        document.getElementById('last-name-error').style.display = 'block';
        document.getElementById('two-alert').style.display = 'block';
        document.getElementById('two-alert').style.top = '23%';
        isValid = false;
    } else {
        document.getElementById('last-name-error').style.display = 'none';
        document.getElementById('two-alert').style.display = 'none';
        document.getElementById('two-alert').style.top = '22%';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('email-error').style.display = 'block';
        document.getElementById('three-alert').style.display = 'block';
        document.getElementById('three-alert').style.top = '42%';
        isValid = false;
    } else {
        document.getElementById('email-error').style.display = 'none';
        document.getElementById('three-alert').style.display = 'none';
        document.getElementById('three-alert').style.top = '40%';
    }

    if (password === '') {
        document.getElementById('password-error').style.display = 'block';
        document.getElementById('four-alert').style.display = 'block';
        document.getElementById('four-alert').style.top = '61%';
        isValid = false;
    } else {
        document.getElementById('password-error').style.display = 'none';
        document.getElementById('four-alert').style.display = 'none';
        document.getElementById('four-alert').style.top = '58%';
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }


    // script.js

    const togglePassword = document.getElementById('togglePassword');
    const password2 = document.getElementById('password');

    togglePassword.addEventListener('click', function () {
    // Toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    // Toggle the eye icon
    this.classList.toggle('fa-eye-slash');
    });

}
