const productInfo = document.querySelector(".shopping-cart-product-info"); 
const productInfo2 = document.querySelector(".shopping-cart-total-right"); 

const queryString = document.location.search;
console.log(queryString);
const params = new URLSearchParams(queryString);

const id = params.get("id");
console.log(id);

const url = "https://www.kimbinhvo.one/wp-json/wc/store/products/" + id;

async function fetchJackets() {
    try {
        const response = await fetch(url);
        const product = await response.json();
        console.log(product);


        productInfo.innerHTML += `  <p>   Name: ${product.name}<p>
                                    <p>   Price: $${product.prices.price}<p>
                                    <p>   Type: ${product.type}<p>
                                        </div>`; 
                                        
         productInfo2.innerHTML += `    <p>   ${product.prices.price}<p>
                                        <p>   Free <p>
                                        <p class="bold">${product.prices.price} $USD</p>
                                        </div>`; 

        

    } catch(error) {
        console.log(error);
    }
}

fetchJackets();
