<template>
  <div class="card-categoria" @click="onFilter">
    {{categoria.name}}
  </div>
</template>
 
 <script>
//import { filterStore } from '@/store/filters';
import { filterStore } from '@/store/filters';
import { jobStore } from '@/store/job';
import { ref } from '@vue/reactivity';


export default {
  props: {
    categoria: {
      type: Object,
      default: () => {}
    },
   },
  setup(props) {
    
   const newName = ref(props.categoria.name)
     const storeJob = jobStore()
    const onFilter = () => {
      const store = filterStore()
      
        store.addFilter(newName.value)
        storeJob.filterJobs(store.filtersItens)
    };

    return {
   
      onFilter,
    };
  },
 };
</script>
 
 <style scoped>
.card-categoria {
  padding: 8px 10px;
  display: inline-flex;
  width: max-content;

  background: hsl(180, 31%, 95%);
  color: hsl(180, 29%, 50%);
  border-radius: 4px;
  display: flex;
  font-weight: 600;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.card-categoria:hover {
  color: hsl(180, 31%, 95%);
  background: hsl(180, 29%, 50%);
}
</style>