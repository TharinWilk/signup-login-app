import { createStore } from 'vuex'

// Firebase Imports
import { auth } from '../firebase/config'
import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged } from 'firebase/auth'

const store = createStore({
  state: {
    signupActive: true,
    loginActive: false,
    user: null,
  },
  mutations: {
    showSignup(state) {
      state.signupActive = true
      state.loginActive = false
    },
    showLogin(state) {
      state.signupActive = false
      state.loginActive = true
    },
    setUser(state, payload) {
      state.user = payload
    },
  },
  actions: {
    async signup(context, { email, password }) {
      const res = await createUserWithEmailAndPassword(auth, email, password )
      if(res) {
        context.commit('setUser', res.user)
      } else {
        throw new Error('Could not complete signup')
      }
    },
    async login(context, { email, password }) {
      const res = await signInWithEmailAndPassword(auth, email, password)
      if(res) {
        context.commit('setUser', res.user)
      } else {
        throw new Error('Could not login')
      }
    },
    async logout(context) {
      await signOut(auth)
      context.commit('setUser', null)
      context.commit('showLogin')
    }
  },
})

const checkUser = onAuthStateChanged(auth, (user) => {
  store.commit('setAuthIsReady', true)
  store.commit('setUser', user)
  checkUser()
})

export default store
