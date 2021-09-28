<template>
  <header :class="{'nav--color': scrollPosition > 50}">
    <div class="logo">
      <NuxtLink to="/"><img src="~@/assets/images/progeosurvey-logo.svg" alt="ProGeoSurvey Logotyp"></NuxtLink>
    </div>
    <nav class="nav">
      <ul>
        <li><NuxtLink to="/">Firma</NuxtLink></li>
        <li><NuxtLink to="/oferta">Oferta</NuxtLink></li>
        <li><NuxtLink to="/realizacje">Realizacje</NuxtLink></li>
        <li><NuxtLink to="/referencje">Referencje</NuxtLink></li>
        <li><NuxtLink to="/galeria">Galeria</NuxtLink></li>
        <li><NuxtLink to="/#kontakt">Kontakt</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data(){
    return {
      scrollPosition: null
    }
  },
  methods: {
    updateScroll() {
       this.scrollPosition = window.scrollY
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  }
}
</script>

<style scoped>
header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 0 10%;
  align-items: center;
  z-index: 999;
  transition: all 0.4s ease;
}
.nav ul{
  display: flex;
}
.nav a{
  margin: 0 10px;
  text-decoration: none;
  color: #222222;
  text-transform: uppercase;
  transition: all 0.4s;
}
.nuxt-link-exact-active{
  font-weight: bold;
}
.nav a:hover{
  letter-spacing: 1px;
  transition: all 0.4s;
}
.nav--color{
  background-color: #F5F5F5;
  transition: all 0.4s ease;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
}
</style>