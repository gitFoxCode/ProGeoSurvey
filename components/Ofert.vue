<template>
    <section class="ofert">
        <h2 class="title" data-title="Oferta">Oferta</h2>
        <p>Posiadamy <strong>wieloletnie doświadczenie</strong> przy obsłudze geodezyjnej dużych inwestycji budowlanych. Dzięki zastosowaniu nowoczesnej technologii oraz odpowiedniego oprogramowania jesteśmy w stanie zrealizować każde zadanie. Posiadamy <strong>najlepszy i najdokładniejszy</strong> sprzęt do pomiarów szwajcarskiej firmy <strong>Leica Geosystems</strong></p>
        <section class="cards">
            <div class="cards__column">
                <NuxtLink to="/oferta">
                    <div class="card">
                        <svg-icon icon="geo"/>
                        <span class="card__title">Obsługa geodezyjna</span>
                    </div>
                </NuxtLink>
                <NuxtLink to="/oferta">
                    <div class="card">
                        <svg-icon icon="drone"/>
                        <span class="card__title">Filmowanie z powietrza dronem</span>
                    </div>
                </NuxtLink>
                <NuxtLink to="/oferta">
                    <div class="card">
                        <svg-icon icon="scan"/>
                        <span class="card__title">Monitoring strukturalny</span>
                    </div>
                </NuxtLink>
                <NuxtLink to="/oferta">
                    <div class="card">
                        <svg-icon icon="laser"/>
                        <span class="card__title">Skaning laserowy</span>
                    </div>
                </NuxtLink>
            </div>
            <div class="cards__alone">
                <NuxtLink to="/oferta">
                    <div class="card">
                        <svg-icon icon="click"/>
                        <span class="card__title">Sprawdź całą ofertę</span>
                    </div>
                </NuxtLink>
            </div>
        </section>
    </section>
</template>

<script>
export default{

}
</script>

<style scoped>
.ofert{
    background-color: #FFFFFF;
    position: relative;
    z-index: 1;
    padding-top: 100px;
    padding-bottom: 170px;
}
.ofert::after{
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
.ofert::before{
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
p{
    text-align: center;
    line-height: 150%;
    max-width: 1000px;
    margin: 50px auto;
    margin-top: 30px;
}
.cards{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.card{
    position: relative;
    width: 150px;
    height: 150px;
    z-index: 1;
    margin: 60px 0;
    text-align: center;
}
.card .icon{
    margin-top: 30px;
    font-size: 4em;
}
.card__title{
    position: absolute;
    z-index: 1;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    font-weight: bold;
    text-transform: uppercase;
    color: #222222;
    text-align: center;
    padding: 10px 20px; 
    word-wrap: break-word;
    background-color: #FFFFFF;
    border: 3px solid #FECF45;
    white-space: nowrap;
}
.card::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 150px;
    height: 150px;
    background-color: #FECF45;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    z-index: -1;
}
.card::before{
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    opacity: 0.5;
    transform: translate(-50%, -50%);
    background-color: #FECF45;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    z-index: -1;
    transition: all 0.3s ease-in-out;
}
.card:hover.card::before{
    transform: translate(-50%, -50%) scale(1.1);
    transition: all 0.3s ease-in-out;
}
.cards__column{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.cards__column a{
    color: #222;
}
.card{
    margin: 50px 100px;
}
@media (min-width: 768px){
    .cards__column{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .card{
        margin-top: 30px;
    }
    .cards__alone{
        margin-top: 60px;
    }
}
@media (min-width: 1260px){
    .ofert{
        background: url('~@/assets/images/bg-1.svg') 110% 45%, url('~@/assets/images/bg-2.svg') -10% 60%;
        background-repeat: no-repeat;
    }
    .card{
        margin: 0;
        margin-top: 30px;
    }
    .cards__column{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 80%;
        max-width: 1220px;
        position: relative;
    }
    .cards__column::after{
        content: "";
        position: absolute;
        top: 58%;
        left: 0;
        width: 100%;
        height: 5px;
        background-color: #FECF45;
        transform: translateY(-50%)
    }
    .cards__column::before{
        content: "";
        position: absolute;
        top: 55%;
        left: 50%;
        width: 5px;
        height: 100%;
        background-color: #FECF45;
        transform: translateX(-50%)
    }
}
</style>
