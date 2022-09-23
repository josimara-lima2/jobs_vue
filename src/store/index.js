import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    jobs:[],
    filters: []
  },
  getters: {
  },
  mutations: {
    //salvando todos os itens
    salvarJobs(state, payload){
      state.jobs = payload
    },

   onFilter(state, name)  {
      
      let filtrados = [];
     state.jobs.forEach((job) => {
        job.languages.forEach((language) => {
          console.log(language, name);
          if (language === name) filtrados.push(job);
        });
        job.tools.forEach((tool) => {
          console.log(tool, name);
          if (tool === name) filtrados.push(job);
        });

        
          if (job.role === name.value) filtrados.push(job);
        
      });
      console.log(filtrados);
     state.jobs = filtrados;
     state.filters.push(name)
    },
    deleteFilterItem(state,name){
   
      state.filters.splice(name,1)
      this.onFilter(state,name)
    }
  
  },
  actions: {
    getJobs({commit}){
     return axios.get('http://localhost:3000/jobs').then(response => {
      commit('salvarJobs', response.data)
     })
    }

  },
  modules: {
  }
})
