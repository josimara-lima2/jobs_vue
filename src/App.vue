<template>
  <header>
    <img :src="require('@/assets/images/bg-header-desktop.svg')" alt="teste">
  </header>
 <div class="container">
  <WrapperFilter/>
  <JobItems />
 </div>
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
body{
  margin: 0;
  padding: 0;
  font-family: "League Spartan", sans-serif;
}
#app {

  text-align: center;
  font-size: 15px;
  color: #2c3e50;
  padding:0;
  margin: 0;
  background: hsl(180, 52%, 96%);
}

header{
  background: #5DA4A4;
  width: 100%;
}
header img{
  width: 100%;
}

.container{
  padding: 24px;
}

</style>
