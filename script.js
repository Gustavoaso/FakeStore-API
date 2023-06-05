document.addEventListener('DOMContentLoaded', function () {


    let products = document.querySelector('.products');
    let product = document.getElementsByClassName('.product-title')

    info = []



    async function fetchProducts(url) {
        let data = await fetch(url);
        let response = await data.json();

        for (let i = 0; i <= 9; i++) {

            info[i] = [response[i].title]

            html = `<div class="product" id="${response[i].title}">
                <ul>
                    <li> <img src="${response[i].image}" alt="" class="product-img" width="100" height="100" >  </li>
                    <li> <h2 id="product-title" data-id="${response[i].id}" onclick="showProductDetails(event)">${response[i].title}</h2> </li>
                    <li>  <p class="product-rating">Avaliação: ${response[i].rating.rate}</p></li>
                    <li> <p class="product-price">R$: ${response[i].price}</p></li>
                </ul>
                </div>`;


            products.innerHTML += html;

        }
    }

    fetchProducts("https://fakestoreapi.com/products");

})


let button = document.getElementById("button-search")

const searchInput = document.querySelector(".input")



searchInput.addEventListener("input", (e) => {

    button.addEventListener("click", (event) => {

        event.preventDefault()

        const value = e.target.value;



        info.forEach(element => {

            let div = document.getElementById(element)


            if (element.toString().toLowerCase().includes(value.toLowerCase())) {


                div.style.display = ''

            }

            else {

                div.style.display = 'none'

            }

        });


    })


});




function showProductDetails(event) {
    const productId = event.target.getAttribute('data-id');
    // Redireciona para a página detalhes.html com o ID do produto na query string
    window.open(`detalhes.html?id=${productId}`);

    let htmlfunc = ''
    let recents = document.querySelector('.recently')

    

    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then((res) => res.json())
        .then(function (dataObject) {

            let img = document.querySelectorAll('.recently-img')
            console.log(dataObject) 
            htmlfunc = `<img src="${dataObject.image}" alt="" class="recently-img" width="160" height="150" > 
             <h2 data-id="${dataObject.id}" onclick="showProductDetails(event)"> ${dataObject.title}</h2>
            `

            recents.innerHTML += htmlfunc


            if (img.length > 2) {
                recents.innerHTML = ''
                recents.innerHTML += htmlfunc
            }




        })




}
