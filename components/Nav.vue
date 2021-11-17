<template>
  <header :class="{'nav--color': scrollPosition > 50}">
    <div class="logo">
      <NuxtLink to="/"><img src="~@/assets/images/progeosurvey-logo.svg" alt="ProGeoSurvey Logotyp"></NuxtLink>
    </div>
    <button class="nav__mobile__button" v-if="mobile" @click="showNav = !showNav">
      <svg-icon icon="menu"/>
    </button>
    <nav class="nav__mobile" :class="{'open': showNav}" v-if="mobile">
      <ul>
        <li><NuxtLink to="/">Firma</NuxtLink></li>
        <li><NuxtLink to="/oferta">Oferta</NuxtLink></li>
        <li><NuxtLink to="/realizacje">Realizacje</NuxtLink></li>
        <li><NuxtLink to="/referencje">Referencje</NuxtLink></li>
        <li><NuxtLink to="/galeria">Galeria</NuxtLink></li>
        <li><NuxtLink to="/#kontakt">Kontakt</NuxtLink></li>
      </ul>
    </nav>
    <nav class="nav" v-else>
      <ul>
        <li><NuxtLink to="/">Firma</NuxtLink></li>
        <li><NuxtLink to="/oferta">Oferta</NuxtLink></li>
        <li><NuxtLink to="/realizacje">Realizacje</NuxtLink></li>
        <li><NuxtLink to="/referencje">Referencje</NuxtLink></li>
        <li><NuxtLink to="/galeria">Galeria</NuxtLink></li>
        <li><NuxtLink to="/#kontakt">Kontakt</NuxtLink></li>
        <li class="nav-admin"><NuxtLink to="/admin" v-if="$auth.loggedIn"><svg-icon icon="admin-badge"/> Admin</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import SvgIcon from './SvgIcon.vue';
export default {
  components: { SvgIcon },
  data(){
    return {
      scrollPosition: null,
      mobile: true,
      showNav: false
    }
  },
  methods: {
    updateScroll() {
       this.scrollPosition = window.scrollY
    },
    handleView(){
      this.mobile = window.innerWidth <= 900
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  created(){
    if (process.browser){
      this.handleView()
      window.addEventListener("resize", this.handleView)
    }
  },
  watch: {
    async $route(to, from) {
      this.showNav = false;
    }
  }
}
</script>

<style scoped>
.nav__mobile{
  position: fixed;
  left: 0;
  top: 60px;
  width: 70%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F5F5F5;
  font-size: 1.5em;
  text-align: center;
  z-index: 9999;
  transform: translateX(-100%);
  transition: transform 0.5s ease-in-out;
  padding-bottom: 60px;
}
.nav__mobile.open{
  transform: translateX(0);
}
.nav__mobile a{
  color: #222;
  text-decoration: none;
}
.nav__mobile li{
  margin: 20px 0;
}
.nav__mobile__button{
  height: 100%;
  padding: 0 20px;
  font-size: 2.5em;
  border: none;
  background-color: transparent;
  cursor: pointer;
}


.nav-admin a{
  font-weight: bold;
  color: red !important;
}
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
@media (min-width:480px)  { 

}
</style>