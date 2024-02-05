document.getElementById('books-category').addEventListener('click', function() {
    fetch('books.json')
        .then(response => response.json())
        .then(data => {
            displayProducts(data.books, 'books')
        })
        .catch(error => console.log('Error:', error));
});

document.getElementById('electronics-category').addEventListener('click', function() {
    fetch('electronics.xml')
        .then(response => response.text())
        .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
        .then(data => displayProducts(data, 'electronics'))
        .catch(error => console.log('Error:', error));
});

document.getElementById('perfume-category').addEventListener('click', function() {
    fetch('perfumes.xml')
        .then(response => response.text())
        .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
        .then(data => displayProducts(data, 'perfumes'))
        .catch(error => console.log('Error:', error));
});

function displayProducts(data, category) {
    const productInfo = document.getElementById('product-info');
    productInfo.innerHTML = ''; 
    let content;
    if (category === 'books') {
        content = data.map(book => `
        <div class="card">
        <img class="card-img-top" src="${book.img}" alt="${book.name}">
        <div class="card-body">
            <h5 class="card-title">${book.name}</h5>
            <p class="card-text">${book.description}</p>
            <p class="card-author">Author: ${book.author}</p>
            <p class="card-type">${book.type}</p>
            <p class="card-price">$${book.price}</p>
            <button class="btn-add-cart">Add to Cart</button>
        </div>
    </div>
        `).join('');
    } else if (category === 'electronics') {
        const products = data.getElementsByTagName('product');
        content = Array.from(products).map(prod => {
            const name = prod.getElementsByTagName('name')[0].textContent;
            const price = prod.getElementsByTagName('price')[0].textContent;
            const wirelessCarrier = prod.getElementsByTagName('wireless_carrier')[0].textContent;
            const brand = prod.getElementsByTagName('brand')[0].textContent;
            const colour = prod.getElementsByTagName('colour')[0].textContent;
            const memoryStorageCapacity = prod.getElementsByTagName('memory_storage_capacity')[0].textContent;
            const screenSize = prod.getElementsByTagName('screen_size')[0].textContent;
            const operatingSystem = prod.getElementsByTagName('operating_system')[0].textContent || 'N/A';
            return `
            <div class="card">
                <img class="card-img-top" src="placeholder-image.jpg" alt="${name}">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">Brand: ${brand}</p>
                    <p class="card-text">Carrier: ${wirelessCarrier}</p>
                    <p class="card-text">Color: ${colour}</p>
                    <p class="card-text">Memory: ${memoryStorageCapacity}</p>
                    <p class="card-text">Screen Size: ${screenSize}</p>
                    <p class="card-text">OS: ${operatingSystem}</p>
                    <p class="card-price">$${price}</p>
                    <button class="btn-add-cart">Add to Cart</button>
                </div>
            </div>
            `;
        }).join('');
    } 
    else if (category === 'perfumes') {
      const products = data.getElementsByTagName('perfume');
      console.log(products)
      content = Array.from(products).map(prod => {
          const name = prod.getElementsByTagName('name')[0].textContent;
          const price = prod.getElementsByTagName('price')[0].textContent;
          const brand = prod.getElementsByTagName('brand')[0].textContent;
          const ingredients = prod.getElementsByTagName('ingredients')[0].textContent;
          const itemWeight = prod.getElementsByTagName('item_weight')[0].textContent;
          
          return `
              <div class="card">
                  <img class="card-img-top" src="placeholder-perfume.jpg" alt="${name}">
                  <div class="card-body">
                      <h5 class="card-title">${name}</h5>
                      <p class="card-brand">Brand: ${brand}</p>
                      <p class="card-price">Price: $${price}</p>
                      <p class="card-ingredients">Ingredients: ${ingredients}</p>
                      <p class="card-weight">Weight: ${itemWeight}</p>
                      <button class="btn-add-cart">Add to Cart</button>
                  </div>
              </div>
          `;
      }).join('');
  }

    productInfo.innerHTML = content;
}

let currentIndex = 0;

document.querySelector('.carousel-control-next').addEventListener('click', () => {
  console.log('next')
  const items = document.querySelectorAll('.carousel-item');
  if (currentIndex < items.length - 1) {
    currentIndex++;
    updateCarousel();
  } else{
    currentIndex = 0; 
    updateCarousel();
  }
});

document.querySelector('.carousel-control-prev').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  } else{
    currentIndex = 3;
    updateCarousel();
  }
});

function updateCarousel() {
  const items = document.querySelectorAll('.carousel-item');
  const newTransformValue = `translateX(-${currentIndex * 100}%)`;
  document.querySelector('.carousel-inner').style.transform = newTransformValue;
  document.querySelector('.active').classList.remove('active');
  items[currentIndex].classList.add('active');
}
