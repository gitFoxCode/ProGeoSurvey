<template>
    <section class="contact" id="kontakt">
        <h2 class="title" data-title="Kontakt">Kontakt</h2>
        <div class="contact-inner">
            <div class="contact__col">
                <span class="title">Współpraca</span>
                <p class="text">Jeśli są Państwo zainteresowani współpracą z PRO GEO SURVEY, chcą dowiedzieć się dlaczego warto podjąć współpracę właśnie z nami to zapraszam do kontaktu, przedstawimy szczegółowy zakres usług naszej firmy.</p>
                <div class="contact__content">
                    <div class="contact__card">
                        <span class="card__title">
                            Dane kontaktowe
                        </span>
                        <ul class="card__content">
                            <li><svg-icon icon="phone"/> +48 669 405 001</li>
                            <li><svg-icon icon="email"/> biuro@pro-geo.pl</li>
                            <li><svg-icon icon="www"/> pro-geo.pl</li>
                        </ul>
                    </div>
                    <div class="contact__card">
                        <span class="card__title">
                            Siedziba biura
                        </span>
                        <ul class="card__content">
                            <li><svg-icon icon="localization"/> ul. Słomińskiego 1, 1 piętro biuro nr. 1</li>
                        </ul>
                    </div>
                    <div class="contact__card">
                        <span class="card__title">
                            Dane adresowe
                        </span>
                        <ul class="card__content">
                            <li>
                                <svg-icon icon="localization"/>
                                <p>ProGeoSurvey</p>
                                <p>Filip Kołodziejak</p>
                                <p>ul. Marmonicka 83/87 lok. 34</p>
                                <p>01 - 802 Warszawa</p>
                            </li>
                        </ul>
                    </div>
                    <div class="contact__card">
                        <span class="card__title">
                            Dane adresowe
                        </span>
                        <ul class="card__content">
                            <li>
                                <svg-icon icon="adress-book"/>
                                <p>NIP 52785218181</p>
                                <p>REGON 14545481818</p>
                            </li>
                        </ul>
                    </div>
                </div>  
                <section class="small-slider">
                    <span class="slider__title">Zaufali nam już</span>
                    <div class="slider">
                        <swiper :options="swiperOptions">
                            <swiper-slide v-for="(logo, id) in logoList" :key="id">
                                <img :src="require(`~/assets/clients-logo/${logo}`)" :alt="logo" data-not-lazy/>
                            </swiper-slide>
                        </swiper>
                    </div>
                </section>
            </div>
            <div class="contact__col">
                <!-- MAPA -->
                <GmapMap
                    :center="{lat:10, lng:10}"
                    :zoom="7"
                    map-type-id="terrain"
                    style="width: 100%; height: 100%; min-height: 300px"
                    >
                <!--  <GmapMarker
                        :key="index"
                        v-for="(m, index) in markers"
                        :position="m.position"
                        :clickable="true"
                        :draggable="true"
                        @click="center=m.position"
                    />-->
                    </GmapMap>
            </div>
        </div>
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
        logoList: [],
        swiperOptions: {
            slidesPerView: 'auto',
            loop: "true",
            loopFillGroupWithBlank: "true",
            autoplay: {
                "delay": 1500
            }
        }
      }
    },
    mounted() {
        this.importAll(require.context('../assets/clients-logo/', true, /(\.png$|\.jpg$)/));
    },
    methods: {
        importAll(r) {
            r.keys().forEach(key => {
                this.logoList.push(key.replace('./', ''))
            });
        },
    }
  }
</script>

<style>
.swiper-wrapper{
    display: flex !important;
    align-items: center !important;
}
</style>
<style scoped>
.swiper-slide{
    max-width: 100px;
    max-height: 100px;
    margin: 0 30px;
}
.swiper-slide:first-of-type{
    margin-left: 10px;
}
.slider img{
    max-width: 100px;
    max-height: 100px;
    object-fit: cover;
}
.contact{
    padding: 90px 20px;
    background-color: #FECF45;
    clip-path: polygon(0 0, 100% 3%, 100% 100%, 0 100%);
    margin-top: -20px;
    z-index: 2;
}
h2.title::before{
    content: attr(data-title);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    color: #DEA500;
    z-index: -1;
    letter-spacing: 10px;
    font-size: 1.5em;
    opacity: 0.2;
}
span.title{
    font-weight: bold;
    text-transform: uppercase;
}
.contact__col{
    margin-top: 50px;
}
.text{
    line-height: 130%;
    margin-top: 10px;
}
.card__title{
    font-weight: bold;
    text-transform: uppercase;
}
.card__content{
    font-weight: 500;
    margin-top: 5px;
}
.contact__card{
    margin-top: 20px;
}
.slider__title{
    font-weight: 900;
    text-transform: uppercase;
    color: #222222;
    font-size: 1.2em;
}
.small-slider{
    margin-top: 50px;
}
.card__content li{
    margin-top: 5px;
    line-height: 150%;
}
.card__content p:first-of-type{
    display: inline
}
.slider{
    padding: 20px;
    background-color: #FFFFFF;
    margin-top: 20px;
}
.contact__content{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.contact__col{
    max-width: 1000px;
}
.contact-inner{
    max-width: 2000px;
    margin: 0 auto;
    padding: 0 10%;
}
@media (min-width: 768px){
    .contact__content{
        display: flex;
    }
}
@media (min-width: 1260px){
    .contact__card{
        margin: 20px 30px;
    }
    .contact__col{
        width: 100%;
        max-width: 50%;
    }
    .contact__col:first-of-type{
        padding-right: 5%;
    }
    .contact__col:last-of-type{
        padding-left: 5%;
    }
    .contact-inner{
        display: flex;
        justify-content: center;
    }
}
</style>
