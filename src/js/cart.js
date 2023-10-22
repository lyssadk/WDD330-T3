
import { get } from "svelte/store";
import { findProductById } from "./productData.mjs";
import { getLocalStorage, setLocalStorage} from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
  cartTotal();
}

function cartTotal(){
  const cartPrices = []
  const storageList = getLocalStorage("so-cart");
  storageList.forEach((local) => {
      if (local.quantity < 0){
      cartPrices.push(local.FinalPrice)
  }
    else{
        cartPrices.push(local.quantity * local.FinalPrice);
    }
  });

  
  document.querySelector(".cart-total").innerHTML = "Total: $" + cartPrices.reduce(cartTotalReduce);
}

function cartTotalReduce(total, num){
    return total + num;
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: ${item.quantity}</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
  <button class="remove" data-ID="${item.Id}">X </button>
</li>`;
  
  return newItem;
}

function removeProductFromCart(product){
  // get index of it (use splice) use array. indexOf in a foreach loop, use index find and findindex
  // can also filter the 
  // cart item and cart list component
  const contents = getLocalStorage("so-cart").filter((filter)=> filter.Id != product.Id);
  const filteredContents = getLocalStorage("so-cart").filter((compare)=> compare.quantity > 1);
  if (filteredContents){
    const prQt = product.quantity - 1;
    product.quantity == prQt;
  }
  else{
    //remove from contents the product if it goes to 0
    setLocalStorage("so-cart", contents)
  }
  renderCartContents();
}


async function removeCartHandler(e){
  const product = await findProductById(e.target.dataset.Id);
  removeProductFromCart(product);
}


// need to add an event listener to each thing in the cart, they should have their own ID
document.querySelector(".product-list").addEventListener("click", removeCartHandler)
renderCartContents();
