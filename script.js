
// const dark = document.querySelector('.switch');

// dark.onclick = function (){
//     document.body.classList.toggle('light-theme')
// }

document.querySelector('.switch')
    .addEventListener('mouseup', function() {
        document.body.classList.toggle('light-theme')
    });