<template>
  <div>
    <section class="center" v-if="loggedIn">
        <div v-if='mode == "edit"'>
            <span class="admin-badge">Tryb: <svg-icon icon="edit"/> Edytowanie</span>
            <div class="center-inner">
                <p>Zdjęcia</p>
                <swiper :options="swiperOptions">
                <swiper-slide v-for="(image, id) in realization.imgs" :key="id" class="card">
                    <img :src="require(`assets/realizations/${image}`)" :alt="'Zdjęcie z galerii dla' + realization.title" @click="showMultiple(id)">
                </swiper-slide>
                </swiper>
                <div class="swiper-pagination" slot="pagination"></div>
            </div>
            <form @submit.prevent="handleSubmit">
                <label for="title">
                <span class="input__title required">Tytuł*</span>
                <div class="form-group">
                    <span><svg-icon icon="title"/></span>
                    <input class="form-field" type="text" placeholder="login" id="login" :value="realization.title" required>
                </div>
                </label>
                <label for="badge">
                <span class="input__title required">Kategoria*</span>
                <div class="form-group">
                    <span><svg-icon icon="category"/></span>
                    <input class="form-field" type="text" placeholder="Przykład > Kategorii" id="badge" :value="realization.badge" required>
                </div>
                </label>
                <label for="link">
                <span class="input__title required">Link (url)*</span>
                <div class="form-group">
                    <span><svg-icon icon="link"/></span>
                    <input class="form-field" type="text" placeholder="przykladowy-link" id="link" :value="realization.link" required>
                </div>
                </label>
                <label for="description">
                <span class="input__title">Opis</span>
                <div class="form-group">
                    <span><svg-icon icon="desc"/></span>
                    <input class="form-field" type="text" placeholder="Przykładowy opis..." id="description" :value="realization.description">
                </div>
                </label>
                <label for="date">
                <span class="input__title">Data (DD.MM.RRRR)</span>
                <div class="form-group">
                    <span><svg-icon icon="calendar"/></span>
                    <input class="form-field" type="text" placeholder="01.12.2001" id="date" :value="realization.date">
                </div>
                </label>
                <label for="localization">
                <span class="input__title">Lokalizacja</span>
                <div class="form-group">
                    <span><svg-icon icon="user"/></span>
                    <input class="form-field" type="text" placeholder="Warszawa" id="localization" :value="realization.localization">
                </div>
                </label>
                <label for="obiekt">
                <span class="input__title">Nazwa obiektu</span>
                <div class="form-group">
                    <span><svg-icon icon="object"/></span>
                    <input class="form-field" type="text" placeholder="Nazwa obiektu" id="obiekt" :value="realization.content.obiekt">
                </div>
                </label>
                <label for="inwestor">
                <span class="input__title">Inwestor</span>
                <div class="form-group">
                    <span><svg-icon icon="investor"/></span>
                    <input class="form-field" type="text" placeholder="Inwestor" id="inwestor" :value="realization.content.inwestor">
                </div>
                </label>
                <label for="wykonawca">
                <span class="input__title">Generalny wykonawca</span>
                <div class="form-group">
                    <span><svg-icon icon="worker"/></span>
                    <input class="form-field" type="text" placeholder="wykonawca" id="wykonawca" :value="realization.content.wykonawca">
                </div>
                </label>
                <label for="rodzaj">
                <span class="input__title">Rodzaj pracy</span>
                <div class="form-group">
                    <span><svg-icon icon="document"/></span>
                    <input class="form-field" type="text" placeholder="rodzaj" id="rodzaj" :value="realization.content.rodzaj">
                </div>
                </label>
                <label for="zakres">
                <span class="input__title">Zakres robót</span>
                <div class="form-group">
                    <span><svg-icon icon="work"/></span>
                    <input class="form-field" type="text" placeholder="zakres" id="zakres" :value="realization.content.zakres">
                </div>
                </label>
                <label for="czas">
                <span class="input__title">Czas realizacji</span>
                <div class="form-group">
                    <span><svg-icon icon="time"/></span>
                    <input class="form-field" type="text" placeholder="czas" id="czas" :value="realization.content.czas">
                </div>
                </label>
                <label for="data">
                <span class="input__title">Data rozpoczęcia (Miesiąc, rok)</span>
                <div class="form-group">
                    <span><svg-icon icon="calendar"/></span>
                    <input class="form-field" type="text" placeholder="data" id="data" :value="realization.content.data">
                </div>
                </label>
                <label for="mapa">
                <span class="input__title">Mapa (link)</span>
                <div class="form-group">
                    <span><svg-icon icon="map"/></span>
                    <input class="form-field" type="text" placeholder="mapa" id="mapa" :value="realization.content.mapa">
                </div>
                </label>

                <button type="submit">Zapisz</button>
            </form>
            
        </div>
        <div v-if='mode == "delete"'>
            USUWANIE
        </div>
    </section>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data(){
    return {
      mode: this.$route.params.id.split("-")[0],
      // !$auth.loggedIn
      loggedIn: true,
      username: '',
      password: '',
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
        realization() {
            return this.$store.getters.getRealizationById(this.$route.params.id.split("-")[1])
        }
    },
  head() {
    return {
      title: 'Panel Administracyjny'
    }
  }
}
</script>

<style scoped>
form{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 100px;
    margin-bottom: 100px;
    padding: 0 100px;
}
.admin-badge{
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    padding: 10px 20px;
    background-color: rgb(255, 106, 106);
    z-index: 9999999999;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
.input__title{
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
    color: #222;
}
.input__title.required{
    color: rgb(119, 25, 25) !important;
}
.center-inner{
    padding: 0 10%;
    padding-top: 100px;
    display: flex;
}
.center-inner p{
    font-weight: bold;
}
label{
    display: block;
    margin: 0 20px;
    margin-top: 30px;
}
.center{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
button{
    padding: 15px 16px;
    border-radius: 6px;
    width: 100%;
    margin-top: 20px;
    border: none;
    background-color: #78a0ff;
    font-weight: bold;
    font-family: "Poppins";
    cursor: pointer;
    transition: all 0.4s;
    color: #fff;
}
button:hover, button:focus{
    background-color: #4c81fc;
    transition: all 0.4s;
}
.form-field {
  display: block;
  width: 100%;
  padding: 8px 16px;
  line-height: 25px;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  border-radius: 6px;
  -webkit-appearance: none;
  color: #2c2f36;
  border: 1px solid #CDD9ED;
  background: #EEF4FF;
  transition: border 0.3s ease;
}
.form-field::-moz-placeholder {
  color: #CBD1DC;
}
.form-field:-ms-input-placeholder {
  color: #CBD1DC;
}
.form-field::placeholder {
  color: #CBD1DC;
}
.form-field:focus {
  outline: none;
  border-color: #275EFE;
}

.form-group {
  position: relative;
  display: flex;
  width: 100%;
}
.form-group > span,
.form-group .form-field {
  white-space: nowrap;
  display: block;
}
.form-group > span:not(:first-child):not(:last-child),
.form-group .form-field:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.form-group > span:first-child,
.form-group .form-field:first-child {
  border-radius: 6px 0 0 6px;
}
.form-group > span:last-child,
.form-group .form-field:last-child {
  border-radius: 0 6px 6px 0;
}
.form-group > span:not(:first-child),
.form-group .form-field:not(:first-child) {
  margin-left: -1px;
}
.form-group .form-field {
  position: relative;
  z-index: 1;
  flex: 1 1 auto;
  width: 1%;
  margin-top: 0;
  margin-bottom: 0;
}
.form-group > span {
  text-align: center;
  padding: 8px 12px;
  font-size: 14px;
  line-height: 25px;
  color: #99A3BA;
  background: #EEF4FF;
  border: 1px solid #CDD9ED;
  transition: background 0.3s ease, border 0.3s ease, color 0.3s ease;
}
.form-group:focus-within > span {
  color: #fff;
  background: #678EFE;
  border-color: #275EFE;
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
</style>