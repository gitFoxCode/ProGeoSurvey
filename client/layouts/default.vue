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

.swiper-pagination-bullet{
    width: 10px !important;
    height: 10px !important;
    margin: 0 5px !important;
}
.swiper-pagination-bullet-active{
    background-color: #FECF45 !important;
}
.admin-btn{
    border-radius: 10px;
    font-weight: bold;
    display: inline-block;
    background-color: #eee;
    padding: 15px 20px;
    text-transform: uppercase;
    color: #222;
    text-decoration: none;
}
.admin-nav{
    margin-top: 20px;
}
.admin-btn.success{
    background-color: #61eb34;
    color: #FFF !important;
    transition: all 0.4s;
}
.admin-btn.success:hover{
    transition: all 0.4s;
    background-color: #4ec228;
}
.admin-btn.danger{
    background-color: #eb3a34;
    color: #FFF !important;
    transition: all 0.4s;
}
.admin-btn.success:hover{
    transition: all 0.4s;
    background-color: #c7342f;
}
.admin-btn.edit{
    background-color: #eb9634;
    color: #FFF !important;
    transition: all 0.4s;
}
.admin-btn.edit:hover{
    transition: all 0.4s;
    background-color: #cc802a;
}
</style>