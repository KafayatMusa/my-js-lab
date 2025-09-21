// variables
let openBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');
let overlay = document.getElementById('modal-overlay');
let newsletterForm = document.querySelector('.newsletter-form');


//event listeners
openBtn.addEventListener('click', function(){
    modalContainer.style.display = 'block';
    overlay.style.display = 'block';
    setTimeout(function() {
        modalContainer.classList.add('active');
        overlay.style.opacity = '1';
    }, 10);
})
closeBtn.addEventListener('click', function(){
    modalContainer.classList.remove('active');
    overlay.style.opacity = '0';
    setTimeout(function() {
        modalContainer.style.display = 'none';
        overlay.style.display = 'none';
    }, 300);
});

// Close modal if overlay is clicked
overlay.addEventListener('click', function(){
    closeBtn.click();
});

// Prevent form reload and show a thank you message
newsletterForm.addEventListener('submit', function(e){
    e.preventDefault();
    newsletterForm.innerHTML = '<p style="color:#2575fc;font-weight:bold;">Thank you for subscribing!</p>';
});