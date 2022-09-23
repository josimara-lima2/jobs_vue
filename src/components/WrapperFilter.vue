<template>
    <FilterItem  v-for="filter in $store.state.filters" :key="filter" :categoria="{'name':filter}"></FilterItem>
    
</template>

<script>
import FilterItem from "./FilterItem.vue";
export default{
    components:{
        FilterItem
    }
}
</script>