let titre = document.getElementById("titre");
let image = document.querySelector("img");
let bouton = document.querySelector(".btn");

bouton.addEventListener("click", function() { 
  titre.innerText  = "Titre modifié !";
  titre.classList.toggle("highlight");
   
  image.setAttribute("src", "assets/jeune-bel-homme-isole-dans-poses-differentes-fond-blanc-illustration_632498-859.jpg");
  image.setAttribute("alt", "Nouvelle image");
}); 