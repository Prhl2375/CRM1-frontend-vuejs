<script setup>
import $ from 'jquery';
import axios from "axios";
import {ref} from "vue";

$('.message a').click(function(){
  $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

const name = ref();
const password = ref();
const email = ref();
function register(){
    axios.post('/register', {
        name: name.value,
        password: password.value,
        email: email.value
    }).then(() => {
        window.location.href = '/admin';
    });
}
</script>


<template>
  <main>
    <div class="login-page">
      <div class="form">
        <form class="register-form">
          <input v-model="name" type="text" placeholder="name"/>
          <input v-model="password" type="password" placeholder="password"/>
          <input v-model="email" type="text" placeholder="email address"/>
          <button @click.prevent="register()" type="button" class="btn btn-dark">create</button>
          <p class="message">Already registered? <router-link to="/login">Sign In</router-link></p>
        </form>
      </div>
    </div>
    <!-- partial -->
  </main>
</template>

<style scoped>

.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  text-transform: uppercase;
  outline: 0;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,.form button:active,.form button:focus {
  background: #14A44D;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #14A44D;
  text-decoration: none;
}

.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
.container:before, .container:after {
  content: "";
  display: block;
  clear: both;
}
.container .info {
  margin: 50px auto;
  text-align: center;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}
.container .info span {
  color: #4d4d4d;
  font-size: 12px;
}
.container .info span a {
  color: #000000;
  text-decoration: none;
}
.container .info span .fa {
  color: #EF3B3A;
}

</style>