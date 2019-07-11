<template>
  <div id="app" >
    <!--<img alt="Vue logo" src="./assets/logo.png">
    
      <HelloWorld msg="Welcome to Your Vue.js App"/> -->
     <Monitor />
  </div>



</template>



<script>
//import HelloWorld from './components/HelloWorld.vue'
import Monitor from './components/Monitor.vue'

export default {
  name: 'app', //use name to upper
  components: {
    Monitor
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  margin-bottom: 0px;
  border-bottom: 0px;
}
</style>
