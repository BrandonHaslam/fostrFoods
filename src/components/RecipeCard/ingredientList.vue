<template>
 <h2>Ingredients:   Serving Size: {{servingSize}}</h2>
  <span class="serve">
<!-- Serving Size: <input type="num" v-model="servingSize" -->
  </span>
  <ingredient-item  v-for="ing in ingredients" :key="ing" :ingredient="ing" :serving="servingSize"></ingredient-item>
</template>
<script>
import ingredientItem from './ingredientItem'
export default {
  name: "ingredientList",
  components:{
    ingredientItem
  },
  props: {
    ingredients: {
      type: Array,
    },
    serving: {
      type: Number,
    },
  },
  data(){
      return{
          servingSize:this.serving
      }
  },

};
</script>
<style lang="scss" scoped></style>
