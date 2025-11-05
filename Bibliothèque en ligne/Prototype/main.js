const bibliotheque = [];
document.getElementById("ajouter").addEventListener("click",function(){
    window.open("ajouter.html");
});
function afficher() {

    let listes = document.getElementById("listeslivres");
    listes.innerHTML="";

    bibliotheque.forEach(livre=>{
    let carte = document.createElement("div");
    listes.appendChild(carte);
    carte.innerHTML =
     `<h1>LE LIVRE </h1>
<p> Le Nom de livre ${livre.titre}</p>
<p> Le Nom de l'auteur ${livre.auteur}</p>
<p> L'annee de sortie de livre ${livre.annee}</p>
<p> Le prix de livre ${livre.prix}
<p> Status : ${livre.checkbox?"disponible":"pas disponible"}`;

let btn = document.createElement("button");
btn.textContent="Supprimer";
carte.appendChild(btn);
btn.addEventListener("click", function() {
    supprimer(livre.code);

    
});
    })

    statistic();
}
//creation de function supprimer
 function supprimer(code) {
    for (let i = 0; i < bibliotheque.length; i++) {
        if (bibliotheque[i].code===code) {

            bibliotheque.splice(i,1);
            break ;
        }
        
    }
afficher();
    
 }
function statistic() {
    let checkbox = 0;
    
    bibliotheque.forEach(livre => {
        if (livre.checkbox) {
            checkbox++;
        }
    });

    document.getElementById("statistic").innerText = 
        `Disponibles : ${checkbox} , Total : ${bibliotheque.length}`;

      
}
   

function ajouter(livre) {
   bibliotheque.push(livre);
afficher(); 
}



 afficher();