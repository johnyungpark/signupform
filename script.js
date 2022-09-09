const pw = document.querySelector('#password');
const pw2 = document.querySelector('#password2');
const invalpw = document.querySelector('div.invalpw');

pw2.addEventListener("input", function (e) {
    if (pw2.value !== pw.value) {
        invalpw.textContent = 'Passwords do not match';
    } else {
        invalpw.textContent = '';
    }
})
