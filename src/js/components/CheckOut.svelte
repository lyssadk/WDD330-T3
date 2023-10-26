<script>
  import {getLocalStorage} from "../utils.mjs";
    let tax = 0;
    let shipping = 0;
    let subtotal = 0;
    let list = [];

    export let key = "so-cart";

    const init = function(){
      list = getLocalStorage(key);
      calculateItemSummary();
    }

    const calculateItemSummary = function(){
      const amounts = list.map((item)=> item.FinalPrice);
      subtotal = amounts.reduce((sum, item) => sum + item);
    }
  
 init();   
</script>

<form id="shipping">
    <fieldset>
      <legend>Shipping</legend>
      <label for="fname">First Name:</label><br>
      <input type="text" name="fname" id="fname"><br>
      <label for="lname">Last Name:</label><br>
      <input type="text" name="lname" id="lname"><br>
      <label for="street">Street:</label><br>
      <input type="text" name="street" id="street"><br>
      <label for="city">City:</label><br>
      <input type="text" name="city" id="city"><br>
      <label for="state">State:</label><br>
      <input type="text" name="state" id="state"><br>
      <label for="zip">Zip Code:</label><br>
      <input type="text" name="zip" id="zip"><br>
    </fieldset>
  </form>

  
  <form id="payment">
    <fieldset>
      <legend>Payment</legend>
      <label for="card_number">Card Number:</label><br>
      <input type="text" name="cardNumber" id="card_number"  maxlength="16"><br>
      <label for="expiration">Expiration:</label><br>
      <input type="text" name="Expiration" id="expiration"><br>
      <label for="security">Security Code:</label><br>
      <input type="text" name = "securityCode" id="security" maxlength="3"><br>
    </fieldset>
  </form>

  <fieldset>
    <legend>Order Summary</legend>
    <div>
      <p>Item Subtotal: </p>
      <p id="subtotal">${subtotal}</p>
    </div>
    <div>
      <p>Shipping Estimate: </p>
      <p>${shipping}</p>
    </div>
    <div>
      <p>Tax: </p>
      <p>${tax}</p>
    </div>
    <div>
      <p>Order Total: </p>
      <p></p>
    </div>
  </fieldset>
  <button type="submit">Checkout</button>