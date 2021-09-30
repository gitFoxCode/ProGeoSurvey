<template>
    <section class="hero">
        <section class="info">
            <div class="info__col">
                <img class="logo" src="~@/assets/images/progeosurvey-logo.svg" alt="ProGeoSurvey Logotyp">
                <span class="text">
                    <p>Firma geodezyjna <strong>PRO GEO SURVEY</strong> świadczy usługi na terenie całej Polski. Siedziba firmy jest w Warszawie z filiami w <strong>Warszawie, Łodzi i Gdańsku</strong>.  Działalność na rynku geodezyjnym prowadzimy od 2013 roku. Od 2019 roku firma została przekształcona w spółkę z o.o. Specjalizujemy się w kompleksowej geodezyjnej obsłudze inwestycji budowlanych. Przy wykonywaniu prac posługujemy się instrumentami wyłącznie renomowanych producentów. Ofertę kierujemy do Generalnych Wykonawców oraz Inwestorów, wykonujących między innymi budynki mieszkalne, obiekty handlowo-usługowe, przemysłowe, biurowe, użyteczności publicznej i inne. Zapewniamy kompleksową pomoc i wsparcie naszym Klientom na każdym etapie prac budowlanych. W przypadku wszechstronnej obsługi inwestycji przez geodetę prace na terenie budowy przebiegają w sposób sprawny. Nad pracami czuwa wykwalifikowana kadra z wieloletnim doświadczeniem, przy wsparciu najnowocześniejszych technologii. Wszystkie działania podejmowane są zgodnie z obowiązującymi przepisami oraz wytycznymi. Gwarantujemy rzetelną informację z wszystkich przeprowadzonych prac i współpracę z kierownikami budowy. Posiadamy ubezpieczenie na kwotę <strong>1 000 000 zł</strong>. W PRO GEO SURVEY pracuje 15 geodetów.</p>
                    <a href="#" class="primary-btn">Czytaj więcej</a>
                </span>
                
            </div>
            <div class="info__col">
                <section class="countercard">
                    <div class="counter">
                        <span class="counter__number">
                            {{ realizations || 0 }}
                        </span>
                        <span class="counter__title">
                            Zrealizowanych projektów
                        </span>
                    </div>
                    <div class="counter">
                        <span class="counter__number">
                            {{ references || 0 }}
                        </span>
                        <span class="counter__title">
                            Referencji
                        </span>
                    </div>
                    <div class="counter">
                        <span class="counter__number">
                            100%
                        </span>
                        <span class="counter__title">
                            Satysfakcji
                        </span>
                    </div>
                </section>
            </div>
        </section>
        <section class="realisations" v-if="realization">
            <NuxtLink to="/realizacje" tag="article" class="card">
                <div class="card__image">
                    <img :src="require(`assets/realizations/${realization.imgs[0]}`)" :alt="realization.title">
                    <span class="card__title">Ostatnie <span class="special-text">realizacje</span></span>
                </div>
                <span class="card__name"> {{ realization.title }} </span>
                <div class="card__fields">
                    <div class="card__field" v-if="realization.localization">
                        <span class="card__field__title">Lokalizacja</span>
                        <span class="card__field__value">{{ realization.localization }}</span>
                    </div>
                    <div class="card__field">
                        <span class="card__field__title">Data</span>
                        <span class="card__field__value">{{ realization.date }}</span>
                    </div>
                </div>
            </NuxtLink>
        </section>
    </section>
</template>

<script>

export default {
    computed: {
        realizations(){
            return this.$store.state.realizations.length
        },
        references(){
            return this.$store.state.references.length
        },
        realization(){
            return this.$store.getters.getLastRealization()
        }
    }
}
</script>

<style scoped>
.logo{
    width: 500px;
    max-width: 100%;
}
.card__fields{
    display: flex;
    padding: 0 30px;
    justify-content: space-between;
    color: #FFFFFF;
    width: 90vw;
    max-width: 100%;
    margin-top: 20px;
}
.card__field__title{
    font-size: 0.9em;
}
.card__field__value{
    margin-top: 10px;
    font-weight: 600;
}
.card__field{
    display: flex;
    flex-direction: column;
}
.card__field:last-of-type{
    text-align: right;
}
.card__name{
    font-size: 2em;
    color: #FFFFFF;
    font-weight: 800;
    text-transform: uppercase;
    margin-top: 20px;
}
.card{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    height: 600px;
    background-color: #1D1D1D;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: rgba(29, 29, 29, 0.4) 5px -5px, 
    rgba(29, 29, 29, 0.3) 10px -10px, 
    rgba(29, 29, 29, 0.2) 15px -15px, 
    rgba(29, 29, 29, 0.1) 20px -20px, 
    rgba(29, 29, 29, 0.05) 25px -25px;
    transition: all 0.4s;
    cursor: pointer;
}
.card:hover{
    transform: rotate(-1deg);
    transition: all 0.4s;
    box-shadow: rgba(29, 29, 29, 0.4) 10px -10px, 
    rgba(29, 29, 29, 0.3) 15px -15px, 
    rgba(29, 29, 29, 0.2) 20px -20px, 
    rgba(29, 29, 29, 0.1) 25px -25px, 
    rgba(29, 29, 29, 0.05) 30px -30px;
}
.card__image{
    text-align: center;
    position: relative;
}
.card img{
    width: 500px;
    height: 450px;
    object-fit: cover;
}
.card__title{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 15px 50px;
    padding-top: 20px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    font-weight: 800;
    text-transform: uppercase;
    font-size: 1.2em;
    background-color: #1D1D1D;
    margin-top: -100%;
    color: #FFFFFF;
    white-space: nowrap;
}
.special-text{
    color: #FECF45
}
.hero{
    width: 100%;
    min-height: 100vh;
    background: #eeeeee url('~@/assets/images/hero-background.webp') no-repeat center;
    background-size: cover; 
    display: flex;
    flex-wrap: wrap;
    padding: 0 10vw;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    padding-bottom: 70px;
    padding-top: 50px;
}
h1{
    font-size: 36px; /* Some tweener fallback that doesn't look awful */ 
    font-size: 7vw;  
}
.undertitle{
    font-size: 1.6em;
    font-weight: 600;
}
.info{
    min-width: 0
}
.info__col .text{
    padding: 20px;
    background-color: rgba(255,255,255,0.5);
    font-size: 1em;
    line-height: 140%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 1000px;
    margin-top: 10px;
}
.primary-btn{
    margin-top: 50px;
}
.countercard{
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #FFFFFF;
    margin-top: 50px;
    outline: 2px solid #FFFFFF;
    outline-offset: 2px; 
}
.counter{
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    color: #222222;
    margin: 20px 0;
    position: relative;
    padding-left: 10px;
}
.counter::after{
    content: "";
    position: absolute;
    top: 50%;
    left: -10px;
    width: 1px;
    height: 50%;
    background-color: #CCCCCC;
    transform: translateY(-50%)
}
.counter:first-of-type{
    padding-left: 0;
}
.counter:first-of-type::after{
    display: none;
}
.counter__number{
    text-align: center;
    font-size: 2em;
    font-weight: bold;
}
.counter__title{
    margin-top: 10px;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    max-width: 14ch;
}
.realisations{
    margin: 50px 0;
}
@media (min-width: 1260px) {
    .hero{
        flex-wrap: nowrap;
        font-size: 16px;
    }
    .info{
        margin-right: 50px;
    }
    .realisations{
        width: auto;
        margin-left: 50px;
    }
    .countercard{
        display: inline-flex;
    }
}
@media (min-width: 768px){
    .countercard{
        flex-direction: row;
    }
    .counter{
        margin: 20px;
    }
}
</style>
