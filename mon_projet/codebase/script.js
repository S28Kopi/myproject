document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger-menu');
    const navLinks = document.getElementById('liste');
    burger.addEventListener('click', function() {
        navLinks.classList.toggle('nav-active');
    });

    const commentInput = document.getElementById('comment');
    const errorMessage = document.getElementById('error-message');
    const regex = /^[A-Za-zÀ-ÿ0-9 .,!?'"()-]{3,}$/;
    const form = document.getElementById('commentForm'); 

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

function sendComment(templateParams) {
    emailjs.send("snk_28user", "template_co3398m", templateParams)
        .then(function(response) {
            alert("Commentaire envoyé avec succès 🎉");
            document.getElementById("commentForm").reset();
        }, function(error) {
            alert("Erreur lors de l'envoi 😢 " + error.text);
        });
}

document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Determine page context for template parameters
    let citation_title = "Default Title";
    let page_info = "Default Page Info";

    // Example: Use body data attributes or other logic to set context
    if (document.body.dataset.page === "paix") {
        citation_title = "Citation de Mouammar Kadhafi";
        page_info = "Page sur la paix - BIAKWELI";
    } else if (document.body.dataset.page === "education") {
        citation_title = "Éducation";
        page_info = "Page sur l'éducation - BIAKWELI";
    } else if (document.body.dataset.page === "enigme") {
        citation_title = "Énigme amusante";
        page_info = "Page sur les énigmes - BIAKWELI";
    } else if (document.body.dataset.page === "enigme-suite") {
        citation_title = "Énigme amusante - Suite";
        page_info = "Page sur les énigmes - BIAKWELI";
    } else if (document.body.dataset.page === "enigme-simple") {
        citation_title = "Énigme";
        page_info = "Page sur les énigmes - BIAKWELI";
    }

    const templateParams = {
        comment: document.getElementById("comment").value,
        citation_title: citation_title,
        page_info: page_info,
    };

    sendComment(templateParams);
});

}); // <-- Add this closing brace for DOMContentLoaded
