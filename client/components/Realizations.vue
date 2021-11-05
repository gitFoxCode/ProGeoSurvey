<template>
    <section class="realizations">
        <h2 class="title" data-title="realizacje">Realizacje</h2>
        <section class="cards">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(item, id) in list" :key="id" class="card">
                    <NuxtLink :to="item.link">
                        <img :src="require(`~/assets/realizations/${item.imgs[0]}`)" :alt="item.title">
                        <span class="card__badge">{{ item.badge.split('>')[0] }}</span>
                        <span class="card__title">{{ item.title }}</span>
                        <span class="card__date">{{ item.date }}</span>
                    </NuxtLink>
                </swiper-slide>
            </swiper>
        </section>
        <div class="swiper-pagination" slot="pagination"></div>
        <NuxtLink to="/realizacje" class="primary-btn">Pokaż więcej</NuxtLink>
    </section>
</template>

<script>
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
    name: 'carrousel',
    data() {
      return {
        swiperOptions: {
             pagination: {
                el: '.swiper-pagination'
            },
            slidesPerView: 'auto',
            autoplay: {
                "delay": 5500
            },
            grabCursor: true,
            lazy: true
        }
      }
    },
    computed: {
        list(){
            return this.$store.state.realizations
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
.realizations{
    padding-top: 100px;
    text-align: center;
    background-color: #F6F6F6
}
.title{
    margin-bottom: 50px;
}
.cards{
    display: flex;
    justify-content: center;
    margin-top: 100px;
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
    height: 350px;
    object-fit: cover;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    z-index: 1;
}
.card__badge{
    display: inline-block;
    position: relative;
    top: -20px;
    font-size: 0.9em;
    border-radius: 30px; 
    padding: 10px 20px;
    background-color: #FECF45;
    text-transform: uppercase;
    font-weight: bold;
    z-index: 2;
    text-align: center;
    color: #111;
}
.card__title{
    display: block;
    text-align: center;
    font-size: 1em;
    color: #FFFFFF;
    font-weight: bold;
}
.card__date{
    display: block;
    text-align: center;
    color: #B1B1B1;
    margin-top: 10px;
    font-size: 0.9em;
}
.primary-btn{
    margin-top: 150px;
    margin-bottom: 100px;
}
</style>
