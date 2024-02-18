<template>
  <div class="wrapper-filter" v-show="store.filtersItens.length">
    <FilterItem
      :name="filter"
      v-for="filter in store.filtersItens"
      :key="filter + round"
    />
  </div>
</template>

<script>
import { filterStore } from "@/store/filters";
import FilterItem from "./FilterItem.vue";
import { ref } from "@vue/reactivity";
import { watch } from "vue";
import {jobStore} from "@/store/job"
export default {
  components: { FilterItem },
  setup() {
    const store = filterStore();
    const storeJob = jobStore()

    const round = ref(Math.random(0, 10));
    watch(store.filtersItens, () => {
        
        console.log({store: store.filtersItens, state:store.state})
        console.log('mudou')
        storeJob.filterJobs(store.filtersItens)
    }, {deep:true})
    return {
      store,
      round,
    };
  },
};
</script>

<style scoped>
.wrapper-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 16px;
  margin: 10px 0px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(93, 164, 164, 0.2),
    0 3px 10px 0 rgba(93, 164, 164, 0.19);
}
</style>
