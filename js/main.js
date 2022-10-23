var elBody = document.querySelector('body');
var elButton = document.querySelector('.btns');

elButton.addEventListener('click',  function() {
    elBody.classList.toggle('dark');
}); 