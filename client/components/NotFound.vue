<template>
    <section class="container">
        <span class="information">404 - Nie znaleziono takiej strony! ({{ this.$route.params.id }})</span>
    </section>
</template>

<script>
export default{

}
</script>

<style scoped>
.container{
    padding-top: 120px;
    padding-bottom: 120px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    min-height: 100vh;
}
.information{
    font-weight: bold;
    color: #444;
    font-size: 2em;
}
</style>
