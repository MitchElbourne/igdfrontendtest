<template>

  <div>
    <div class="logo container">
      <img src="./assets/logo.svg" />
    </div> 
    
    <section class="container cards-container">
      <CardsContainer v-bind:products="products"/>  
    </section>
  </div>

</template>



<script>

import CardsContainer from './assets/components/CardsContainer.vue'
const axios = require('axios').default;

export default {
  name: 'App',
  components: {
    CardsContainer: CardsContainer
  },
  data() {
    return {
      products: null   
    }
  },
  created() {
    axios('https://www.interiorgoodsdirect.com/interview/api/products?key=6HJx2R8st$%25Q')
      .then(response => {
        let productList = response.data.data.products
        for (let i = 0; i < productList.length; i++) {
          productList[i].id = i;
        }
        this.products = productList
      })

  }
}

</script>