

document.querySelector('.switch')
    .addEventListener('mouseup', function() {
        let text = document.querySelector('.fl-h3');
        document.body.classList.toggle('light-theme')
        if (document.body.classList.contains('light-theme')){
            text.textContent = "Light Mode";
        } else {
            text.textContent = "Dark Mode";
        };
});