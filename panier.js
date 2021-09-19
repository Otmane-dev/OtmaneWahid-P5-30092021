
//------------------------déclaration de la variable ------------------------
productsListe = JSON.parse(localStorage.getItem("panier")) ;
console.log(productsListe);


//------------------affichage produit du panier-------------------------------
let panier = document.querySelector("#main-panier");
console.log(panier);


//---------------- si le panier est vide affiché panier vide---
if(productsListe === null){
let panierVide = `
<div class="container-panier-vide>
    <div>le panier est vide</div>
</div>`;
panier.innerHTML = panierVide;
}else{
    structureProduitPanier = [];

    for(i = 0; i < productsListe.lenght; i++){
        structureProduitPanier = structureProduitPanier + `
        <div class="container-produit">
            <div class="panier-produit">
                <div>Quantité 1 - ${productsListe[i].name} Produit ${productsListe[i]._id}</div>
                <div>${productsListe[i].price}€ - supprimée article</div>
            </div>
        </div>`;
    }
        if(i == productsListe.lenght){ 
        //--injection html dans panier
        panier.innerHTML = structureProduitPanier;
    }
}