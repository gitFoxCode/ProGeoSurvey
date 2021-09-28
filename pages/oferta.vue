<template>
  <section class="ofert">
      <h1>Oferta</h1>
      <article>
          <div class="column">
            <h2 class="ofert-title"><svg-icon icon="diamond"/> Geodezja inżynieryjno - przemysłowa</h2>
            <p>Posiadamy wieloletnie doświadczenie przy obsłudze geodezyjnej dużych inwestycji budowlanych. Dzięki zastosowaniu nowoczesnej technologii oraz odpowiedniego oprogramowania jesteśmy w stanie zrealizować każde zadanie. Posiadamy najlepszy i najdokładniejszy sprzęt do pomiarów szwajcarskiej firmy <strong>Leica Geosystems</strong>. </p>
            <ul class="ofert__list">
                <li><svg-icon icon="diamond"/> Geodezyjna obsługa inwestycji budowlanych</li>
                <li><svg-icon icon="diamond"/> Pomiary przemieszczeń i odkształceń</li>
                <li><svg-icon icon="diamond"/> Pełnienie nadzoru geodezyjnego </li>
                <li><svg-icon icon="diamond"/> Pomiary powierzchni i kubatury</li>
                <li><svg-icon icon="diamond"/> Pomiary objętości mas ziemi</li>
                <li><svg-icon icon="diamond"/> Pomiary pionowości</li>
            </ul>
          </div>
          <div class="column column-card">
              <div class="card">
                  <img src="@/assets/realizations/stare-miasto.jpeg" alt="Zdjecie">
              </div>
          </div>
      </article>
      <article>
        <div class="column column-card">
            <div class="card">
                  <img src="@/assets/realizations/stare-miasto.jpeg" alt="Zdjecie">
              </div>
        </div>
        <div class="column">
            <h2 class="ofert-title">Geodezja klasyczna <svg-icon icon="diamond"/></h2>
            <p>Usługi które oferujemy obejmują wszystkie możliwe prace z zakresu geodezji. Pomożemy i doradzimy w każdym problemie. Dzięki kilkunastoletniego doświadczania nie zaskoczy nas żadne zlecenie.</p>
            <ul>
                <li>Tyczenie obiektów budowlanych <svg-icon icon="diamond"/></li>
                <li>Inwentaryzacje powykonawcze <svg-icon icon="diamond"/></li>
                <li>Mapy do celów projektowych <svg-icon icon="diamond"/></li>
                <li>Mapy tematyczne <svg-icon icon="diamond"/></li>
                <li>Podziały nieruchomości <svg-icon icon="diamond"/></li>
                <li>Dokumentacja do celów prawnych <svg-icon icon="diamond"/></li>
                <li>Uzgodnienia ZUD <svg-icon icon="diamond"/></li>
                <li>Wznowienia granic <svg-icon icon="diamond"/></li>
                <li>Pomiary na terenach zamkniętych, PKP, wojskowych <svg-icon icon="diamond"/></li>
            </ul>
        </div>
      </article>
      <article>
          <h2>Fotogrametria, drony, skaning laserowy</h2>
      </article>
  </section>
</template>

<script>
export default {
   head() {
      return {
        title: 'Oferta | ProGeoSurvey - Geodezja',
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
.ofert{
    padding: 0 10%;
    padding-top: 120px;
    color: #111111;
}
h1{
    font-weight: 900;
    font-size: 3em;
    text-transform: uppercase;
}
.ofert-title{
    text-transform: uppercase;
    font-weight: bold;
    margin: 20px 0;
}
.ofert-title:nth-of-type(1) .icon{
    margin-right: 10px;
}
p{
    margin-top: 30px;
    max-width: 700px;
    line-height: 130%;
}
.ofert__list{
    margin-top: 40px;
}
.ofert__list li{
    margin-top: 10px;
    font-weight: bold;
    text-transform: uppercase;
}
.ofert__list:nth-of-type(1) .icon{
    color: #FECF45;
    margin-right: 10px;
}
article{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
}
article:nth-of-type(2){
    background-color: #FECF45;
    padding: 0 20px;
    margin-top: 100px;
    padding-top: 80px;
    text-align: right;
    padding-bottom: 100px;
    clip-path: polygon(0 0, 100% 10%, 100% 95%, 0 100%);
}
article:nth-of-type(2) li .icon{
    color: #FFFFFF;
    margin-left: 10px;
}
article:nth-of-type(2) ul{
    margin-top: 40px;
}
article:nth-of-type(2) li{
    margin-top: 10px;
    font-weight: bold;
    text-transform: uppercase;
}
article:nth-of-type(3){
    padding: 100px 0;
    background: url('@/assets/images/ofert-bg.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);
    margin-top: -50px;
}
article:nth-of-type(3) h2{
    color: #111111;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 1.5em;
    text-align: center;
}
.column-card{
    margin-top: 60px;
}
.card{
    width: 300px;
    height: 400px;
    border: 5px solid #FECF45;
}
.card img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>