// Define an array of product objects
const products = [
  {
    name: 'Green Chilli',
    image: 'images/abc/green-chili.png',
    price: 50,
    href: 'green-chilli'
  },
  { name: 'Onion', image: 'images/abc/onion.png', price: 50, href: 'onion' },
  {
    name: 'Potato',
    image: 'images/abc/potato.webp',
    price: 43,
    href: 'potato'
  },
  {
    name: 'Drumsticks',
    image: 'images/abc/drumstick.png',
    price: 50,
    href: 'drumsticks'
  },
  {
    name: 'Golden Long Raisin',
    image: 'images/abc/golden-long-raisin.png',
    price: 78,
    href: 'golden-long-raisin'
  },
  {
    name: 'Golden Small Raisin',
    image: 'images/abc/golden-small-raisin.png',
    price: 78,
    href: 'golden-small-raisin'
  },
  {
    name: 'Blck Dry Raisin',
    image: 'images/abc/black-dry-raisin.png',
    price: 50,
    href: 'blck-dry-raisin'
  },
  {
    name: 'Garlic Powder',
    image: 'images/abc/garlic-powder.png',
    price: 50,
    href: 'garlic-powder'
  },
  {
    name: 'Dry Red Chilli',
    image: 'images/abc/red-chili.png',
    price: 50,
    href: 'dry-red-chilli'
  },
  { name: 'Cumin', image: 'images/abc/cumin.png', price: 43, href: 'cumin' },
  {
    name: 'Turmeric',
    image: 'images/abc/turmeric.png',
    price: 50,
    href: 'turmeric'
  },
  {
    name: 'Pav Bhaji',
    image: 'images/abc/pav-bhaji.png',
    price: 50,
    href: 'pav-bhaji'
  },
  { name: 'Khaman', image: 'images/abc/khaman.png', price: 50, href: 'khaman' }
]
// Function to generate HTML for a single product
function generateProductHTML (product) {
  return `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
        <a class="product-item" href="single-product.html?${product.href}">
            <div class="product-thumbnail-wrapper">
                <img src="${product.image}" class="img-fluid product-thumbnail">
            </div>
            <h3 class="product-title">${product.name}</h3>
            <strong class="product-price">$${product.price}.00</strong>
            <span class="icon-cross">
                <img src="images/cross.svg" class="img-fluid">
            </span>
        </a>
    </div>
    `
}

// Function to render products on the page
function renderProducts () {
  const productContainer = document.getElementById('product-container')
  let productHTML = ''
  products.forEach((product) => {
    productHTML += generateProductHTML(product)
  })
  productContainer.innerHTML = productHTML
}

// Call renderProducts to generate the product list on page load
renderProducts()
