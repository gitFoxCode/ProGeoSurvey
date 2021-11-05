<template>
  <section class="realizations">
      <h1>Realizacje</h1>
      <nav class="admin-nav">
          <a href="#" class="admin-btn success"><svg-icon icon="plus"/> Dodaj</a>
      </nav>
      <nuxt-link :to="`/realizacje/${realization.link}`"
        v-for="(realization, id) in realizations" 
        :key="id">
        <article class="article" :data-date="realization.date" >
            <div class="column">
                <img class="article__img" :src="require(`~/assets/realizations/${realization.imgs[0]}`)">
            </div>
            <div class="column">
                <h2 class="article__title">{{ realization.title }}</h2>
                <p class="article__text">{{ realization.description }}</p>
                <span class="article__badge">{{ realization.badge }}</span>
            </div>
        </article>
      </nuxt-link>
  </section>
</template>

<script>
export default {
    computed: {
        realizations(){
            return this.$store.state.realizations
        }
    },
   head() {
      return {
        title: 'Realizacje'
      }
    }
}
</script>

<style scoped>
.realizations{
    padding: 0 10%;
    padding-top: 120px;
    padding-bottom: 150px;
}
.realizations a{
    text-decoration: none;
    color: #111;
}
.article__img{
    width: 100px;
    height: 100px;
    border-radius: 100%;
    object-fit: cover;
    border: 2px solid #FECF45;
}
h1{
    font-weight: 900;
    font-size: 3em;
    color: #111;
    text-transform: uppercase;
}
.article:first-of-type{
    margin-top: 50px;
}
.article{
    margin-top: 10px;
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: #eee;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
}
.article::after{
    content: attr(data-date);
    position: absolute;
    right: 10%;
    top: 50%;
    font-size: 5em;
    font-weight: bold;
    opacity: 0.1;
    transform: translateY(-50%);
}
.article__title{
    font-weight: bold;
    font-size: 1.2em;
}
.article__text{
    margin-top: 10px;
    line-height: 120%;
}
.article__badge{
    color: #3B3B3B;
    display: block;
    margin-top: 20px;
}
.column:last-of-type{
    margin-left: 30px;
}
</style>