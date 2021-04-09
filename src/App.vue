<template>
  <nav-bar @filterEmit="setFilter"></nav-bar>
  <recipe-list
    :is="currentPage"
    :recipeData="recipeData"
    :filter="filter"
  ></recipe-list>
  <the-footer></the-footer>
</template>
<script>
import NavBar from "./components/navigation/NavBarBlock.vue";
import TheFooter from "./components/footer/TheFooter";
import RecipeList from "./components/RecipeList/RecipeListBlock";
import RecipeCard from "./components/RecipeCard/RecipeCardBlock";
export default {
  name: "App",
  components: {
    NavBar,
    RecipeList,
    RecipeCard,
    TheFooter,
  },
  data:() =>({
      recipeData: [],
      currentPage: "recipe-list",
      currentRecipe: "Basil and pesto Hummus",
      filter: ["", "all"],
    
  }),
  methods: {
    setFilter(input, option) {
      this.filter = [input, option];
    },
    fetchData() {
      fetch("https://recipes-36a72-default-rtdb.firebaseio.com/.json").then(
        (response) => {
          if (!response.ok) {
            console.log("error - data not recieved via fetch");
          } else {
            response.json().then((data) => {
              console.log("fetched in recipe");
              console.log(data);
              return (this.recipeData = data);
            });
          }
        }
      );
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  box-sizing: border-box;
  outline: 0;
}
a{
  text-decoration: none;
}
#app {
  display: relative;
  // font-family: "Graphik Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-stretch: normal;
  font-size: 1.3em;
  line-height: 1.6;
  color: #000;
  position: relative;
}
</style>
