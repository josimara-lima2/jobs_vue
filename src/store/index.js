// import axios from 'axios'
// import { createStore } from 'vuex'

// export default createStore({
//   state: {
//     jobs:[],
//     filters: []
//   },
//   getters: {
//   },
//   mutations: {
//     //salvando todos os itens
//     salvarJobs(state, payload){
//       state.jobs = payload
//     },

//    onFilter(state, name)  {
      
//       let filtrados = [];
//      state.jobs.forEach((job) => {
     
//         job.languages.forEach((language) => {
//           console.log(language, name);
//           if (language === name) filtrados.push(job);
//         });
//         job.tools.forEach((tool) => {
//           console.log(tool, name);
//           if (tool === name) filtrados.push(job);
//         });

        
//           if (job.role === name) filtrados.push(job);
        
//       });
//       console.log(filtrados);
//      state.jobs = filtrados;
   
//       state.filters.push({name: name, id:Math.random(0,1)})
     
    
//     },

 
//     deleteFilterItem(state,name){
//    console.log('name',name, state.filters, state.jobs)
//       state.filters.splice(name,1)
//       let jobsFilter = []
//       if(!state.filters.length) return
//       state.filters.forEach(filter => {
//         console.log(filter.name)
//         state.jobs.forEach((job) => {
//           job.languages.forEach((language) => {
//             console.log(language, filter.name);
//             if (language === filter.name) jobsFilter.push(job);
//           });
//           job.tools.forEach((tool) => {
//             console.log(tool, filter.name);
//             if (tool === filter.name) jobsFilter.push(job);
//           });
  
          
//             if (job.role === filter.name) jobsFilter.push(job);
          
//         });
//       })
//       state.jobs = jobsFilter
//     }
  
//   },
//   actions: {
//     getJobs({commit}){
//      return axios.get('http://localhost:3000/jobs').then(response => {
//       commit('salvarJobs', response.data)
//      })
//     },

//     delete({commit},name){
//       return axios.get('http://localhost:3000/jobs').then(response => {
//         commit('salvarJobs', response.data)
//         commit('deleteFilterItem',name)
//     })

//   },
// },
//   modules: {
//   }
// })
