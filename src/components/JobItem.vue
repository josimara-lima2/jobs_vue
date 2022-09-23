<template>
  <div class="card">
    <div class="img">
      <img :alt="logo" :src="getImage(logo)" />
    </div>
    <div class="info">
      {{ position }}
    </div>
    <div class="categorias">
      <CategoriaItem
        v-for="language in languages"
        :key="language"
        :categoria="{
          name: language,
        }"
      />
      <CategoriaItem
        v-for="tool in tools"
        :key="tool"
        :categoria="{
          name: tool,
        }"
      />
      <CategoriaItem
      
        :categoria="{
          name: role,
        }"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import CategoriaItem from "./CategoriaItem.vue";

export default {
  props: {
    job: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    const position = ref(props.job.position);
    const logo = ref(props.job.logo);
    const languages = ref(props.job.languages);
    const tools = ref(props.job.tools);
    const role = ref(props.job.role)
    const getImage = (imagePath) => {
      return require(`../assets/images/${imagePath}`);
    };
    return {
      position,
      logo,
      getImage,
      languages,
      tools,
      role,
    };
  },
  components: { CategoriaItem },
};
</script>

<style scoped>
.card {
  padding: 24px 16px;
  margin-bottom: 15px;
  background: white;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.categorias{
    display: flex;
    gap:8px;
    flex-wrap: wrap;
}
</style>