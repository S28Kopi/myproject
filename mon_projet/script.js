document.addEventListener('DOMContentLoaded', function() {
     const burger = document.getElementById('burger-menu');
     const navLinks = document.getElementById('liste');
     burger.addEventListener('click', function() {
          navLinks.classList.toggle('nav-active');
     });
});

 const commentInput = document.getElementById('comment');
  const errorMessage = document.getElementById('error-message');
  const regex = /^[A-Za-zÀ-ÿ0-9 .,!?'"()-]{3,}$/; // Exemple : min. 3 caractères autorisés

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
