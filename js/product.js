const productArray = [];
const productInfo = document.querySelector(".product-info"); 
const productMain = document.querySelector(".product-main"); 

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
                                    <a class="cta-go-to-cart" href="shoppingcart.html?id=${product.id}"> Go to check out</a> 
                                        </div>`;  

    } catch(error) {
        console.log(error);
    }
}

fetchJackets();


/* let cartArray = [];

var jacket = {
    brand:"Gant",
    name:"Jacket Brooklyn Chelsea",
    price:"500",
    color:"black",
    size:"S",
};

productArray.push(jacket);

function addJacket(){
    for(let i = 0; i < productArray.length; i++) {
        console.log(productArray[i].brand);
        productInfo.innerHTML += `  <h1>  ${productArray[i].brand}</h1>
                                    <p>   ${productArray[i].name}<p>
                                    <p class="product-price"> $${productArray[i].price}</p>
                                    <p> Color: ${productArray[i].color}<p>
                                    <a class="cta-size"> Size: ${productArray[i].size} </a>
                                    <button class="cta-add-product"> Add product to cart</button>`; 
                                            
    }
} 

addJacket(); 

const buttons = document.querySelectorAll("button");
buttons.forEach(function(button){
    button.onclick = function(event){
        for(let i = 0; i < productArray.length; i++) {

            productInfo.innerHTML += `  <div class="add-product">
                                        <p> Product added in cart</p>
                                        <p> Name: ${productArray[i].name}<p>
                                        <p> Total: ${productArray[i].price} </p>
                                        </div>`;
        }
    }
}) */



/* console.log(jacket.name);
console.log(jacket.price);
console.log(jacket.color);
console.log(jacket.size); */ 

