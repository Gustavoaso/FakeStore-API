document.addEventListener('DOMContentLoaded', function () {
    // Obter o ID do produto da query string
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Elementos HTML para exibir os detalhes do produto
    const productPage = document.querySelector('.page-product');
    
    async function fetchProductDetails(url) {
        let data = await fetch(url);
        let response = await data.json();

        // Exibir os detalhes do produto
            let html = 
            `
            <img src="${response.image}" alt="" width="200" height="200"> 
            <h2 class="datail-title"> ${response.title} </h2>
            <p class="detail.description"> ${response.description}</p>
            
            ` 
            productPage.innerHTML = html
    }

    // Construir a URL da API com o ID do produto
    const apiUrl = `https://fakestoreapi.com/products/${productId}`;

    fetchProductDetails(apiUrl);
});