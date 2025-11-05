let form = document.querySelector("form");
form.addEventListener(("submit"),function(E){
    E.preventDefault()
let code = document.getElementById("code-id").value;
let titre = document.getElementById("titre-id").value;
let auteur = document.getElementById("auteur-id").value;
let annee = document.getElementById("annee-id").value;
let prix = document.getElementById("prix-id").value;
let checkbox = document.getElementById("disponible-id").checked;

let livre ={
    code,titre,auteur,annee,prix,checkbox
}

if (window.opener && !window.opener.closed){
    window.opener.ajouter(livre);
    alert("livre ajoute");
    window.close();
}
else{
    alert("pas ajoute");
}

});
ajouter() ;