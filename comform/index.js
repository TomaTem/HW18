let prev = "";
if (localStorage.getItem(`comments`) != null) {
    prev = localStorage.getItem(`comments`)
}
document.addEventListener("DOMContentLoaded", function (event) {
    let name = localStorage.getItem('name');
    if (name != null) {
        document.querySelector('#author').value = name;
    }
    if (prev != null) {
        document.querySelector('.prev').innerHTML = prev;
    }
}
);

let comments = [];

function send() {
    let author = document.querySelector('#author').value;
    let newcom = document.querySelector('#newcom').value;
    document.querySelector('#newcom').value = null;
    
    if (localStorage.getItem('name') == null || localStorage.getItem('name') != author) {
        localStorage.setItem('name', author);
    }        
    let c = newcom.replace(/viagra|XXX|ххх/ig, "***");
    let ac = new Object();
    ac.author = author;
    ac.comment = c;
    comments.push(ac);
    console.log(comments);
    
    let optionsString = "";
    for (let i=0; i<comments.length; i++) {
        optionsString += `<div class="com">${comments[i].author}: ${comments[i].comment}</div>`;
        a=comments.length+i;
    }
    localStorage.setItem(`comments`, prev+optionsString);
    document.querySelector('.storage').innerHTML = optionsString;
}

