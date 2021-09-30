<template>
  <section class="section">
        <h1>Galeria</h1>
        <section class="cards">
            <div class="card" v-for="(image, id) in images" :key="id">
                <img :data-src="image" alt="" title="" v-lazy-load @click="showMultiple(id)">
            </div>
        </section>
        <client-only placeholder="loading...">
            <vue-easy-lightbox
                escDisabled
                :moveDisabled="true"
                :visible="visible"
                :imgs="images"
                :index="index"
                @hide="handleHide"
            ></vue-easy-lightbox>
        </client-only>
  </section>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'
export default {
  components: {
    VueEasyLightbox
  },
  data() {
    return {
      images: [],
      visible: false,
      index: 0 
    }
  },
  mounted() {
      this.importAll(require.context('../assets/realizations/', true, /(\.png$|\.jpg$|\.jpeg$)/));
  },
  methods: {
      importAll(r) {
          r.keys().forEach(key => {
              this.images.push(r(key))
          });
      },
      showMultiple(i) {
        this.index = i
        this.show()
      },
      show() {
        this.visible = true
      },
      handleHide() {
        this.visible = false
      }
  },
  head() {
    return {
      title: `Galeria`
    }
  }
}
</script>

<style scoped>
.section{
    padding: 0 10%;
    padding-top: 120px;
    color: #111111;
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
.card img{
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    z-index: 1;
}
.cards{
    display: flex;
    justify-content: center;
    margin: 50px 0;
    flex-wrap: wrap;
}
</style>