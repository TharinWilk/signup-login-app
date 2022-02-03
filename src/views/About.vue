<template>
  <main class="main">
    <section class="page-title">
      <h1>About</h1>
    </section>

    <section class="container-left">
      <div class="text-container about-container">
        <h3>Responsive Design</h3>
        <p>Utilizing a mobile first approach, this app was built within the screen size constrants of a mobile device, then built with added complexity for users on devices with larger screen widths. Additionally to avoid CSS bloat, the use of modern css properties like min, max, and clamp, helped to alleviate unnessicary media queries and develop a more fluid response to changes in screen and browser size.</p>
      </div>
    </section>

    <section class="container-right">
      <div class="text-container about-container">
        <h3>Firebase API</h3>
        <p>Firebase acts as this app's backend-service to authenticate its users using email and password. The code uses asynchronous functions to communicate with Firebase to change the user state.</p>
      </div>
    </section>

    <section class="container-left">
      <div class="text-container about-container">
        <h3>Vuex State Management</h3>
        <p>In order to more easily monitor the app's state across its components, a Vuex store has been added for state management. This allows for easier communication and implementation of changes across the entire app.</p>
      </div>
    </section>

    <section class="container-right">
      <div class="text-container about-container">
        <h3>Want To See More</h3>
        <p>Liked what you saw? Checkout more projects from my portfolio by clicking
          <a href="https://Tharinwilk.github.io">here.</a>
        </p>
      </div>
    </section>
  </main>
</template>

<style>
.main {
  width: min(100%, 1000px);
  margin: 0 auto;
}

.page-title {
  width: max(50%, 15rem);
  margin: 0 auto;
  border-bottom: 1px solid var(--dark-primary-color);
  padding-bottom: var(--padding-xs);
}
</style>
