const bibliotheque = [];

let ordreTri = 'asc'; 

document.getElementById("ajouter").addEventListener(("click"), function() {
    window.open("a.html");
});


function reserverLivre(code) {
    const livre = bibliotheque.find(livre => livre.code === code);
    if (livre && livre.checkbox && !livre.reserved) {
        livre.reserved = true; 
        livre.checkbox = false; 
        alert(`Le livre "${livre.titre}" a été réservé avec succès.`);
    } else {
        alert("Ce livre n'est pas disponible pour la réservation (déjà réservé ou non disponible).");
    }
    afficher(); 
}


function afficherLivreLePlusCher() {
    if (bibliotheque.length === 0) {
        document.getElementById("plusCher").innerText = "La bibliothèque est vide.";
        return;
    }

    const livreLePlusCher = bibliotheque.reduce((maxLivre, livreActuel) => {
        const prixMax = parseFloat(maxLivre.prix);
        const prixActuel = parseFloat(livreActuel.prix);

        return prixActuel > prixMax ? livreActuel : maxLivre;
    }, bibliotheque[0]);

    
    const displayElement = document.getElementById("plusCher");
    if (displayElement) {
        displayElement.innerHTML = 
            `Le livre le plus cher est : ${livreLePlusCher.titre} (Prix: ${livreLePlusCher.prix} DH)`;
    }
}

function trierLivres() {
    bibliotheque.sort((a, b) => {
        const titreA = a.titre.toUpperCase();
        const titreB = b.titre.toUpperCase();

        if (ordreTri === 'asc') {
            if (titreA < titreB) return -1;
            if (titreA > titreB) return 1;
        } else { 
            if (titreA > titreB) return -1;
            if (titreA < titreB) return 1;
        }
        return 0;
    });

   
    ordreTri = ordreTri === 'asc' ? 'desc' : 'asc';
    
   
    const trierBtn = document.getElementById("trier");
    if (trierBtn) {
        trierBtn.textContent = `Trier par Titre (${ordreTri === 'asc' ? 'Croissant' : 'Décroissant'})`;
    }

    afficher(); 
}

const trierBtn = document.getElementById("trier");
if (trierBtn) {
    trierBtn.addEventListener("click", trierLivres);
}

function afficher(filtres = bibliotheque) {
    let listes = document.getElementById("listeslivres");
    listes.innerHTML = "";

    filtres.forEach(livre => {
        let carte = document.createElement("div");
        carte.classList.add("carte");
        listes.appendChild(carte);

        
        let statut;
        let showReserveBtn = false;

        if (livre.reserved) {
            statut = `<span style="color: red; font-weight: bold;">Réservé</span>`;
        } else if (livre.checkbox) {
            statut = `<span style="color: green;">Disponible</span>`;
            showReserveBtn = true; 
        } else {
            statut = "Pas disponible";
        }

        carte.innerHTML =
            `<h1>LE LIVRE </h1>
<p> Le Nom de livre : ${livre.titre}</p>
<p> Le Nom de l'auteur : ${livre.auteur}</p>
<p> L'annee de sortie de livre : ${livre.annee}</p>
<p> Le prix de livre : ${livre.prix} DH</p>
<p> Status : ${statut}</p>`;

  
        if (showReserveBtn) {
            let reservedBtn = document.createElement("button");
            reservedBtn.classList.add("resv");
            reservedBtn.textContent = "Réserver";
            carte.appendChild(reservedBtn);

            reservedBtn.addEventListener(("click"), function() {
                reserverLivre(livre.code);
            });
        }

        // Bouton Supprimer
        let supprimerbtn = document.createElement("button");
        supprimerbtn.classList.add("btn-sup");
        supprimerbtn.textContent = "supprimer";
        carte.appendChild(supprimerbtn);

        supprimerbtn.addEventListener("click", function() {
            supprimer(livre.code);
        });
    });

    statistic();
    afficherLivreLePlusCher(); 
}



function supprimer(code) {
    for (let i = 0; i < bibliotheque.length; i++) {
        if (bibliotheque[i].code === code) {
            bibliotheque.splice(i, 1);
            break;
        }
    }
    afficher();
}

function ajouter(livre) {
    bibliotheque.push(livre);
    afficher(bibliotheque);
};


let search = document.getElementById("search");
if (search) {
    search.addEventListener("input", function() {
        let text = search.value.toLowerCase();

    
        let filtres = bibliotheque.filter(livre =>
            livre.titre.toLowerCase().includes(text)
        );
        afficher(filtres);
    });
}

function statistic() {
    let checkbox = 0;

    bibliotheque.forEach(livre => {
        if (livre.checkbox && !livre.reserved) { 
            checkbox ++ ;
        }
        
    });

    const statElement = document.getElementById("statistic");
    if (statElement) {
        statElement.innerText =
            `Disponibles : ${checkbox} , Total : ${bibliotheque.length}`;
    }
}


afficher();