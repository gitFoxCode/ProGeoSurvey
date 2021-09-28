<template>
   <div v-if="realization" class="container">
        <span class="title">{{ realization.title }}</span>
        <span class="badge">{{ realization.badge }}</span>
        <div class="cards">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(image, id) in realization.imgs" :key="id" class="card">
                    <img :src="require(`assets/realizations/${image}`)" :alt="'Zdjęcie z galerii dla' + realization.title" @click="showMultiple(id)">
                </swiper-slide>
            </swiper>
            <div class="swiper-pagination" slot="pagination"></div>
        </div>
        <client-only placeholder="loading...">
            <vue-easy-lightbox
                escDisabled
                :moveDisabled="true"
                :visible="visible"
                :imgs="realization.imgs.map((img)=>  `../_nuxt/assets/realizations/${img}`)"
                :index="index"
                @hide="handleHide"
            ></vue-easy-lightbox>
        </client-only>
        <p v-if="realization.description != ''" class="description"> {{ realization.description }} </p>
        <div class="informations" v-if="realization.hasOwnProperty('content')">
            <ul>
                <li>
                    <span class="informations__title"><svg-icon icon="object"/> Obiekt</span>
                    <span class="informations__value">{{ realization.content.obiekt }}</span>
                </li>
                <li>
                    <span class="informations__title"><svg-icon icon="investor"/> Inwestor</span>
                    <span class="informations__value">{{ realization.content.inwestor }}</span>
                </li>
                <li>
                    <span class="informations__title"><svg-icon icon="worker"/> Generalny wykonawca</span>
                    <span class="informations__value">{{ realization.content.wykonawca }}</span>
                </li>
                <li>
                    <span class="informations__title"><svg-icon icon="document"/>Rodzaj pracy</span>
                    <span class="informations__value">{{ realization.content.rodzaj }}</span>
                </li>
                <li>
                    <span class="informations__title"><svg-icon icon="work"/> Zakres robót</span>
                    <span class="informations__value">{{ realization.content.zakres }}</span>
                </li>
                <li>
                    <span class="informations__title"><svg-icon icon="time"/> Czas realizacji</span>
                    <span class="informations__value">{{ realization.content.czas }}</span>
                </li>
                <li>
                    <span class="informations__title"><svg-icon icon="calendar"/> Data rozpoczęcia inwestycji</span>
                    <span class="informations__value">{{ realization.content.data }}</span>
                </li>
            </ul>
            <div class="map">
                <iframe :src="`${realization.content.mapa}`" 
                width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
        </div>
   </div>
    <div v-else class="container padding">
        STRONA NIEZNALEZIONA
    </div>
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
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination'
                },
                slidesPerView: 'auto',
                autoplay: {
                    "delay": 5500
                }
            },
            visible: false,
            index: 0
        }
    },
    computed: {
        realization() {
            return this.$store.getters.getRealizationByLink(this.$route.params.id)
        }
    },
    methods: {
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
        title: 'Realizacje | ProGeoSurvey - Geodezja',
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'description',
            name: 'description',
            content: 'My custom description'
          }
        ]
      }
    }
}
</script>

<style scoped>
.swiper-pagination{
    position: absolute;
    left: 50%;
    bottom: -50px;
    transform: translate3d(0,0,0) translateX(-50%);
}
.map{
    margin-top: 50px;
}
.container{
    padding: 0 10%;
    margin-top: 120px;
    padding-bottom: 100px;
}
.cards{
    display: flex;
    justify-content: center;
    margin-top: 100px;
    margin-bottom: 100px;
    position: relative;
}
.card{
    width: 320px;
    height: 440px;
    background-color: #1D1D1D;
    border-radius: 5px;
    margin: 0 50px;
    transition: all 0.4s;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.card:hover{
    transition: all 0.4s;
    box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
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
.title{
    font-weight: bold;
    font-size: 3em;
}
.badge{
    display: block;
    margin-top: 20px;
    color: #444;
}
.description{
    margin-top: 50px;
}
.informations{
    margin-top: 20px;
    line-height: 120%;
}
.informations__title{
    font-weight: bold;
    text-transform: uppercase;
}
ul{
    color: #111;
}
li{
    margin-top: 10px;
}
li .icon{
    margin-right: 5px;
}
</style>