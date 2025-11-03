const bibliotheque = [];
document.getElementById("ajouter").addEventListener("click",function(){
    window.open("ajouter.html");
})
function afficher() {

    let listes = document.getElementById("listeslivres");
    listes.innerHTML="";

    bibliotheque.forEach(livre=>{
    let carte = document.createElement("div");
    listes.appendChild(carte);
    carte.innerHTML = `<h3>LE LIVRE </h3>
<p> Le Nom de livre ${livre.titre}</p>
<p> Le Nom de l'auteur ${livre.auteur}</p>
<p> L'annee de sortie de livre ${livre.annee}</p>
<p> Le prix de livre ${livre.prix}
<p> Status : ${livre.checkbox?"disponible":"pas disponible"}`;

    })

    
}
function ajouter(livre) {
   bibliotheque.push(livre);
afficher(); 
}