<template>
  <section>
    <h5>
      Prep Time: <span>{{ prepTime }} mins </span>
    </h5>
    <h5>
      Cooking Time: <span>{{ cookTime }} mins </span>
    </h5>
  </section>
</template>
<script>
export default {
  name:'prepTime',
  props: {
    prepTime: {
      type: String,
      default: "N/A",
    },
    cookTime: {
      type: String,
      default: "N/A",
    },
  },
};
</script>
<style lang="scss" scoped>
section {
  display: flex;
}
h5 {
  padding: 0 1rem;
}
</style>
