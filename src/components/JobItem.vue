<template>
  <div class="card" :class="{ 'card-before': jobProps.new }">
    <div class="container-info">
      <div class="img">
        <img :alt="logo" :src="getImage(logo)" />
      </div>
      <div class="info">
        <div class="company">
          {{ jobProps.company }}
          <span class="new" v-if="jobProps.new">New!</span>
          <span class="featured" v-if="jobProps.featured">Featured</span>
        </div>
        <div class="position">{{ position }}</div>
      </div>
    </div>
    <div class="categorias">
      <CategoriaItem
        :categoria="{ name: language }"
        v-for="language in languages"
        :key="language + round"
      />
      <CategoriaItem
        :categoria="{ name: tool }"
        v-for="tool in tools"
        :key="tool + round"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
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
    const role = ref(props.job.role);
    const jobProps = ref(props.job);
    const getImage = (imagePath) => {
      return require(`../assets/images/${imagePath}`);
    };
    const round = ref(Math.random(0, 10));
    return {
      position,
      logo,
      getImage,
      languages,
      tools,
      role,
      round,
      jobProps,
    };
  },
  components: { CategoriaItem },
};
</script>

<style scoped>
.card {
  padding: 24px;
  margin-bottom: 15px;
  position: relative;
  background: white;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px 0 rgba(93, 164, 164, 0.2),
    0 3px 10px 0 rgba(93, 164, 164, 0.19);
}

.card-before::before {
  content: "";
  height: 100%;
  width: 4px;
  background: #5da4a4;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 4px 0px 0px 4px;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: start;
}

.container-info {
  display: flex;
  gap: 8px;
  align-items: center;
}

.position{
  font-weight: 600;
  color: #253031;
  font-size: 18px;
}
.new {
  border-radius: 12px;
  background: #5da4a4;
  padding: 4px 6px;
  color: white;
}

.featured {
  border-radius: 12px;
  background: #253031;
  padding: 4px 6px;
  color: white;
}

.company {
  display: flex;
  gap: 4px;
  color: #5da4a4;
  font-weight: 600;
}

.categorias {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
</style>
