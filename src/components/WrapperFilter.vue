<template>
    <div class="wrapper-filter">
        <FilterItem  v-for="filter in $store.state.filters" :key="filter.id" :categoria="{'name':filter.name}"></FilterItem>
    </div>
    
</template>

<script>

import FilterItem from "./FilterItem.vue";
export default{
    components:{
        FilterItem
    },

   
}
</script>

<style scoped>
.wrapper-filter{
    display: flex;
    gap:8px;
}
</style>