


const products = [
    {id: 1, name: "Laptop", price: 1200000, category: "Electronics"},
    {id: 2, name: "Phone", price: 800000, category: "Electronics"},
    {id: 3, name: "Shoes", price: 100000, category: "Fashion"},
    {id: 4, name: "Wall fan", price: 95000, category: "Electronis"},
    {id: 5, name: "T.vs", price: 1500000, category: "Electronics"},
    {id: 6, name: "smart watch", price: 670000, category: "Electronis"},
    {id: 7, name: "Recipe for Disaster", price: 50000, category: "Book"},
    {id: 8, name: "Necklace", price: 30000, category: "Fashion"}

];

function displayProducts(items) {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = ''; //clear the current display
    
    items.forEach(product => {
        //create a new 'div' for each product 
        const card = document.createElement('div');
        card.className = 'product-card';

        // fill the card with details 
        card.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: Ugx${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        //put the card inside our container 
        productContainer.appendChild(card);
    });
}



function addToCart(productId) {
    try {
        const item = products.find(p => p.id === productId);
        cart.push({ ...item, quantity: 1}); // add item with a starting quantity

        // save to local storage so it stays after refresh 
        localStorage.setItem('myCart', JSON.stringify(cart));

       // updateCartCounter();

        
        alert(`${item.name} added to cart!`);

        window.location.href = 'cart.html';
    } catch (error) {
        console.error("Error adding to cart:", error);
        alert("couldn't add item to cart");
    }
}

//save the item when press 'Add to Cart'

let cart = JSON.parse(localStorage.getItem('myCart')) || []; 

 function updateCartCounter() {
    //updates the number shown next to cart in the header
    const counter = document.getElementById('cart-count');
    counter.innerText = cart.length;
 }

 // searching and filtering, for users to find products (from products array based on there type )
 // search function
 const searchInput = document.querySelector('#searchBar');
 searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(term));
    displayProducts(filtered);
 });

 displayProducts(products);

 