<template>
    <section class="references">
        <h2 class="title" data-title="Referencje">Referencje</h2>
        <section class="cards">
            <swiper :options="swiperOptions">  
                <swiper-slide v-for="(item, id) in list" :key="id" class="card">
                    <a :href="`/references/${item.pdf}.pdf`" >
                        <img :src="require(`~/assets/references/${item.pdf}-1.jpg`)" :alt="'Referencja firmy '+ item.author">
                        <span class="card__title">{{ item.author }}</span>
                    </a>
                </swiper-slide>
            </swiper>
        </section>
        <div class="swiper-pagination2" slot="pagination"></div>
        <nuxt-link to="referencje" class="primary-btn">Pokaż więcej</nuxt-link>
    </section>
</template>

<script>
import APIService from '@/services/ApiService'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
    data() {
      return {
        swiperOptions: {
             pagination: {
                el: '.swiper-pagination2'
            },
            slidesPerView: 'auto',
            autoplay: {
                "delay": 5500
            }
        }
      }
    },
    computed: {
        list(){
            return this.$store.state.references
        }
    }
  }
</script>

<style scoped>
a{
    text-decoration: none;
}
.swiper-pagination{
    margin-top: 50px;
    left: 50%;
    transform: translateX(-50%) translate3d(0, 0, 0)
}
.references{
    background-color: #FFFFFF;
    position: relative;
    z-index: 1;
    text-align: center;
    padding-top: 150px;
    padding-bottom: 150px;
    background: url('~@/assets/images/bg-3.svg') -5% 90%, 
    url('~@/assets/images/bg-4.svg') 110% 40%;
    background-repeat: no-repeat;
}
.references::after{
    content: "";
    position: absolute;
    top: -15px;
    left: 0;
    width: 100vw;
    height: 150px;
    background: #FFFFFF;
    clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
    z-index: -1;
}
.references::before{
    content: "";
    position: absolute;
    top: -20px;
    left: 0;
    width: 100vw;
    height: 150px;
    background: #FECF45;
    clip-path: polygon(0 3%, 100% 0, 100% 100%, 0 100%);
    z-index: -1;
}
.card{
    width: 320px;
    height: 440px;
    background-color: #1D1D1D;
    border-radius: 5px;
    margin: 0 50px;
    margin-top: 100px;
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
    height: 350px;
    object-fit: cover;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    z-index: 1;
}
.card__title{
    display: block;
    text-align: center;
    font-size: 1em;
    color: #FFFFFF;
    font-weight: bold;
    margin-top: 20px;
}
.cards{
    display: flex;
    justify-content: center;
    margin: 50px 0;
}
.primary-btn{
    margin-top: 60px;
}
</style>
