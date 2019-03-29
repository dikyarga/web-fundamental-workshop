function getProducts() {
  fetch('https://mini-ecommerce.filosofikode.com/products')
    .then(res => res.json())
    .then(result => {
    console.log('hasilnya : ', result)

    const resultHTML = result.map(product => {
      return `
          <div class="product">
          <img
            class="product-image"
            src="${product.imageUrl}"
            alt="${product.name}"
          />
          <h3>${product.name}</h3>
          <h5 class="product-detail__price">Rp. ${product.price}</h5>
          <p>${product.description}</p>
          <button class="button is-primary">Beli Sekarang</button>
        </div>
      `
    })

    document.querySelector('.products').innerHTML = resultHTML
  })
}

getProducts()