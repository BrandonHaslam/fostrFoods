<template>
<main>
  <recipe-list :recipeData="recipeData" :is="currentComponent"></recipe-list>
</main>
</template>
<script>

import RecipeList from './components/RecipeList/RecipeListBlock'
import RecipeCard from './components/RecipeCard/RecipeCardBlock'
export default {
    props:['recipeData'],
    components:[
    RecipeList,
    RecipeCard,
    ],
    data(){
        return{
            currentComponent:'recipe-list'
        }
    }
}
</script>