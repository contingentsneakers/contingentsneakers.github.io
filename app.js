fetch('products.json')
  .then(response => response.json())
  .then(data => {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';
    data.forEach(product => {
      productGrid.innerHTML += `
        <div class="product">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.category}</p>
          <p>${product.description}</p>
          <p><strong>${product.price}</strong></p>
        </div>`;
    });
  });
