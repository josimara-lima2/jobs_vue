<template>
  <div class="card" :class="{ 'card-before': jobProps.new }">
    <div class="img">
      <img
        :alt="logo"
        :src="
          'https://avatar.iran.liara.run/username?username=' +
          jobProps.MatchedObjectDescriptor?.PositionTitle
        "
      />
    </div>
    <div class="container-items">
      <div class="container-info">
        <div class="info">
          <div class="company">
            {{ jobProps.MatchedObjectDescriptor?.PositionTitle }}
            <div class="tags">
              <!-- <span class="new" v-if="jobProps.new">New!</span> -->
              <span
                class="featured"
                v-if="
                  jobProps.MatchedObjectDescriptor?.UserArea?.Details?.SecurityClearance === 'Secret'
                "
                >Secret</span
              >
            </div>
          </div>
          <div></div>
          <div class="position"></div>
          <div class="dados">
            <span>{{
              jobProps.MatchedObjectDescriptor?.PublicationStartDate
            }}</span>
            <span class="separator"></span>
            <span>{{
              jobProps.MatchedObjectDescriptor?.PositionLocationDisplay
            }}</span>
          </div>
        </div>
      </div>
      <div class="categorias">
        <CategoriaItem
          :categoria="{ name: category.Name }"
          v-for="category in jobProps.MatchedObjectDescriptor?.JobCategory"
          :key="category.Code + round"
        />
      </div>
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
    console.log(jobProps.value);
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
  gap: 24px;
  box-sizing: border-box;
  align-items: center;
  box-shadow: 0 2px 4px 0 rgba(93, 164, 164, 0.2),
    0 3px 10px 0 rgba(93, 164, 164, 0.19);
}
img {
  width: 100px;
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
  gap: 16px;
}
.tags {
  display: flex;
  align-items: center;
  gap: 8px;
}
.container-info {
  display: flex;
  gap: 8px;
  align-items: center;
}

.container-items {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.position {
  font-weight: 600;
  color: #253031;
  font-size: 18px;
  display: inline-flex;
  gap: 0.5rem;
}
.new {
  border-radius: 12px;
  background: #5da4a4;
  padding: 6px 8px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.featured {
  border-radius: 12px;
  background: #253031;
  padding: 6px 8px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.company {
  display: flex;
  gap: 16px;
  color: #5da4a4;
  font-weight: 600;
  align-items: center;
}

.categorias {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.dados {
  display: flex;
  gap: 0.5rem;
  color: #8e9593;
  align-items: center;
}

.separator {
  width: 3.5px;
  height: 3.5px;
  border-radius: 50%;
  background-color: #8e9593;
}

@media (max-width: 400px) {
  .card {
    gap: 24px;
    margin-bottom: 32px;
    align-items: end;
    flex-direction: column;
    justify-items: end;
    justify-content: end;
  }
  .categorias {
    align-items: end;
    width: 100% !important;
    border-top: 0.0625rem solid #8e9593;
    padding-top: 1rem;
  }
  .info {
    width: 100%;
  }
  .img {
    position: absolute;
    top: -20px;
    left: 20px;
  }

  .img img {
    width: 55px;
    height: 55px;
  }

  .container-items {
    position: relative;
    flex-direction: column;
    align-items: start;
    width: 100%;
    padding: 0px;
    margin-top: 24px;
    justify-content: start;
  }
}
</style>
