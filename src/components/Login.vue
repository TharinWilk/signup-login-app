<template lang="html">
  <div class="login form">
    <div class="form-text">
      <h3>Login</h3>
    </div>

    <form>
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
        <button type="submit" @click="login">Login</button>
      </div>
    </form>
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
  height: 16rem;
}

.login .form-text {
  padding-bottom: 3rem;
}

.login .form-section {
  height: 45%;
}

.login .form-section .form-input {
  margin-top: 10%;
}
</style>
