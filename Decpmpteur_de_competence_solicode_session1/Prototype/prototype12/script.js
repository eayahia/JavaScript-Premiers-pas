let x = ["y1", "y1", "y7","y2","y8","y5","y7"];
let code = "y7";
let compteur = 0;
for (let i = 0; i < x.length; i++) {
if (code === x[i]) {
    compteur++
}
}console.log(code + ":   " + compteur);