<template>
  <!-- <hero></hero> -->
  <component
    :is="currentPage"
    :recipeData="recipeData"
    :recipeTitle="currentRecipe"
  ></component>
  <main>
    <ul>
      <recipe-list-item
        v-for="recipe in filteredData"
        @click="emitTitle(recipe.title)"
        :key="recipe.title"
        :id="recipe.title"
        :title="recipe.title"
        :prepTime="recipe.prep_time_min"
        :cookTime="recipe.cook_time_min"
        :recipe="recipe"
      ></recipe-list-item>
    </ul>
  </main>
</template>
<script>
import Hero from "../header/Hero";
import RecipeListItem from "./recipeListItem";
import RecipeCard from "../RecipeCard/RecipeCardBlock";
export default {
  name:'RecipeListBlock',
  components: {
    Hero,
    RecipeListItem,
    RecipeCard,
  },
  props: {
    recipeData: {
      Type: Array,
    },
    filter: {
      Type: Array,
    },
  },
  data: () => ({
    currentPage: "hero",
    currentRecipe: "banana oatmeal cookie",
  }),
  methods: {
    emitTitle(id) {
      this.currentRecipe = id;
      this.currentPage = "recipe-card";
    },
    // filters through string values
    stringFilter(input, filter) {
      let filtered = this.recipeData.filter((recipe) =>
        recipe[filter].toLowerCase().includes(input.toLowerCase())
      );
      return filtered;
    },
// filters through array values
    arrayFilter(input, filter) {
      let filtered = this.recipeData.filter((recipe) =>
        recipe[filter.toLowerCase()].some((i) =>
          i.includes(input.toLowerCase())
        )
      );
      return filtered;
    },
  },
  computed: {
    filteredData() {
      // if reference is a string add here
      if (this.filter[1] == "title" || this.filter[1] == "description") {
        return this.stringFilter(this.filter[0], this.filter[1]);
      }
      // if reference contains an array add here
      else if (this.filter[1] == "tags" || this.filter[1] == "ingredients") {
        return this.arrayFilter(this.filter[0], this.filter[1]);
      } else {
        return this.recipeData;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
main {
  background: url("../../assets/img/marbel.jpg");
  background-position: center;
  background-size: fill;
}
ul {
  width: 100%;
  list-style: none;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
}
</style>
