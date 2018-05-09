var formElt = document.getElementById("formRetro");
var buttonAjouter = document.getElementById("ajouter");
var buttonFini = document.getElementById("fini");
var liste = document.getElementById("list");


//Ajouter un élément à sa rétro
function ajoutElt() {
    //ajout élément
    var nouvelElt = document.createElement("li");
    nouvelElt.textContent = formElt.value;
    nouvelElt.className = "element_retro";
    liste.appendChild(nouvelElt);
    $(".element_retro").fadeIn(2000);
    formElt.value = "";
};

function dernierElt() {
    //ajout dernier élément
    var dernierElt = document.createElement("li");
    dernierElt.textContent = formElt.value;
    dernierElt.className = "element_retro";
    liste.appendChild(dernierElt);
    $(".element_retro").fadeIn(2000);  
    //chamngement texte d'intro
    document.getElementById("precap").textContent = "Voilà donc ce que vous avez fait cette année :"
    //suppression formulaire
    $("#form").fadeOut(2000);
    document.getElementById("form").style.display = "none";
    //apparition message de bonne année
    document.getElementById("message_final").style.display = "block";
    $("#message_final").fadeIn(2000);
};


buttonAjouter.addEventListener("click", ajoutElt);
buttonFini.addEventListener("click", dernierElt);

function clavier(e) {   
    var code = e.keyCode;
    if (code === 13) {
        ajoutElt();
    }
}

formElt.addEventListener("keydown", clavier);