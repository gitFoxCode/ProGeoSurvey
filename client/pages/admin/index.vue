<template>
  <div>
    <section class="center" v-if="!loggedIn">
        <div class="login">
          <form @submit.prevent="handleSubmit">
            <label for="login">
              <span class="input__title">Login</span>
              <div class="form-group">
                  <span><svg-icon icon="user"/></span>
                  <input class="form-field" type="text" placeholder="login" id="login" v-model="username">
              </div>
            </label>
            <label for="password">
              <span class="input__title">Hasło</span>
              <div class="form-group">
                  <span><svg-icon icon="lock"/></span>
                  <input class="form-field" type="password" placeholder="Password" id="password" v-model="password">
              </div>
            </label>
            <button type="submit">Zaloguj się</button>
          </form>
        </div>
    </section>
    <section v-else class="center admin-center">
      <p>Jesteś zalogowany jako <b>administrator</b>.</p>
      <p>Aby dodawać, edytować lub usuwać materiały przejdz do realizacje, galeria lub referencje</p>
      <a href="#">Wyloguj mnie</a>
    </section>
  </div>
</template>

<script>
export default {
  data(){
    return {
      // !$auth.loggedIn
      loggedIn: true,
      username: '',
      password: ''
    }
  },
  head() {
    return {
      title: 'Panel Administracyjny'
    }
  },
  methods: {
    handleSubmit(e){
      const { username, password } = this
      if(username && password){
        this.$auth.loginWith('local', {
          data: { username, password }
        })
        console.log(`Loguje na ${username} z haslem: ${password}`)
      }
    }
  }
}
</script>

<style scoped>
.admin-center{
  flex-direction: column;
}
.admin-center p:not(first-of-type){
  margin-top: 20px;
}
.admin-center b{
  font-weight: bold;
}
.admin-center a{
  margin-top: 20px;
}
.input__title{
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
    color: #222;
}
label{
    display: block;
    margin-top: 30px;
}
.center{
    display: flex;
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
</style>