const baseUrl = "https://www.kimbinhvo.one/wp-json/wc/store/products?per_page=5";
const productContainer = document.querySelector(".featured")

async function getProducts(url){
    const response = await fetch(url);
    const products = await response.json();
    console.log(products);
    products.forEach(function(product){
        productContainer.innerHTML += `<div class="products">
                                            <img src="${product.images[0].src}">
                                            <h3> ${product.name} <h4>
                                            <p> $${product.prices.price} <p>
                                            <a class="cta-product" href="product.html?id=${product.id}">View</a>
                                        </div>`; 
    })
}

getProducts(baseUrl);


        posts.forEach(function(post){
            i++;
                postContainer.innerHTML += `<div class="products-restaurants"> 
                <img src="${post._embedded['wp:featuredmedia']['0'].source_url}">        
                <h3> ${post.title.rendered} </h3>
                <p> ${post.excerpt.rendered} </p>
                <a class="cta-product-restaurants" href="specific.html?id=${post.id}">Read More</a>
            </div>`; 
        })