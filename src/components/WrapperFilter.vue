<template>
  <div class="wrapper-filter" v-show="store.filtersItens.length">
    <div class="wrapper">
      <FilterItem
        :name="filter"
        v-for="filter in store.filtersItens"
        :key="filter + round"
      />
    </div>
    <button class="btn-clear" @click="clearFilters">Clear</button>
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
    const clearFilters = () => {
      store.removeAllFilters()
    }
    watch(store.filtersItens, () => {
        storeJob.filterJobs(store.filtersItens)
    }, {deep:true})
    return {
      store,
      round,
      clearFilters
    };
  },
};
</script>

<style scoped>
.wrapper{
  display: flex;
  flex-wrap: wrap;
  gap:8px;
}
.wrapper-filter {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  align-items: center;
  padding: 16px;
  margin: 10px 0px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(93, 164, 164, 0.2),
    0 3px 10px 0 rgba(93, 164, 164, 0.19);
  
}
.btn-clear{
  background: transparent;
  border: none;
  cursor: pointer;
  height: 40px;
  color: #5da4a4;
  font-weight: 600;
  border-radius: 4px;
  padding: 6px 12px;

    &:hover{
      background: hsl(180, 31%, 95%);
      color: #5da4a4;
  }  
}
</style>
