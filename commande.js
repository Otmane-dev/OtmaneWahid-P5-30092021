orderId = localStorage.getItem("orderId") ;
prixTotal = localStorage.getItem("prixTotal") ;

let commande = document.querySelector("#commande");

commande.innerHTML = "Numero de la commande: "+orderId+" prix total: "+prixTotal+"€";

console.log(orderId);