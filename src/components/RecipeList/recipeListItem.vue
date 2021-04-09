<template>
  <a href="#app">
    <div class="imageContainer">
      <img
        v-if="imagePresent"
        :src="imageCompute()"
        alt="image not available"
      />
      <img v-else src="@/assets/img/fostrLogo.png" alt="Image not Loaded" />
    </div>
    <div class="textContainer">
      <h1>{{ recipe.title }}</h1>
      <section>
        <h5>
          Prep Time: <span>{{ prepTime }} mins </span>
        </h5>
        <h5>
          Cooking Time: <span>{{ cookTime }} mins </span>
        </h5>
      </section>
    </div>
  </a>
</template>
<script>
export default {
  name:'RecipeListItem',
  data: () => ({
    image: "",
    imagePresent: true,
  }),
  props: {
    title: {
      type: String,
      required: true,
    },
    recipe: {},
    prepTime: {
      type: String,
      default: "N/A",
    },
    cookTime: {
      type: String,
      default: "N/A",
    },
    id: {},
  },
  methods: {
    // sees if image file present, if false renders default
    imageCompute() {
      try {
        let image = require(`@/assets/img/${this.title.replace(
          /\s/g,
          ""
        )}.jpg`);
        return image;
      } catch (e) {
        // console.log(e);
        return (this.imagePresent = false);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
a {
  @media (min-width: 800px) {
    width: 75%;
    height: 200px;
    display: flex;
  }
  @media (min-width: 1200px) {
    width: 45%;
  }
  color: white;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  min-height: 60vh;
  margin: 1rem;
  border: 1px solid white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 5px 5px 20px black;
  transition: all 0.1s;
  &:hover {
    transform: translate(-5px, -5px);
    box-shadow: 10px 10px 20px 5px black;
    transition: all 0.1s;
  }
  &:hover .textContainer {
    background: black;
    cursor: pointer;
  }
}
img {
  height: 100%;
  width: auto;
  border-right: 1px solid white;
  // object-fit: cover;
}
h1 {
  font-weight: 300;
  line-height: 1.25em;
  font-size: 2.5rem;
  @media (min-width: 600px) {
    font-size: 2.75rem;
  }
}
h5 {
  border: 1px solid white;
  border-radius: 1rem;
  margin: 5px;
  padding: 0.5rem;
  font-size: 1.25rem;
  background: goldenrod;
  span {
    white-space: nowrap;
  }
}
section {
  text-align: center;
  margin-top: auto;
}
.imageContainer {
  display: none;
  @media (min-width: 800px) {
    display: block;
    height: 100%;
    overflow: hidden;
    max-width: 400px;
  }
}
.textContainer {
  height: 100%;
  padding: 1rem;
  display: flex;
  flex: 1 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  text-align: left;
}
</style>
