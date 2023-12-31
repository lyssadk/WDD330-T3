import { findProductById } from "./productData.mjs";
import { cartCount } from "./stores.mjs";
import { setLocalStorage, getLocalStorage } from "./utils.mjs";
// import { cartIcon } from "./product.js";

let product = {};
const cartIcon = document.querySelector(".cart svg");

export default async function productDetails(productId, selector) {
  // get the details for the current product. findProductById will return a promise! use await or .then() to process it
  product = await findProductById(productId);
  // once we have the product details we can render out the HTML
  const el = document.querySelector(selector);
  el.insertAdjacentHTML("afterBegin", productDetailsTemplate(product));
  // once the HTML is rendered we can add a listener to Add to Cart button
  document.getElementById("addToCart").addEventListener("click", addToCart);
}
function addToCart() {
  let contents = getLocalStorage("so-cart") || [];
  if (!contents) {
    contents = [];
  }
  contents.push(product);
  setLocalStorage("so-cart", contents);
  cartIcon.classList.add("animateCart");
}

function productDetailsTemplate(product) {
  return `<h3>${product.Brand.Name}</h3>
  <h2 class="divider">${product.NameWithoutBrand}</h2>
  <img
    class="divider"
    src="${product.Image.PrimaryMedium}"
    alt="${product.Name}"
  />
  <p class="product-card__price">$${product.FinalPrice}</p>
  <p class="product__color">${product.Colors[0].ColorName}</p>
  <p class="product__description">
  ${product.DescriptionHtmlSimple}
  </p>
  <div class="product-detail__add">
    <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
  </div>`;
}