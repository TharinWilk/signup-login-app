<template lang="html">
  <nav>
    <div class="navbar flex-row-space-around">
      <div class="nav-text">
        <h4>Welcome!</h4>

        <p class="welcome-text" v-if="!user">Signup or login to start</p>

        <p class="welcome-text" v-if="user">{{ user.email }}</p>
      </div>

      <div class="router-links">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>

      <div class="user-links flex-row-end">
        <button type="button" v-show="!user" @click="showSignup">Sign Up</button>

        <button type="button" v-show="!user" @click="showLogin">Login</button>

        <button type="button" v-show="user" @click="logout">Logout</button>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "Navbar",
  computed: {
    ...mapState({
      user: state => state.user,
    })
  },
  methods: {
    showLogin() {
      this.$router.push('/')
      this.$store.commit('showLogin')
    },
    showSignup() {
      this.$router.push('/')
      this.$store.commit('showSignup')
    },
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css">
nav {
  width: 100%;
  height: 4rem;
  background-color: var(--primary-color);
  box-shadow: 0 5px 5px var(--dark-primary-color);
}

.navbar {
  width: min(100%, 1000px);
  height: 100%;
  margin: 0 auto;
}

nav div {
  width: 30%;
}

nav a {
  font-weight: bold;
  color: var(--primary-text);
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: var(--accent-color);
}

.nav-text {
  text-align: left;
}

.nav-text h4, .welcome-text {
  padding: 0.25rem;
}

.welcome-text {
  font-size: var(--font-small)
}
</style>
