// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner tous les titres de modules
    const titresModules = document.querySelectorAll('.module h3');
    
    // Ajouter un gestionnaire d'événements pour chaque titre de module
    titresModules.forEach(titre => {
      titre.addEventListener('click', function() {
        // Basculer la classe active pour l'animation
        this.classList.toggle('active');
        // Obtenir le contenu associé au titre
        const contenu = this.nextElementSibling;
        // Basculer l'affichage du contenu
        if (contenu.style.display === 'block') {
          contenu.style.display = 'none';
        } else {
          contenu.style.display = 'block';
        }
      });
    });
  
    // Sélectionner le titre du site pour l'effet glitch
    const titreSite = document.querySelector('header h1');
    
    // Fonction pour déclencher l'effet glitch
    function declencherGlitch() {
      // Réinitialiser l'animation
      titreSite.classList.remove('glitch-active');
      // Forcer le rafraîchissement du DOM
      void titreSite.offsetWidth;
      // Ajouter la classe pour démarrer l'animation
      titreSite.classList.add('glitch-active');
      // Retirer la classe après l'animation
      setTimeout(() => {
        titreSite.classList.remove('glitch-active');
      }, 1000);
    }
    
    // Déclencher l'effet initial après 1 seconde
    setTimeout(declencherGlitch, 1000);
    
    // Déclencher l'effet aléatoirement toutes les 15 secondes
    setInterval(() => {
      if (Math.random() > 0.5) {
        declencherGlitch();
      }
    }, 15000);
    
    // Ajouter l'effet au clic sur le titre
    titreSite.addEventListener('click', declencherGlitch);
  });