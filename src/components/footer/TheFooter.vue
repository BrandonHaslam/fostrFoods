<template>
  <footer>
    <div>
      <b>
        <a href="mailto:hello@fostr.io">hello@fostr.io</a>
      </b>
      <br />
      <a href="https://www.fostr.io/privacy-policy">Privacy Policy</a>
    </div>
    <div>
      <b>Availability</b>
      <br />
      <span class="footer-availability">Booking projects for Q2 2021</span>
    </div>
    <div>
      <b>Follow:</b>
      <section class="socials">
        <a href="https://twitter.com/fostr_io">Twitter</a>
        <a href="https://www.instagram.com/fostr.io/">Instagram</a>
        <a href="https://www.linkedin.com/company/fostr-io">Linkedin</a>
      </section>
    </div>
  </footer>
</template>
<script>
export default {
  name: "TheFooter",
};
</script>
<style lang="scss" scoped>
footer {
  @media (max-width: 600px) {
    flex-direction: column;
  }
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  min-height: 200px;
  width: 100%;
  padding: 2rem;
}
footer,
a {
  color: #999;
}
div {
  margin: 1rem;
}
a:hover {
  color: goldenrod;
}

b a,
b {
  color: black;
}
.socials {
  display: flex;
  a {
    padding-right: 5px;
  }
}
</style>
