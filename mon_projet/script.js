document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger-menu');
    const navLinks = document.getElementById('liste');
    burger.addEventListener('click', function() {
        navLinks.classList.toggle('nav-active');
    });

    const commentInput = document.getElementById('comment');
    const errorMessage = document.getElementById('error-message');
    const regex = /^[A-Za-zÀ-ÿ0-9 .,!?'"()-]{3,}$/;
    const form = document.getElementById('comment-form'); 

    commentInput.addEventListener('input', () => {
        const value = commentInput.value.trim();
        if (regex.test(value)) {
            commentInput.classList.remove('invalid');
            commentInput.classList.add('valid');
            errorMessage.classList.remove('visible');
        } else {
            commentInput.classList.remove('valid');
            commentInput.classList.add('invalid');
            errorMessage.classList.add('visible');
        }
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (regex.test(commentInput.value.trim())) {
            emailjs.send("Stinekopi30@gmail.com", "TON_TEMPLATE_ID", {
                message: commentInput.value
            })
            .then(function() {
                alert("Commentaire envoyé !");
                commentInput.value = "";
            }, function(error) {
                alert("Erreur lors de l'envoi : " + error.text);
            });
        } else {
            errorMessage.classList.add('visible');
        }
    });
});