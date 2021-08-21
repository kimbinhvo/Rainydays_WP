const productArray = [];
const productInfo = document.querySelector(".product-info"); 
let cartArray = [];

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
})



/* console.log(jacket.name);
console.log(jacket.price);
console.log(jacket.color);
console.log(jacket.size); */ 


