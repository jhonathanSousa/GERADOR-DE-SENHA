// SELECTING-ELEMENTS
let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');
let sizePassword = document.querySelector('#value');
let password = document.querySelector('#password');
let containerPassword = document.querySelector('#container-password');

// CHARSET
let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@?/';
let newPassword = '';

sizePassword.innerHTML = sliderElement.value;

// CHECK TOTAL CHARACTERS
sliderElement.addEventListener('mousemove' , () => {
    sizePassword.innerHTML = sliderElement.value;
});

// ADD CHARACTERS TO SCREEN
buttonElement.addEventListener('click', () => {
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n))
    }

    containerPassword.classList.remove('hide');
    password.innerHTML = pass;
    newPassword = pass;
});

// COPIED PASSWORD
password.addEventListener('click', () => {
    navigator.clipboard.writeText(newPassword);
    alert('Senha copiada com sucesso !');
});

