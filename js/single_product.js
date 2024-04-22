// Array of products
const products = [
  {
    name: "Green Chilli",
    image: "images/abc/green-chili.png",
    price: 50,
    href: "green-chilli",
  },

  {
    name: "Potato",
    image: "images/abc/potato.webp",
    price: 43,
    href: "potato",
  },
  {
    name: "Onions",
    image: "images/abc/onion.webp",
    price: 30,
    href: "onion",
    description:
      "Onions are a widely cultivated vegetable known for their pungent flavor and culinary versatility. They belong to the Allium genus and are characterized by their layered structure and distinctive taste. Onions are consumed worldwide and are used in various cuisines, both raw and cooked. Onions come in different varieties, including yellow onions, red onions, and white onions. Each variety varies in taste, color, and suitability for different culinary applications. The choice of variety depends on market preferences and culinary requirements. Onions are a good source of vitamins, minerals, and antioxidants. They are low in calories and contain dietary fiber, making them a healthy addition to various diets. When importing or exporting onions, quality standards play a crucial role. Onions should be firm, free from sprouting, with dry and intact skins. The bulbs should be uniform in size and shape to meet market demands. Quality specifications also include freshness, absence of rot or damage, and compliance with relevant food safety regulations.",
  },
  // Add more products as needed
];

// Function to generate product list
function generateProductList() {
  const productList = document.querySelector(".product-list ul");
  productList.innerHTML = "";

  products.forEach((product) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    <div class="container">
        <div class="row">
          <div class="col-12 col-md-5">
            <div class="single-product-img-wrapper">
              <img src=".${product.image}" alt="" />
            </div>
          </div>
          <div class="col-12 col-md-7">
            <div>
              <div class="d-flex align-items-center gap-2 product-name">
                <h2 class="mb-0">${product.name}</h2>
                <p class="mb-0">In Stock</p>
              </div>
              <h4 class="mt-3 fw-bold text-primary">$${product.price}</h4>
              <p>
                ${product.description}
              </p>
              <div class="product-detail-list">
                <h5>Details</h5>
                <ul>
                  <li>
                    Packaging: 24 bags of 400-600 grams in carton of aprox.12kg
                    net
                  </li>
                  <li>Recommended storage & transport temperature: 0.5 °C</li>
                  <li>Relative Humidity: 98</li>
                  <li>Freezing Temperature: -0.5°C</li>
                </ul>
              </div>
              <button class="btn add-query-btn text-uppercase">
                Add to query
              </button>
            </div>
          </div>
        </div>
      </div>
     
    `;
    productList.appendChild(listItem);
  });
}

// Generate product list on page load
window.onload = generateProductList;

// Single product page functionality
const productName = window.location.href.split("?").pop().replace(".html", "");
const product = products.find((p) => p.href === productName);
console.log("productName", productName, product);

if (product) {

} else {
  document.getElementById("product-name").textContent = "Product Not Found";
}