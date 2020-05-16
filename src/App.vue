<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>  
    </keep-alive>
    <div v-show="(path ==='Home'||path ==='Userhome'||path ==='Found'||path ==='Message')">
      <home-tab></home-tab>
    </div>
  </div>
</template>

<script>
import HomeTab from './common/Tab'
export default {
  name: 'App',
  data() {
    return {
      path:''
    };
  },
  components: {
    HomeTab
  },
  mounted(){
    this.path = this.$route.name;
    console.log(this.path)
  },
  watch: {
    $route(to, from) {
      this.path = to.name
    }
  }
}
</script>

<style>

</style>
