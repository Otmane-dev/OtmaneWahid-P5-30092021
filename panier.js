
//------------------------déclaration de la variable ------------------------
productsListe = JSON.parse(localStorage.getItem("panier"));
//console.log(productsListe);



//------------------affichage produit du panier-------------------------------
const panier = document.querySelector(".container-produit");
console.log(panier);



//---------------- si le panier est vide affiché panier vide---
if (productsListe === null || productsListe == 0) {
    const panierVide = `
<div class="container-panier-vide>
    <div>le panier est vide</div>
</div>`;
    panier.innerHTML = panierVide;
} else {
    structureProduitPanier = ``;

    for (i = 0; i < productsListe.length; i++) {
        panier.innerHTML = panier.innerHTML + `
        
            <div class="panier-produit">
                <div>${productsListe[i].quantite}</div>
                <div>${productsListe[i].name}</div>
                <div>${productsListe[i].price}€ </div>
                <div><button class="btn-supprimer" id="btn-supprime">supprimer</button></div>
            </div>`;
    }


    // if(i == productsListe.length){ 
    // --injection html dans panier
    // panier.innerHTML = structureProduitPanier;
    // }
};



//------- btn supprimé----

let btn_supprimer = document.querySelectorAll("#btn-supprime");
//console.log(btn_supprimer);

for (let j = 0; j < btn_supprimer.length; j++) {
    btn_supprimer[j].addEventListener("click", (event) => {
        event.preventDefault();

        let id_selectionner_suppression = productsListe[j]._id;


        productsListe = productsListe.filter(el => el._id !== id_selectionner_suppression);


        localStorage.setItem("panier", JSON.stringify(productsListe));

        alert("Ce produit va être supprimer du panier");
        window.location.href = "panier.html";
    })
};

//-----vider le pagner---------
const btn_vider_panier_html = `
<button class="btn-vider-panier" id="btn-vider-panier">Vider le panier</button>`;

panier.insertAdjacentHTML("beforeend", btn_vider_panier_html);

const btn_vider_panier = document.querySelector("#btn-vider-panier");
console.log("btn_vider_panier");
console.log(btn_vider_panier);

btn_vider_panier.addEventListener("click", (e) => {
    e.preventDefault;

    localStorage.removeItem("panier");

    alert("Le panier va être vider");

    window.location.href = "panier.html";

});

//------total du prix du panier---------
let prixTotalCalcul = [];

for (let m = 0; m < productsListe.length; m++) {

    let prixProduitPanier = productsListe[m].price;

    prixTotalCalcul.push(prixProduitPanier)

    //console.log(prixTotalCalcu);
};

const reducer = (accumulator, currentValue) => accumulator + currentValue;
const prixTotal = prixTotalCalcul.reduce(reducer, 0);
console.log(prixTotal);

localStorage.setItem("prixTotal", prixTotal);
const affichagePrixHtml = `
<div class="affichage-prix-html">Le prix total est de :${prixTotal}€</div>`

panier.insertAdjacentHTML("beforeend", affichagePrixHtml);


//----bloc formulaire----

const afficherFormulaireHtml = () => {

    const commande = document.querySelector("#commander");

    const structureFormulaire = `
    
    <div id="formulaireCommande">
                <h2>Remplir le formulaire pour valider votre commande</h2>
            

                <form>
                    <label for="prenom">Prénom :</label>
                    <input type="text" id="prenom" name="prenom" required>

                    <label for="nom">Nom :</label>
                    <input type="text" id="nom" name="nom" required>

                    <label for="adresse">Adresse :</label>
                    <textarea id="adresse" name="adresse" required>
                    </textarea>

                    <label for="ville">Ville :</label>
                    <input type="text" id="ville" name="ville" required>

                    <label for="codePostal">Code postal :</label>
                    <input type="text" id="codepostal" name="codePostal" required>

                    <label for="email">E-mail :</label>
                    <input type="email" id="email" name="email" required>

                    <button id="envoyerformulaire" type="submit" name="envoyerformulaire">
                        Confirmer la commande
                    </button>
                </form>
        </div>
                `;
    commande.insertAdjacentHTML("afterend", structureFormulaire);

};

afficherFormulaireHtml();

//recuperation des valeur formulaire pour le local storage 

const btnEnvoyerFormulaire = document.querySelector("#envoyerformulaire");


btnEnvoyerFormulaire.addEventListener("click", (e) => {
    e.preventDefault();

    const contact = {
        firstName: document.querySelector("#prenom").value,
        lastName: document.querySelector("#nom").value,
        address: document.querySelector("#adresse").value,
        city: document.querySelector("#ville").value,
        email: document.querySelector("#email").value,
    }
    let products = productsListe.map((product) => product._id);

    //------validation du formulaire---------
    const textAlert = (value) => {
        return `${value}:Chiffre et symbole ne sont pas autorisé \n Ne pas dépasser 20 caractères, minimum 3 caractères`;
    }

    function prenomControle() {
        const lePrenom = contact.firstName;
        if (/^[A-Za-z]{3,20}$/.test(lePrenom)) {
            console.log("ok");
            return true;
        } else {
            console.log("ko");
            alert(textAlert("Prénom"));
            return false;
        }
    };

    function nomControle() {
        const leNom = contact.lastName;
        if (/^[A-Za-z]{3,20}$/.test(leNom)) {
            console.log("ok");
            return true;
        } else {
            console.log("ko");
            alert(textAlert("Nom"));
            return false;
        }
    };

    function adresseControle() {
        const lAdresse = contact.address;
        if (/^[A-Za-z0-9\s]{3,50}$/.test(lAdresse)) {
            console.log("ok");
            return true;
        } else {
            console.log("ko");
            alert("L'adresse doit contenir que des lettres sans ponctuation et des chiffres");
            return false;
        }
    };

    function villeControle() {
        const laVille = contact.city;
        if (/^[A-Za-z]{3,20}$/.test(laVille)) {
            console.log("ok");
            return true;
        } else {
            console.log("ko");
            alert(textAlert("Ville"));
            return false;
        }
    };

    function emailControle() {
        const lEmail = contact.email;
        if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(lEmail)) {
            console.log("ok");
            return true;
        } else {
            console.log("ko");
            alert("L'email n'est pas valide");
            return false;
        }
    };


    const aEnvoyer = {
        products,
        contact
    }
    let options = {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(aEnvoyer),
    };
    //// moddiiiiifffffff lihne 196
    if (prenomControle() && nomControle() && adresseControle() && villeControle() && emailControle() ) {

        fetch('http://localhost:3000/api/cameras/order', options)
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                localStorage.setItem("orderId", data.orderId);
                // window.location.href = "commande.html";
            })
            .catch((error) => {
                console.error('Error:', error);
                return true;
            });
    } else {
        alert("veuillez bien remplir le formulaire");
        return false;
    }
    console.log("aEnvoyer");
    console.log(aEnvoyer);
})


