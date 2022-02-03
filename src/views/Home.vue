<template>
  <main class="main">
    <transition name="fade">
      <Signup v-show="signupActive && !user"/>
    </transition>

    <transition name="fade">
      <Login v-show="loginActive && !user"/>
    </transition>

    <transition name="fade">
      <article v-if="user">
        <section class="page-title">
          <h1>Welcome</h1>
          <h4>You're logged in as <span>{{ user.email }}</span></h4>
        </section>

        <section class="text-container">
          <p>Thanks for signing up and logining in to the website. This is a project that i had worked on to develop my skills as a web developer. If you'd like to learn more checkout the <a href="/about">about page</a>.</p>
        </section>
      </article>
    </transition>
  </main>
</template>

<script>
import Signup from '../components/Signup.vue'
import Login from '../components/Login.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    Signup,
    Login,
  },
  computed: {
    ...mapState({
      signupActive: state =>
      state.signupActive,
      loginActive: state => state.loginActive,
      user: state => state.user
    })
  }
}
</script>

<style>
.main {
  width: 100%;
  min-height: calc(100vh - 4rem);
  overflow: hidden;
}

h4 span, .home-text a {
  color: var(--accent-color);
  font-weight: bold;
}
</style>
