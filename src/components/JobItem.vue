<template>
  <div class="card">
    <div class="img">
      <img :alt="logo" :src="getImage(logo)" />
    </div>
    <div class="info">
      {{ position }}
    </div>
    <div class="categorias">
    <CategoriaItem   :categoria="{name: language}" v-for="language in languages" :key="language + round"/>
    <CategoriaItem  :categoria="{name: tool}" v-for="tool in tools" :key="tool + round"/>
    
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import CategoriaItem from './CategoriaItem.vue';

export default {
    props: {
        job: {
            type: Object,
            default: () => { },
        },
    },
    setup(props) {
        const position = ref(props.job.position);
        const logo = ref(props.job.logo);
        const languages = ref(props.job.languages);
        const tools = ref(props.job.tools);
        const role = ref(props.job.role);
        const getImage = (imagePath) => {
            return require(`../assets/images/${imagePath}`);
        };
        const round = ref(Math.random(0,10))
        return {
            position,
            logo,
            getImage,
            languages,
            tools,
            role,
            round
        };
    },
    components: { CategoriaItem }
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