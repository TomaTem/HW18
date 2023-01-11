document.querySelector('#sub').addEventListener("click", subnames);
document.querySelector('#sub').addEventListener("click", subemail);
document.querySelector('#sub').addEventListener("click", subpsw);
document.querySelector('#sub').addEventListener("click", reg);

function checkemail() {
    let email = document.querySelector('#email').value;
    let length = document.querySelector('#email').value.length;
    let p = document.querySelector('#emailtext');
    
    if (/^[a-zA-Z1-9]+$/.test(email) === false) {
        p.innerHTML = 'Имя пользователя может включать латинские буквы (a-z) и цифры (0-9)';
        p.classList.add("errortext");
        document.querySelector("#email").style.border="2px solid #da2c20";
    } else if (length < 6 || length > 30) {
        p.innerHTML = 'Имя пользователя должно содержать от 6 до 30 символов.';
    } else {p.innerHTML = 'Вы можете использовать данный логин!';
    p.classList.remove("errortext");
    p.style.color = '#1374e9';
    document.querySelector("#email").style.border="solid 1px #b1b1b1c8";}
}

function checkpsw() {
    let length = document.querySelector('#psw').value.length;
    let p = document.querySelector('#pswtext');
    
    if (length < 8) {
        p.innerHTML = 'Пароль не может быть короче 8 символов';
        p.classList.add("errortext");
        document.querySelector("#psw").style.border="2px solid #da2c20";
    } else {p.innerHTML = 'Пароль должен содержать не менее восьми знаков, включать буквы, цифры и специальные символы';
    p.classList.remove("errortext");
    document.querySelector("#psw").style.border="solid 1px #b1b1b1c8";}
}

function checkpswrep() {
    let psw = document.querySelector('#psw').value;
    let pswrep = document.querySelector('#psw-repeat').value;
    let p = document.querySelector('#pswtext');
    
    if (psw === pswrep) {
        p.innerHTML = 'Пароли совпадают'
        p.classList.remove("errortext");
        document.querySelector("#psw-repeat").style.border="solid 1px #b1b1b1c8";
    }
    else {
        p.innerHTML = 'Пароли не совпадают. Повторите попытку.';
        p.classList.add("errortext");
        document.querySelector("#psw-repeat").style.border="2px solid #da2c20";
    }
}

function subnames() {
    let name1 = document.querySelector('#name').value;
    let surname = document.querySelector('#surname').value;
    
    if (name1 == '' && surname == '') {
        document.querySelector('#nametext').innerHTML = 'Укажие имя и фамилию';
        document.querySelector("#nametext").classList.add("errortext");
        document.querySelector("#name").style.border="2px solid #da2c20";
        document.querySelector("#surname").style.border="2px solid #da2c20";
    } else if (name1 == '' && surname !== '') {
        document.querySelector('#nametext').innerHTML = 'Укажие имя';
        document.querySelector("#nametext").classList.add("errortext");
        document.querySelector("#name").style.border="2px solid #da2c20";
        document.querySelector("#surname").style.border="solid 1px #b1b1b1c8";
    } else if (name1 !== '' && surname == '') {
        document.querySelector('#nametext').innerHTML = 'Укажие фамилию';
        document.querySelector("#nametext").classList.add("errortext");
        document.querySelector("#surname").style.border="2px solid #da2c20";
        document.querySelector("#name").style.border="solid 1px #b1b1b1c8";
    } else {document.querySelector("#nametext").classList.remove("errortext");
        document.querySelector("#name").style.border="solid 1px #b1b1b1c8";
        document.querySelector("#surname").style.border="solid 1px #b1b1b1c8";
        document.querySelector('#nametext').innerHTML = '';
        }
}

function subemail() {
    let email = document.querySelector('#email').value;
    
    if (email == '') {
        document.querySelector('#emailtext').innerHTML = 'Укажие адрес Gmail';
        document.querySelector('#emailtext').classList.add("errortext");
        document.querySelector("#email").style.border="2px solid #da2c20";
    }
}

function subpsw() {
    let psw = document.querySelector('#psw').value;
    
    if (psw == '') {
        document.querySelector('#pswtext').innerHTML = 'Введите пароль';
        document.querySelector('#pswtext').classList.add("errortext");
        document.querySelector("#psw").style.border="2px solid #da2c20";
    }
}

function reg() {
    let name1 = document.querySelector('#name').value;
    let surname = document.querySelector('#surname').value;
    let email = document.querySelector('#email').value;
    let psw = document.querySelector('#psw').value;
    let pswrep = document.querySelector('#psw-repeat').value;

    if (name1 !== '' && surname !== '' && email !== '' && psw !== '' && psw === pswrep) {
        alert (`Добро пожаловать, ${name1}!`);
    }
}

