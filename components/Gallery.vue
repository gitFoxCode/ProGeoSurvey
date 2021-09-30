<template>
    <section class="gallery">
        <h2 class="title" data-title="Galeria">Galeria</h2>
        <section class="cards">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(image, id) in images" :key="id" class="card">
                    <img :src="`${image}`" :alt="'Zdjęcie z galerii'" @click="showMultiple(id)">
                </swiper-slide>
            </swiper>
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
        <div class="swiper-pagination3" slot="pagination"></div>
        <a href="#" class="primary-btn">Pokaż więcej</a>
    </section>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    VueEasyLightbox,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
            images: [],
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination3',
                    type: "fraction"
                },
                slidesPerView: 'auto',
                autoplay: {
                    "delay": 5500
                },
                grabCursor: true,
                lazy: true
            },
            visible: false,
            index: 0   // default: 0
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
      this.index = i  // index of imgList
      this.show()
    },
    show() {
      this.visible = true
    },
    handleHide() {
      this.visible = false
    }
  }
}
</script>

<style scoped>
.gallery{
    background-color: #F6F6F6;
    /* clip-path: polygon(0 3%, 100% 0, 100% 100%, 0 100%); */
    position: relative;
    padding-top: 150px;
    text-align: center;
    margin-top: 50px;
    padding-bottom: 150px;
}
.card{
    width: 320px;
    height: 440px;
    background-color: #1D1D1D;
    border-radius: 5px;
    margin: 0 50px;
    cursor: pointer;
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
}
.primary-btn{
    margin-top: 100px;
}
.swiper-pagination3{
    margin-top: 100px;
}
</style>
