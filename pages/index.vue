<template>
  <div>
    <Hero />
    <Ofert />
    <Realizations />
    <References />
    <Gallery />
    <Contact />
  </div>
</template>

<script>
export default {
   head() {
      return {
        title: 'Strona Główna | ProGeoSurvey - Geodezja',
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

<style>
h2.title{
    text-align: center;
    font-size: 4em;
    font-weight: 900;
    color: #111111;
    text-transform: uppercase;
    position: relative;
    z-index: 1;
    margin-bottom: 20px;
}
h2.title::before{
    content: attr(data-title);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    color: #FECF45;
    z-index: -1;
    letter-spacing: 10px;
    font-size: 1.5em;
    opacity: 0.2;
}
</style>
