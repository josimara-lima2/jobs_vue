<template>
    <div class="wrapper-filter">
       <FilterItem :name="filter" v-for="filter in listFilter" :key="filter + round"/>
    </div>
    
</template>

<script>
import {filterStore} from '@/store/filters'
import FilterItem from './FilterItem.vue'
import { ref } from '@vue/reactivity'

export default {
    components:{ FilterItem },
   setup(){
    const store = filterStore()
        const listFilter = store.filtersItens
        const round = ref(Math.random(0,10))
       return{
        listFilter,
        round
       }
   }
}
</script>

<style scoped>
.wrapper-filter{
    display: flex;
    gap:8px;
}
</style>