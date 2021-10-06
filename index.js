let produits = document.querySelector(".produits");
fetch('http://localhost:3000/api/cameras')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(element => {
            produits.innerHTML += `
          <a href=/produit.html?id=${element._id}>
            <figure>
                <img src=${element.imageUrl}>
                <figcaption class="name-price">
                    <div class="name" id="name">${element.name}</div>
                    <div class="price" id="price">${element.price / 100} € </div>
                </figcaption>
            </figure>
            </a>
          `;

        })
    
    });
