let allProducts = [];

// Function to fetch products and add them to the 'allProducts' array
function fetchProducts() {
    fetch('books.json')
        .then(response => response.json())
        .then(data => {
            // Assuming 'books.json' structure is { "books": [ ... ] }
            allProducts = allProducts.concat(data.books.map(book => ({ ...book, category: 'books' })));
            
            // If you have another file for electronics, fetch it here similarly
            // fetch('electronics.json').then(...).then(electronicsData => { ... });

            // Once all products are fetched, you can enable the search functionality
            // Or display all products, depending on your application's needs
        })
        .catch(error => console.error('Error fetching books:', error));
}

// Call fetchProducts when the page loads
document.addEventListener('DOMContentLoaded', fetchProducts);

// Search form submit event listener
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const keyword = document.getElementById('search-keyword').value.toLowerCase();
    const minPrice = parseFloat(document.getElementById('price-min').value) || 0;
    const maxPrice = parseFloat(document.getElementById('price-max').value) || Infinity;

    let results = allProducts.filter(product => {
        const idMatch = product.id.toLowerCase().includes(keyword);
        const nameMatch = product.name.toLowerCase().includes(keyword);
        const priceMatch = product.price >= minPrice && product.price <= maxPrice;
        return (idMatch || nameMatch) && priceMatch;
    });

    displaySearchResults(results);
});

function displaySearchResults(results) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = ''; // Clear previous results

    // Create the table and the header row
    const table = document.createElement('table');
    table.innerHTML = `
        <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Author/Brand</th>
            <th>Type</th>
            <th>Price</th>
            <th>Action</th>
        </tr>
    `;

    // Populate the table with rows for each result
    results.forEach(product => {
        const row = table.insertRow();
        row.innerHTML = `
            <td><img src="${product.img}" alt="${product.name}" style="width: 50px; height: auto;"></td>
            <td>${product.name}</td>
            <td>${product.description}</td>
            <td>${product.author || product.brand || 'N/A'}</td>
            <td>${product.type || 'N/A'}</td>
            <td>$${product.price}</td>
            <td><button class="btn-add-cart">Add to Cart</button></td>
        `;
    });

    // Append the table to the results container
    resultsContainer.appendChild(table);

    // Handle case where no results are found
    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No products found.</p>';
    }
}

