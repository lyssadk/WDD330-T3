<script>
    import ProductSummary from "./ProductSummary.svelte";
    import { getData } from "../productData.mjs";
  
    export let category;
  
    let promise = getData(category);

  </script>
  
  <h2>Top Products: {category}</h2>
  {#await promise}
    <p>Loading</p>
  {:then data}
    <ul class="product-list">
      {#each data as product}
        <li class="product-card"><ProductSummary {product} /></li>
      {/each}
    </ul>
  {/await}
                    