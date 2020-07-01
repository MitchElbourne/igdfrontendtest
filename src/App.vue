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
        {
          name: 'blind red',
          descripton: 'This chic and contemporary blackout roller blind is, unsurprisingly, one of the very bestselling products on our website.',
          imageThumb: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
          imageFull: 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
          name: 'blind blue',
          descripton: 'This chic and contemporary blackout roller blind is, unsurprisingly, one of the very bestselling products on our website.',
          imageThumb: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
          imageFull: 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        }
      ]
    }
  }
}
</script>