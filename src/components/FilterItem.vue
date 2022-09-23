<template>
    <div class="card-filter" >
      {{ name }}
      <button @click="deleteFilter">x</button>
    </div>
  </template>
   
   <script>
  import { ref } from "vue";
import { useStore } from 'vuex';
  
  
  export default {
    props: {
      categoria: {
        type: Object,
        default: () => {},
      },
    },
    setup(props) {
      const name = ref(props.categoria.name);
     const store = useStore()
  
      const deleteFilter = () => {
       
       store.dispatch('delete',name.value)
      }
  
      return {
        name,
        deleteFilter
      };
    },
  };
  </script>
   
   <style scoped>
  .card-filter {
    padding: 8px 10px;
    display: inline-flex;
    width: max-content;
    gap:8px;
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
    color: hsl(180, 31%, 95%);
    background: hsl(180, 29%, 50%);
  }
  </style>