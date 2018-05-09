//definition de la date de référence
var refDate = new Date("Jan 01, 2018 00:00:00").getTime();

// met à jour le compte toutes les secondes
var x = setInterval(function() {

  // date du jour
    var now = new Date().getTime();

  // distance entre aujourd'hui et la date finale
    var distance = refDate - now;

  // calculs pour définir les jours, heures, min et secs
    var jours = Math.floor(distance / (1000 * 60 * 60 * 24));
    var heures = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var secondes = Math.floor((distance % (1000 * 60)) / 1000);

  // joue le résultats dans le DOM
    var jourElt = document.getElementById("jours");
    var heureElt = document.getElementById("heures");
    var minElt = document.getElementById("minutes");
    var secElt = document.getElementById("secondes");
    
    jourElt.textContent = jours;
    heureElt.textContent = heures;
    minElt.textContent = minutes;
    secElt.textContent = secondes;
    
    if (minutes < 10) {
        minElt.textContent = "0" + minutes;
    }
    
    if (secondes < 10) {
        secElt.textContent = "0" + secondes;
    }

  // action quand le compte à rebours est terminé 
    if (distance < 0) {
        clearInterval(x);
        var decompte = document.getElementById("section_compteur");
        var bonneAnnee = document.getElementById("bonne_annee");
        var body = document.querySelector("body");
        //contenu et syle de "decompte"
        decompte.style.display = "none";
        bonneAnnee.style.display = "block";
        //changement de fond d'écran
        body.style.backgroundImage = "url('../voeux2018/img/firework.jpg')";
        body.style.backgroundSize = "cover";
        body.style.backgroundRepeat = "no-repeat";
  }
}, 1000);

