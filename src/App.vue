<template>
  <WrapperFilter/>
  <JobItems/>
</template>

<script>
import { useStore } from 'vuex';
import JobItems from './components/JobItems.vue';
import WrapperFilter from './components/WrapperFilter.vue';


export default {
  name: 'App',
  components: {
    JobItems,
    WrapperFilter
},

setup(){
  const store = useStore()
  store.dispatch('getJobs')
  return{

  }
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 15px;
  color: #2c3e50;
  padding: 24px 32px;
  background: hsl(180, 52%, 96%);
}
</style>
