let produit = document.querySelector(".produit");
fetch('http://localhost:3000/api/cameras/'+location.search.split('id=')[1])
  .then(response => response.json())
  .then(data => { 
      console.log(data);
     
          produit.innerHTML += `
          
            <figure>
                <img src=${data.imageUrl}>
                <figcaption class="name-price">
                    <div class="name" id="name">${data.name}</div>
                    <div class="price" id="price">${data.price /100} € </div>
                    <div class="lenses" id="lenses">${data.lenses}</div>
                    <div class="description" id="description">${data.description}</div>
                    
                        <button id="btn-envoyer" type="submit name="btn-envoyer>Ajouter au panier</button>
                    
                </figcaption>
            </figure>
           
          
          `;
ajouterAuPanier(data);
     
  });

  function ajouterAuPanier(data)
  {
    let btn_envoiPanier = document.getElementById("btn-envoyer");
 
    btn_envoiPanier.addEventListener("click", (event)=>{
        event.preventDefault();
      
        let selectProduit = {
          imageUrl:data.imageUrl,
          name: data.name,
          produit: data._id ,
          quantite: 1,
          price: data.price /100,
      }
      let productsListe = [];

      if (localStorage.getItem("panier") === null) {
        //...
        
        productsListe.push(selectProduit);
    
        localStorage.setItem("panier",JSON.stringify(productsListe));
        console.log(productsListe);

    }else{
        productsListe = JSON.parse(localStorage.getItem("panier")) ;
        productsListe.push(selectProduit);
    
        localStorage.setItem("panier",JSON.stringify(productsListe));

        console.log(productsListe);
    }
      
          
     
    });
  
  } 
 
 
