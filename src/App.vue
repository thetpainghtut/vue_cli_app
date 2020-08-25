<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="./assets/logo.png" width="30" height="30" alt="Vue logo" loading="lazy">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link :to="{name:'testing'}" class="nav-link mr-2">NEWS-API</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name:'item'}" class="nav-link mr-2">ITEMS</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name:'cart'}" class="nav-link mr-2"><b-icon icon="cart-plus" variant="info"></b-icon></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      message: 'Hello Main component'
    }
  },
  mounted(){
      this.$router.replace('/')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
