orderId = localStorage.getItem("orderId") ;
prixTotal = localStorage.getItem("prixTotal") ;

let commande = document.querySelector("#commande");

commande.innerHTML = "Numero de la commande: "+orderId+"<br>"+"Prix total: "+prixTotal+"€"+"<br>"+"Au plaisir de vous revoir";

console.log(orderId);

///////éffacer tout le local storage //////////////////
function viderCleLocalStorage(key){
    localStorage.removeItem(key);
};

viderCleLocalStorage("orderId");
viderCleLocalStorage("prixTotal");
viderCleLocalStorage("panier");
