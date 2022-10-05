<template>
    <div class="card-filter" >
{{name}}
      <button >x</button>
    </div>
  </template>
   
   <script>
import { ref } from '@vue/reactivity';
 export default {
  props: {
    name: {
      type: String,
      default: " "
    },
   },
  setup(props) {
    
   const nameP = ref(props.name)

   

    return {
   
      nameP,
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