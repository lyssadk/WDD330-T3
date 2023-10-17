import ProductList from "./components/ProductList.svelte"
new ProductList({
    target: document.querySelector(".products"),
    props: { category: "tents" },
});

// import { renderHeaderFooter } from "./utils.mjs";
// renderHeaderFooter();

import MainHeader from "./components/MainHeader.svelte"

    new MainHeader({
        target: document.querySelector("#main-header"),
        props: { cartCount: 3 },
      });