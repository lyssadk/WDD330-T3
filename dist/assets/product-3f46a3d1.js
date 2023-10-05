import{s as n,a as r,g as c}from"./utils-375a814e.js";function s(t){if(t.ok)return t.json();throw new Error("Bad Response")}function i(t="tents"){return fetch(`../json/${t}.json`).then(s).then(a=>a)}async function d(t){return(await i()).find(o=>o.Id===t)}let e={};async function l(t,a){e=await d(t),document.querySelector(a).insertAdjacentHTML("afterBegin",p(e)),document.getElementById("addToCart").addEventListener("click",u)}function u(){n("so-cart",e)}function p(t){return`<h3>${t.Brand.Name}</h3>
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
  </div>`}const m=r("product");l(m,".product-detail");function f(t){const a=c("so-cart")||[];a.push(t),n("so-cart",a)}async function g(t){const a=await d(t.target.dataset.id);f(a)}document.getElementById("addToCart").addEventListener("click",g);
