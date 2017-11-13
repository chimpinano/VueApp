<template>
  <div>
    <h1>Register</h1>
    <input v-model="email" type="email" name="email" placeholder="Enter email"></input>
    <br/>
    <input v-model="password" type="password" name="password"></input>
    <br/>
    <button type="button" name="btnSubmit" v-on:click="register">Register</button>
  </div>
</template>

<script>

import AuthenticationService from "../services/AuthenticationService";

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
   
   async register() {
        const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      });

      console.log(response);
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
