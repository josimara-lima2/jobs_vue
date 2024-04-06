<template>
   <JobItem :job="job" v-for="job in store.job" :key="job.id+round"/>
   
</template>

<script>
import JobItem from '@/components/JobItem.vue'
import { ref } from '@vue/reactivity'
import {jobStore} from '@/store/job'

export default {
    components:{JobItem},
    
    setup(){
        const store = jobStore()
    
        const jobsList = store.job
        const round = ref(Math.random(0,10))

       
       return{
        jobsList,
        store,
        round
       }
    },

  
}
</script>

<style></style>