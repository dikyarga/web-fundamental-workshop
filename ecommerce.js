function getProducts() {
  fetch('https://mini-ecommerce.filosofikode.com/products')
    .then(res => res.json())
    .then(result => {
    console.log('hasilnya : ', result)

    document.querySelector('.products').innerHTML = JSON.stringify(result)
  })
}

getProducts()