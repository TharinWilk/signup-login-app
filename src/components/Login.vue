<template lang="html">
  <div class="login centered-absolute form">
    <div class="form-text">
      <h3>Login</h3>
    </div>

    <div class="form-section">
      <div class="form-input">
        <input type="email" name="email" v-model="email" @keypress.enter="nextInput" autocomplete="off" placeholder=" " required>
        <label for="email">Email</label>
      </div>

      <div class="form-input">
        <input type="password" name="password" v-model="password" @keypress.enter="login" ref="password" autocomplete="off" placeholder=" " required>
        <label for="password">Password</label>
      </div>
    </div>

    <div class="form-button">
      <button type="button" @click="login">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
    },
    nextInput() {
      this.$refs.password.focus()
    }
  }
}
</script>

<style lang="css">
.login {
  height: clamp(250px, 45%, 320px);
}

.login .form-section .form-input {
  margin-top: 10%;
}
</style>
