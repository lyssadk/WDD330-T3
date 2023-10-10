
import { getParam } from "./utils.mjs";
import productDetails from "./productDetails.mjs";

const productId = getParam("product");
productDetails(productId, ".product-detail");

import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import { findProductById } from "./productData.mjs";

const cartIcon = document.querySelector(".cart svg");

function addProductToCart(product) {
  const contents = getLocalStorage("so-cart") || [];
  contents.push(product);
  setLocalStorage("so-cart", contents);
  cartIcon.classList.add("animateCart");
}

// add to cart button event handler
async function addToCartHandler(e) {
  const product = await findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button

// document.addEventListener("DOMContentLoaded", function() {
//   // Add listener to Add to Cart button
//   const addToCartButton = document.getElementById("addToCart");
//   if (addToCartButton) {
//     addToCartButton.addEventListener("click", addToCartHandler);
//   }
// });

document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);

  // get things from local storage in a string and put them into a array of objects, then display that. 
