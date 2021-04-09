<template>
  <header>
    <div class="overlay">
      <section>
        <h1><span>Fostr Foods</span> favourite recipes to try from home</h1>
      </section>
    </div>
  </header>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
header {
  width: 100%;
  height: 100vh;
  background-image: url("../../assets/img/hero.jpg");
  background-size: cover;
  background-position: center;
}
.overlay {
  background: radial-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
section {
  text-align: center;
}
h1 {
  line-height: 1.25em;
  font-size: 2rem;
  font-weight: 300;
  color: white;
  text-transform: capitalize;
  @media (min-width: 600px) {
    padding: 10rem;
    font-size: 3rem;
    line-height: 1.25em;
  }
  @media (min-width: 1000px) {
    padding: 15rem;
    font-size: 4rem;
  }
}

span {
  color: goldenrod;
}
</style>
