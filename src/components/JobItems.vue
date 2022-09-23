<template>
   <JobItem :job="job" v-for="job in $store.state.jobs" :key="job.id"/>
</template>

<script>
import { ref } from 'vue';
import JobItem from './JobItem.vue';
export default {
    components: { JobItem },
    setup(){
        const jobs = ref([])

        return{
            jobs
        }
    }
}
</script>

<style></style>