<template lang="html">
  <div class="signup centered-absolute form">
    <div class="form-text">
      <h3>Signup</h3>
    </div>

    <div class="form-section">
      <div class="form-input">
        <input type="email" name="email" v-model="email" @keypress.enter="focusPassword" autocomplete="off" placeholder=" " required>
        <label for="email">Email</label>
      </div>

      <div class="form-input">
        <input type="password" name="password" v-model="password" @keypress.enter="focusConfirm" ref="password" autocomplete="off" placeholder=" " required>
        <label for="password">Password</label>
      </div>

      <div class="form-input">
        <input type="password" name="confirm" v-model="confirm" @keypress.enter="signup" ref="confirm" autocomplete="off" placeholder=" " required>
        <label for="confirm">Confirm Password</label>
      </div>
    </div>

    <div class="form-button">
      <button type="button" class="centered-absolute" @click="signup">Sign Up Now</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data() {
    return {
      email: null,
      password: null,
      confirm: null,
    }
  },
  methods: {
    signup() {
      if(this.password === this.confirm ) {
        this.$store.dispatch('signup', {
          email: this.email,
          password: this.password
        })
      } else {
        alert("Passwords don not match")
      }
    },
    focusPassword() {
      this.$refs.password.focus()
    },
    focusConfirm() {
      this.$refs.confirm.focus()
    }
  }
}
</script>

<style lang="css">
</style>
