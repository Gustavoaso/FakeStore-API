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

})

let button = document.getElementById("button-search")
const searchInput = document.querySelector(".input")

let typingTimer;


searchInput.addEventListener("input", (e) => {

    button.addEventListener("click", (event) => {

        event.preventDefault()
   
        const value = e.target.value.toLowerCase();

        console.log(value)

       info.forEach(element => {
          


            let div = document.getElementById(element)


           if (element.toString().includes(value) || element.toString() === value) {
                console.log(element)
                div.style.backgroundColor ='green'


            }

          else {

               div.style.backgroundColor = 'red'

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
            htmlfunc = `<img src="${dataObject.image}" alt="" class="recently-img" width="180" height="150" > 
        <p> ${dataObject.title}</p>
        `

            recents.innerHTML += htmlfunc



            if (img.length > 2) {
                recents.innerHTML = ''
                recents.innerHTML += htmlfunc
            }




        })




}
