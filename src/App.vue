<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div>
      <!-- <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>-->
      <el-button @click="$router.push('naoto')">naoto</el-button>
      <el-button @click="$router.push('tsutomu')">tsutomu</el-button>
      <el-button @click="$router.push('toki')">toki</el-button>
      <el-button @click="$router.push('minokich')">minokich</el-button>
    </div>
    <router-view></router-view>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
