'use strict';

const logIn = document.querySelector('.log-in')
const hamburger = document.querySelector('.fa-bars')

'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const contactButtons = document.querySelectorAll('.c-button');
    const popupOverlay = document.getElementById('popupOverlay');
    const popupForm = document.getElementById('popupForm');
    const closeBtn = document.querySelector('.popup-form .close-btn');
    const submitBtn = document.querySelector('.popup-form button[type="button"]');
    const form = document.querySelector('.popup-form form');

    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');

    contactButtons.forEach(button => {
        button.addEventListener('click', togglePopup);
    });

    closeBtn.addEventListener('click', closePopup);
    popupOverlay.addEventListener('click', closePopup);
    submitBtn.addEventListener('click', submitForm);

    nameInput.addEventListener('input', () => validateInput(nameInput));
    emailInput.addEventListener('input', () => validateInput(emailInput));
    messageInput.addEventListener('input', () => validateInput(messageInput));

    function togglePopup() {
        if (popupOverlay.style.display === 'block' && popupForm.style.display === 'block') {
            closePopup();
        } else {
            openPopup();
        }
    }

    function openPopup() {
        popupOverlay.style.display = 'block';
        popupForm.style.display = 'block';
    }

    function closePopup() {
        popupOverlay.style.display = 'none';
        popupForm.style.display = 'none';
    }

    function submitForm() {
        if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
            alert('Name and Email are required!');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            alert('Please enter a valid email');
            return;
        } 
        closePopup();
    }

    function validateInput(input) {
        const value = input.value.trim();
        const icon = document.getElementById(`${input.name}Icon`);

        if (input.name === 'name') {
            const isValid = value !== '';
            updateIcon(isValid, icon);
        } else if (input.name === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const isValid = emailRegex.test(value);
            updateIcon(isValid, icon);
        }
    }

    function updateIcon(isValid, icon) {
        if (isValid) {
            icon.classList.remove('invalid-icon');
            icon.classList.add('valid-icon');
        } else {
            icon.classList.remove('valid-icon');
            icon.classList.add('invalid-icon');
        }

        icon.style.visibility = 'visible';
    }
});

