document.getElementById("my-form").addEventListener("submit", function(e) {
  var isValid = true;

  var nom = document.getElementById("nom").value;
  if (!/^[a-zA-Z\s-]{2,}$/.test(nom)) {
    alert("Le nom ne doit contenir que des lettres et des tirets, et avoir au minimum 2 caracteres.")
    isValid = false;
  }

  var prenom = document.getElementById("prenom").value;
  if (!/^[a-zA-Z\s-]{2,}$/.test(prenom)) {
    alert("Le nom ne doit contenir que des lettres et des tirets, et avoir au minimum 2 caracteres.")
    isValid = false;
  }

  var email = document.getElementById("email").value;
  if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Veuillez entrer une adresse email valide.");
    isValid = false;
  }

  var telephone = document.getElementById("telephone").value;
  if (!/^\d{10}$/.test(telephone)) {
    alert("Le numero de telephone doit contenir exactement 10 chiffres")
    isValid = false;
  }

  if (!isValid) e.preventDefault()
})