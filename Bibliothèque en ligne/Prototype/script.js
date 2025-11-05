let form = document.querySelector("form");
form.addEventListener(("submit"),function(E){
    E.preventDefault()
let code = document.getElementById("code").value;
let titre = document.getElementById("titre").value;
let auteur = document.getElementById("auteur").value;
let annee = document.getElementById("annee").value;
let prix = document.getElementById("prix").value;
let checkbox = document.getElementById("disponible").checked;

let livre={
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