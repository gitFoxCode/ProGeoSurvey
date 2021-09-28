<template>
  <section class="section">
        <h1>Referencje</h1>
        <section class="cards">
            <a :href="`/references/${item.pdf}.pdf`" class="card" v-for="(item, id) in realizations" :key="id">
                <img :src="require(`~/assets/references/${item.pdf}-1.jpg`)" :alt="'Referencja firmy '+ item.author">
                <div class="card__title">{{ item.author }}</div>
            </a>
        </section>
        <div class="swiper-pagination" slot="pagination"></div>
  </section>
</template>

<script>
export default {
    computed: {
        realizations(){
            return this.$store.state.references
        }
    }
  }
</script>

<style scoped>
.section{
    padding: 0 10%;
    padding-top: 120px;
    color: #111111;
    padding-bottom: 160px;
}
h1{
    font-weight: 900;
    font-size: 3em;
    color: #111;
    text-transform: uppercase;
}
.card{
    display: block;
    width: 320px;
    height: 440px;
    background-color: #1D1D1D;
    border-radius: 5px;
    margin: 0 50px;
    margin-top: 100px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
a{
    text-decoration: none;
}
.card img{
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    z-index: 1;
}
.card__title{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 120%;
    transform: translateY(100%);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1em;
    color: #FFFFFF;
    font-weight: bold;
    margin-top: 20px;
    z-index: 2;
    background-color: #1D1D1D;
    opacity: 0.5;
    transition: all 0.4s;
}
.card:hover .card__title{
    transform: translateY(-5%);
    opacity: 1;
    transition: all 0.4s;
}
.cards{
    display: flex;
    justify-content: center;
    margin: 50px 0;
    flex-wrap: wrap;
}
</style>