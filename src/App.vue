<template>
  <WrapperFilter/>
  <JobItems />
</template>

<script>
import JobItems from './components/JobItems.vue';
import WrapperFilter from './components/WrapperFilter.vue';
import {jobStore} from '@/store/job'

export default {
    components:{ JobItems,
    WrapperFilter},
   setup(){
    const store = jobStore()
        store.getUsers()
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
