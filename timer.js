function Timer(duree) {
    var self = this; //crée la variable qui contient l'objet pour que le this corresponde à l'objet
    var _duree = duree; //stocke la durée du timer
    var elementSec = document.getElementById("secondes");
    var timer = _duree; //variable à décrémenter
    var intervalID;
    
    self.onComplete = null;

    self.updateDisplay = function() {
        elementSec.textContent = timer % 60; //divise par 60 et le reste donne les sec
    };

    self.update = function() {
        timer--; //défile à rebours
        self.updateDisplay(); //affiche les valeurs des opérations
        var sec = elementSec.textContent;

        //arrête le compteur + info utilisateur, efface la reservation
        if(timer === 0) {
            clearInterval(intervalID);
			var decompte = document.getElementById("section_compteur");
			var bonneAnnee = document.getElementById("bonne_annee");
			var body = document.querySelector("body");
			//contenu et syle de "decompte"
			decompte.style.display = "none";
			bonneAnnee.style.display = "block";
			//changement de fond d'écran
			body.style.backgroundImage = "url('img/firework.jpg')";
			body.style.backgroundSize = "cover";
			body.style.backgroundRepeat = "no-repeat";
			
			setTimeout(function() {
				body.style.background = "#da0e0e";
				decompte.style.display = "block";
				bonneAnnee.style.display = "none";
				elementSec.textContent = "10"
			}, 7000);
        }
        
        //affiche un 0 devant les secondes de 0 à 9
        if ((sec >= 0) && (sec < 10))  {
            elementSec.textContent = "0" + timer % 60;
        }
    };

    //démarre le compteur avec un intervalle de 1sec
    self.start = function() {
        intervalID = setInterval(function() {
            self.update();
        }, 1000);
    };

    //arrête le compteur
    self.stop = function() {
        clearInterval(intervalID);
    };

    self.restartFrom = function(minutes, secondes) {
        timer = minutes * 60 + secondes; //remet le timer où il était
        self.updateDisplay();
        self.start();
    };

    //arrête, met à jour et redémarre le compteur
    self.restart0 = function() {
        timer = _duree; //remet le timer au début
        self.stop();
        self.updateDisplay();
        self.start();
    };

    self.updateDisplay();
}

var timerHny = new Timer(10);
var buttonTest = document.getElementById("button-test");

buttonTest.addEventListener("click", function(){
	timerHny.restart0();
});
