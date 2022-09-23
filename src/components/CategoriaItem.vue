<template>
  <div class="card-categoria" @click="onFilter">
    {{ name }}
  </div>
</template>
 
 <script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  props: {
    categoria: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    const name = ref(props.categoria.name);
    const store = useStore();

    const onFilter = () => {
      store.commit('onFilter',name.value)
    };

    return {
      name,
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