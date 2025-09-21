

const userDatabase = {
    "kafayat": {
        firstName:"kafayat",
        lastName:"Musa",
        email:"kafayatmusadoko@gmail.com",
        accountActivated : true,
        password: "kafayat1234"
    },
    "fauziyat" : {
        firstName:"fauziyat",
        lastName:"Musa",
        email:"Fauziyatmusadoko@gmail.com",
        accountActivated : false,
        password: "fauzy1234"
    },
    "khadijat": {
        firstName:"khadijat",
        lastName:"Musa",
        email:"Khadijatmusadoko@gmail.com",
        accountActivated : true,
        password: "khadi1234"
    },
    "rukayat" : {
        firstName:"rukayat",
        lastName:"Musa",
        email:"Rukayatmusadoko@gmail.com",
        accountActivated : true,
        password: "ruky1234"
    },
};

function validateUserName(username){
    if(username == null || username === ""){
        return false;
    }
    if(username.length > 10){
        return false;
    }
    return true;
}

function validatePassword(password){
    if(password == null || password === ""){
        return false;
    }
    if(password.length < 6){
        return false;
    }
    return true;
}

const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmInput = document.getElementById('confirm');
const result = document.getElementById('result');
const submitBtn = document.getElementById('submit-btn');

usernameInput.disabled = false;
passwordInput.disabled = false;
confirmInput.disabled = false;

usernameInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const username = usernameInput.value.trim().toLowerCase();
        if (!validateUserName(username)) {
            result.textContent = "Enter a valid username (max 10 characters)";
            return;
        }
        if (!userDatabase[username]) {
            result.textContent = "User not found";
            return;
        }
        usernameInput.disabled = true;
        passwordInput.style.display = '';
        passwordInput.focus();
    }
});

passwordInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const username = usernameInput.value.trim().toLowerCase();
        const password = passwordInput.value;
        if (!validatePassword(password)) {
            result.textContent = "Enter a valid password (at least 6 characters)";
            return;
        }
        if (password !== userDatabase[username].password) {
            result.textContent = "Incorrect password";
            return;
        }
        passwordInput.disabled = true;
        confirmInput.style.display = '';
        confirmInput.focus();
    }
});

confirmInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const password = passwordInput.value;
        const confirm = confirmInput.value;
        if (confirm !== password) {
            result.textContent = "Password does not match. Try again.";
            return;
        }
        confirmInput.disabled = true;
        submitBtn.style.display = '';
        submitBtn.focus();
    }
});

submitBtn.addEventListener('click', function() {
    const username = usernameInput.value.trim().toLowerCase();
    const user = userDatabase[username];
    result.textContent =
        `User found with the following details:\n` +
        `First Name: ${user.firstName}\n` +
        `Last Name: ${user.lastName}\n` +
        `Email: ${user.email}\n` +
        `Account Activated: ${user.accountActivated}\n` +
        `Password: ${user.password}\n\nYou have come to the end of the program.`;
});