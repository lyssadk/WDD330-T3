
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
  const contents2 = getLocalStorage("so-cart").filter((filter)=> filter.Id != product.Id);

  const contents = getLocalStorage("so-cart") || [];
  //find the specific product because filtered contents just returms 
  //array.prototype.find() product id== for the callback
  const itemToRemove = contents.find((item) => item.Id = product.Id)
  console.log(itemToRemove);

    if (itemToRemove.quantity >= 1){
    itemToRemove.quantity--;
    setLocalStorage("so-cart", contents2)

      if(itemToRemove.quantity == 0){
        contents.splice(itemToRemove, 1);
        setLocalStorage("so-cart", contents)
      }
    

    else{
      //remove from contents the product if it goes to 0
      setLocalStorage("so-cart", contents)
    }
  }
    else{
      //remove from contents the product if it goes to 0
      setLocalStorage("so-cart", contents)
    }
  renderCartContents();
}


async function removeCartHandler(e){
  const product = await findProductById(e.target.dataset.id);
  removeProductFromCart(product);
}


// need to add an event listener to each thing in the cart, they should have their own ID
document.querySelector(".product-list").addEventListener("click", removeCartHandler)
renderCartContents();
