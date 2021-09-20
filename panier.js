
//------------------------déclaration de la variable ------------------------
productsListe = JSON.parse(localStorage.getItem("panier")) ;
console.log(productsListe);
console.log("test");


//------------------affichage produit du panier-------------------------------
let panier = document.querySelector(".container-produit");
console.log(panier);


//---------------- si le panier est vide affiché panier vide---
if(productsListe === null || productsListe.length == 0){
let panierVide = `
<div class="container-panier-vide>
    <div>le panier est vide</div>
</div>`;
panier.innerHTML = panierVide;
}else{
    structureProduitPanier = ``;

    for(i = 0; i < productsListe.length; i++){
        panier.innerHTML = panier.innerHTML + `
        
            <div class="panier-produit">
                <div>${productsListe[i].quantite}</div>
                <div>${productsListe[i].name}</div>
                <div>${productsListe[i].price}€ </div>
                <div><button class="btn-supprimer">supprimer</button></div>
            </div>`;
    }
    

        //if(i == productsListe.length){ 
        //--injection html dans panier
        //panier.innerHTML = structureProduitPanier;
    //}
}



//------- btn supprimé----

let btn_supprimer = document.querySelectorAll(".btn-supprimer");
console.log(btn_supprimer);

for (let j = 0 ; j < btn_supprimer.length; j++){
    btn_supprimer[j].addEventListener("click" , (event) =>{
        event.preventDefault();

        let id_selectionner_suppression =  productsListe[j]._id;


        productsListe = productsListe.filter( el => el._id !==id_selectionner_suppression);
        
        
        localStorage.setItem("panier",JSON.stringify(productsListe));

        alert("Ce produit à été supprimer du panier");
        window.location.href = "panier.html";
    })
}
