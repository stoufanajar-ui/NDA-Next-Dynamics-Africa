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
// --- Envoi du formulaire de Devis via Formspree ---
const devisForm = document.getElementById('devis-form');
if (devisForm) {
    devisForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const submitBtn = this.querySelector('.btn-submit-modal');
        if (submitBtn) {
            submitBtn.innerText = 'Envoi en cours...';
            submitBtn.disabled = true;
        }

        const formData = new FormData(this);

        fetch('https://formspree.io/f/xpqvaajr', {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
        .then(response => {
            if (response.ok) {
                alert('Votre demande de devis a bien été transmise !');
                modal.style.display = "none"; // Ferme la pop-up automatiquement
                devisForm.reset();
            } else {
                alert("Erreur lors de l'envoi, veuillez réessayer.");
            }
        })
        .catch(error => {
            alert("Erreur réseau, veuillez réessayer.");
        })
        .finally(() => {
            if (submitBtn) {
                submitBtn.innerText = 'Envoyer ma demande de devis';
                submitBtn.disabled = false;
            }
        });
    });
}
// Fonction pour changer la langue via le sélecteur personnalisé
function changeLanguage(langCode) {
    const googleSelect = document.querySelector('.goog-te-combo');
    if (googleSelect) {
        googleSelect.value = langCode;
        // Déclenche l'événement pour faire comprendre à Google qu'on a changé la langue
        googleSelect.dispatchEvent(new Event('change'));
        
        // Optionnel : change le texte du bouton principal du sélecteur
        const langBtn = document.querySelector('.lang-btn');
        if (langBtn) {
            langBtn.innerHTML = langCode.toUpperCase() + ' <i class="fa-solid fa-chevron-down"></i>';
        }
    } else {
        console.error("Le widget Google Translate n'est pas encore chargé.");
    }
}
