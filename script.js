document.addEventListener('DOMContentLoaded', function () {


    let products = document.querySelector('.products');
let product = document.getElementsByClassName('.product-title')
    const searchInput = document.querySelector(".input")
    let info = []

    let button = document.getElementById("button-search")
  


    
    searchInput.addEventListener("input", (e) =>{


            button.addEventListener("click" , (event)=>{ 
                event.preventDefault();

            const value = e.target.value
            console.log(value)

            for(let j = 0; j < 1; j++){
            for(let i = 0; i < info.length; i++){

                 if(product.innerHTML.includes(value))
                  console.log (product)
                };

                
                   
            } 
        })
     })

     async function fetchProducts(url) {
        let data = await fetch(url);
        let response =  await data.json();
     
        for (let i = 0; i <= 9; i++) {
          
            info[i]= [response[i].title]
           
            html = `<div class="product">
                <img src="${response[i].image}" alt="" class="product-img" width="100" height="100" >
                <h2 id="product-title" data-id="${response[i].id}" onclick="showProductDetails(event)">${response[i].title}</h2>
                <p class="product-rating">Avaliação: ${response[i].rating.rate}</p>
                <p class="product-price">R$: ${response[i].price}</p>
            </div>`;

            
            products.innerHTML += html;
        }
    }
    console.log(info)
    fetchProducts("https://fakestoreapi.com/products");
    
    
    
});

function showProductDetails(event) {
    const productId = event.target.getAttribute('data-id');
    // Redireciona para a página detalhes.html com o ID do produto na query string
    window.open(`detalhes.html?id=${productId}`);

    let htmlfunc = ''
    let recents = document.querySelector('.recently')
    
    fetch(`https://fakestoreapi.com/products/${productId}`)
    .then((res) => res.json())
    .then(function(dataObject){
       
        let img = document.querySelectorAll('.recently-img')
        console.log(dataObject)
        htmlfunc = `<img src="${dataObject.image}" alt="" class="recently-img" width="180" height="150" > 
        <p> ${dataObject.title}</p>
        `
        
        recents.innerHTML += htmlfunc
        
        
        
        if(img.length > 2){
            recents.innerHTML = ''
            recents.innerHTML += htmlfunc
        }
       
       
        

    })

    

    
}
