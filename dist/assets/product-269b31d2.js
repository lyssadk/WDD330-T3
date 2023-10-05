import{s as o,a as r}from"./utils-375a814e.js";function d(t){if(t.ok)return t.json();throw new Error("Bad Response")}function c(t="tents"){return fetch(`../json/${t}.json`).then(d).then(e=>e)}async function s(t){return(await c()).find(n=>n.Id===t)}let a={};async function i(t,e){a=await s(t),document.querySelector(e).insertAdjacentHTML("afterBegin",u(a)),document.getElementById("addToCart").addEventListener("click",l)}function l(){o("so-cart",a)}function u(t){return`<h3>${t.Brand.Name}</h3>
  <h2 class="divider">${t.NameWithoutBrand}</h2>
  <img
    class="divider"
    src="${t.Image}"
    alt="${t.Name}"
  />
  <p class="product-card__price">$${t.FinalPrice}</p>
  <p class="product__color">${t.Colors[0].ColorName}</p>
  <p class="product__description">
  ${t.DescriptionHtmlSimple}
  </p>
  <div class="product-detail__add">
    <button id="addToCart" data-id="${t.Id}">Add to Cart</button>
  </div>`}const p=r("product");i(p,".product-detail");
