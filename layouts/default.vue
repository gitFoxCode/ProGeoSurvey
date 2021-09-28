<template>
    <div id="app">
        <svg-sprite />
        <Nav />
        <Nuxt />
        <Footer />
    </div>
</template>

<script>
export default {
  async mounted() {
    await this.$store.dispatch("getRealizations")
    await this.$store.dispatch("getReferences");
  }
}
</script>

<style>
@import '~@/assets/css/reset.css';
*,*::after,*::before{
    box-sizing: border-box;
}
#app{
    overflow: hidden;
}
body{
    font-family: "Poppins", sans-serif;
    scroll-behavior: smooth;
}
strong{
    font-weight: bold;
}

.primary-btn{
    display: inline-block;
    padding: 15px 20px;
    background-color: #FECF45;
    color: #222222;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    border: 4px solid #FECF45;
    transition: all 0.4s;
}
.primary-btn:hover, .primary-btn:focus{
    background-color: transparent;
    transition: all 0.4s;
    padding: 15px 30px;
}
</style>