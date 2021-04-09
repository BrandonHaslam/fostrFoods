<template>
  <nav :class="{ black: pastHero }">
    <a href="https://www.fostr.io/">
      <img src="../../assets/img/fostrLogo.png" alt="" />
    </a>
    <form @submit.prevent="filterEmit()">
      <input
        name="search"
        type="text"
        placeholder="search"
        v-model="filterInput"
      />
      <select name="filter" id="filter" v-model="filterOption">
        <option value="" selected disabled>filter</option>
        <option value="all" selected>All</option>
        <option value="title">Title</option>
        <option value="ingredients">Ingredients</option>
        <option value="tags">Tags</option>
        <option value="description">Description</option>
        <!-- add too RecipeListBlock also -->
      </select>
      <button @click="resetFilter()">Reset</button>
      <button>Submit</button>
    </form>
  </nav>
</template>

<script>
export default {
  name: "NavBarBlock",
  data: () => ({
    filterInput: "",
    filterOption: "",
    pastHero: false,
  }),
  created() {
    window.addEventListener("scroll", this.changeColour);
  },
  methods: {
    resetFilter() {
      this.filterOption = "";
      this.filterInput = "";
    },
    filterEmit() {
      this.$emit("filter-emit", this.filterInput, this.filterOption);
      // scrolls to position on click
      this.scrollPosition = window.scrollY;
      this.screenHeight = window.innerHeight * 0.85;
      window.scrollTo(0, this.screenHeight);
    },
    // change colour of nav at certain screen height
    changeColour() {
      this.scrollPosition = window.scrollY;
      this.screenHeight = window.innerHeight * 0.75;
      this.scrollPosition > this.screenHeight
        ? (this.pastHero = true)
        : (this.pastHero = false);
    },
  },
};
</script>
<style lang="scss" scoped>
nav {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  transition: all 0.4s;
  @media (max-width: 400px) {
    padding: 0.75rem 1.5rem;
  }
}
img {
  max-height: 100%;
}
form {
  margin-left: auto;
}
input {
  width: 30ch;
  border: 2px white solid;
  @media (min-width: 600px) {
    border-radius: 10px 0px 0px 10px;
  }
}
button:hover {
  background: grey;
  color: black;
  cursor: pointer;
}
button:last-of-type {
  @media (min-width: 600px) {
    border-radius: 0 10px 10px 0;
  }
}

select,
option,
input,
button {
  // @media (min-height:400px) {
  //   padding:2px 10px
  // }
  height: 2rem;
  padding: 2px 5px;
  background: black;
  border: 2px white solid;
  color: rgb(170, 170, 170);
  outline: none;
  &:focus {
    color: white;
    &::placeholder {
      color: white;
    }
  }
}

a {
  height: 4rem;
}
.black {
  background: black;
}
</style>
