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

export default {
  name: 'App',
  components: {
    CardsContainer: CardsContainer
  },
  data() {
    return {
      products: [
        {name: 'blind red'},
        {name: 'blind blue'},
        {name: 'blind green'},
        {name: 'blind purple'},
        {name: 'blind gold'}
      ]
    }
  }
}
</script>