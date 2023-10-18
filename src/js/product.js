
import { getParam } from "./utils.mjs";
import productDetails from "./productDetails.mjs";

const productId = getParam("product");
productDetails(productId, ".product-detail");

// function addProductToCart(product) {
//   const contents = getLocalStorage("so-cart") || [];
//   const item = contents.find((compare)=> compare.Id == product.Id)
//   if(item){
//     item.quantity++;
//     console.log(item.quantity);
//     setLocalStorage("so-cart", contents);
//   }
//   else{
//     product.quantity = 1;
//     contents.push(product);
//     setLocalStorage("so-cart", contents);
//   }
//   cartIcon.classList.add("animateCart");
// }

// add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }

// add listener to Add to Cart button

// document.addEventListener("DOMContentLoaded", function() {
//   // Add listener to Add to Cart button
//   const addToCartButton = document.getElementById("addToCart");
//   if (addToCartButton) {
//     addToCartButton.addEventListener("click", addToCartHandler);
//   }
// });

// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);
// add listeneer to Remove from cart button
// document
//   .getElementsByID()
//   .addEventListener("click", removeCartHandler)
// add listener to Add to Cart button


// get things from local storage in a string and put them into a array of objects, then display that. 
