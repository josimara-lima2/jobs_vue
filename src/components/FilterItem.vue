<template>
  <div class="card-filter">
    <p>{{ name }}</p>
    <button class="btn-remove" @click="removeFilterItem(name)">x</button>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { filterStore } from "@/store/filters";
import { jobStore } from "@/store/job";

export default {
  props: {
    name: {
      type: String,
      default: " ",
    },
  },
  setup(props) {
    const nameP = ref(props.name);

    const store = filterStore();
    const storeJob = jobStore()
   
    const removeFilterItem = (item) => {
      store.removeFilter(item);
     console.log(store.filtersItens)
     if(store.filtersItens.length){
      storeJob.filterJobs(store.filtersItens)
      console.log(storeJob.job)
     //  store.filtersItens.map(item => storeJob.filterJobs(item))
     }else{
       storeJob.getUsers()
     }
    };

   

    return {
      nameP,
      store,
      removeFilterItem,
    };
  },
};
</script>

<style scoped>
.card-filter {
  padding: 0px 0px 0px 10px ; 
    height: 30px;
  display: inline-flex;
  width: max-content;
  gap: 8px;
  background: hsl(180, 31%, 95%);
  color: hsl(180, 29%, 50%);
  border-radius: 4px;
  display: flex;
  font-weight: 600;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.card-filter:hover {
  /* color: hsl(180, 31%, 95%); */
  /* background: hsl(180, 29%, 50%); */
}

.btn-remove{
  cursor: pointer;
  margin:0;
    height: 100%;
    border:none;
    padding: 0px 8px;
    color: white;
    background: hsl(180, 29%, 50%);
    border-radius: 0px 4px 4px 0px
}

.btn-remove:hover{
    background: #253031
}
</style>
