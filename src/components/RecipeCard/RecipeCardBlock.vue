<template>
  <header>
    <div>
      <section>
        <h1>{{ recipe.title }}</h1>
        <prep-time
          :prepTime="recipe.prep_time_min"
          :cookTime="recipe.cook_time_min"
        >
        </prep-time>
        <p>
          {{ recipe.description }} By
          <a :href="recipe.author.url">{{ recipe.author.name }}</a>
        </p>
      </section>

      <section class="list">
        <ul>
          <ingredientList class="ing" :serving="recipe.servings" :ingredients="recipe.ingredients">
          </ingredientList>
        </ul>
        <ol class="directions">
          <h2>Directions:</h2>
          <li v-for="dir in recipe.directions" :key="dir">
            {{ dir }}
          </li>
        </ol>
      </section>
    </div>
  </header>
</template>
<script>
import prepTime from "./prepTime.vue";
import ingredientList from "./ingredientList";
export default {
  name: "RecipeCardBlock",
  components: { prepTime, ingredientList },
  props: {
    recipeData: {
      type: Array,
      required: true,
    },
    recipeTitle: {
      type: String,
      required: true,
    },
  },
  computed: {
    servingSize() {
      return this.recipe.servings;
    },
    // finds current recipe clicked, filters through all recipes by matching title
    recipe() {
      let recipe = this.recipeData.find(
        (recipe) => recipe.title.toLowerCase() == this.recipeTitle.toLowerCase()
      );
      return recipe;
    },
  },
};
</script>
<style lang="scss" scoped>
header {
  @media (min-width: 600px) {
    padding: 3rem 5rem;
    font-size: 1.25rem;
  }
  padding: 5rem 0.5rem;
  background-image: url("../../assets/img/hero.jpg");
  background-size: cover;
  background-position: center;
  font-size: 1rem;
}
h1 {
  padding: 1rem;
  font-size: 2.5rem;
}
div {
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid white;
  border-radius: 1rem;
  color: white;
  background: rgba(0, 0, 0, 0.75);
}
p {
  @media (min-width: 600px) {
    font-size: 1.5rem;
  }
  font-size: 1.25rem;
  padding: 1rem;
}
a,
a:active,
a:visited {
  color: goldenrod;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
section {
  div {
    width: 50%;
    border: unset;
    background: unset;
  }
}
.list {
  @media (min-width: 600px) {
    display: flex;

  }
  padding: 0 2rem;
  ol,ul {
    flex: 1 0;
  }
}
.serve {
  font-weight: 300;
  font-size: 0.9em;
}
</style>
