<template>
    <footer class="footer">
        <div class="logo">
            <img src="~@/assets/images/progeosurvey-logo.svg" alt="ProGeoSurvey Logotyp">
        </div>
        <div class="contact">
            <span class="contact__title">
                Kontakt
            </span>
            <ul class="contact__content">
                <li><svg-icon icon="phone"/> +48 669 405 001</li>
                <li><svg-icon icon="email"/> biuro@pro-geo.pl</li>
                <li><svg-icon icon="www"/> pro-geo.pl</li>
            </ul>
        </div>
        <nav>
            <ul>
                <li><nuxt-link to="/">Start</nuxt-link></li>
                <li><nuxt-link to="/oferta">Oferta</nuxt-link></li>
                <li><nuxt-link to="/realizacje">Relizacje</nuxt-link></li>
                <li><nuxt-link to="/referencje">Referencje</nuxt-link></li>
                <li><nuxt-link to="/galeria">Galeria</nuxt-link></li>
                <li><nuxt-link to="/#kontakt">Kontakt</nuxt-link></li>
            </ul>
        </nav>
    </footer>
</template>

<script>
export default{

}
</script>

<style scoped>
.footer{
    background: url('@/assets/images/footer.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    color: #FFFFFF;
}
.footer a{
    text-decoration: none;
    color: #fff;
}
.logo{
    width: 100%;
}
.logo img{
    width: 100%;
}
.contact{
    margin-top: 20px;
    text-align: center;
}
.contact__title{
    font-weight: bold;
    text-transform: uppercase;
}
.contact__content{
    margin-top: 10px;
}
.contact__content li{
    margin-top: 5px;
}
nav{
    margin-top: 20px;
    text-align: center;
}
nav li{
    margin-top: 10px;
}
a.nuxt-link-exact-active{
    font-weight: bold;
    color: #FECF45
}
@media (min-width: 1024px){
    .footer{
        flex-direction: row;
        justify-content: space-around;
    }
    .logo{
        width: 400px;
    }
}
@media (min-width: 1424px){
    .contact{
        text-align: left;
    }
    nav{
        text-align: left;
    }
    nav ul{
        display: flex;
    }
    nav li{
        margin: 0 10px;
    }
    .footer{
        padding: 40px 10%;
    }
}
</style>
