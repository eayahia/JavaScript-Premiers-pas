const bibliotheque = [
     { code:12,titre: "Clean Code", auteur: "Robert C. Martin", annee: 2008,checkbox: true, prix: 150 },

  {code:45, titre: "Eloquent JavaScript", auteur: "Marijn Haverbeke", annee: 2018, checkbox: true, prix: 200 },
];
document.getElementById("ajouter").addEventListener("click",function(){
    window.open("ajouter.html");
});



function afficher(filtres = bibliotheque) {

    let listes = document.getElementById("listeslivres");
    listes.innerHTML="";

    filtres.forEach(livre=>{
    let carte = document.createElement("div");
    carte.classList.add("carte")
    listes.appendChild(carte);
    carte.innerHTML =
     `<h1>LE LIVRE </h1>
<p> Le Nom de livre : ${livre.titre}</p>
<p> Le Nom de l'auteur : ${livre.auteur}</p>
<p> L'annee de sortie de livre : ${livre.annee}</p>
<p> Le prix de livre : ${livre.prix}</p>
<p> Status : ${livre.checkbox?"disponible":"pas disponible"}</p>`;

let btn = document.createElement("button");
btn.classList.add("btn")
btn.textContent="Supprimer";
carte.appendChild(btn);
btn.addEventListener("click", function() {
    supprimer(livre.code);

    
});
    })

    statistic()
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

let search = document.getElementById("search");

search.addEventListener("input", function() {
    let text = search.value.toLowerCase();

    // Filtrer les livres selon le texte tapé
    let filtres = bibliotheque.filter(livre =>
        livre.titre.toLowerCase().includes(text)
        
    );
afficher(filtres);
});


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
afficher(bibliotheque); 
}




 afficher();


