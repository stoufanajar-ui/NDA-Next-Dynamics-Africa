// NDA - Next Dynamics Africa
// Script d'interactivité premium

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    
    // Effet au défilement (Scroll)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    console.log("Next Dynamics Africa - Site Ultras Professionnel chargé avec succès.");
});
// --- Gestion de la Pop-up Devis ---
const modal = document.getElementById("devis-modal");
const devisBtn = document.getElementById("devis-btn");
const closeBtn = document.querySelector(".close-modal");

// Ouvrir la pop-up au clic sur le bouton jaune
devisBtn.addEventListener("click", function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    modal.style.display = "flex";
});

// Fermer la pop-up au clic sur la croix (X)
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Fermer la pop-up si l'utilisateur clique en dehors de la fenêtre blanche
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// --- Envoi du formulaire de Devis via EmailJS ---
document.getElementById('devis-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const submitBtn = this.querySelector('.btn-submit-modal');
    submitBtn.innerText = 'Envoi en cours...';
    submitBtn.disabled = true;

    // Utilise vos identifiants EmailJS configurés précédemment
    emailjs.sendForm('VOTRE_SERVICE_ID', 'VOTRE_TEMPLATE_ID', this)
        .then(function() {
            alert('Votre demande de devis a bien été transmise ! Notre équipe vous contactera très vite.');
            modal.style.display = "none"; // Ferme la pop-up automatiquement
            document.getElementById('devis-form').reset();
            submitBtn.innerText = 'Envoyer ma demande de devis';
            submitBtn.disabled = false;
        }, function(error) {
            alert("Erreur lors de l'envoi, veuillez réessayer.");
            submitBtn.innerText = 'Envoyer ma demande de devis';
            submitBtn.disabled = false;
        });
});
