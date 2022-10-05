
import { defineStore } from 'pinia'

export const useSaveJobs = defineStore('saveJobs', {
    state: () => {
        return { jobs: [] }
    },

    actions: {


        salvarJobs:  (state) => {
           
            let jobs2 = []
             fetch('http://localhost:3000/jobs', {
                method: "GET",
            
            })
                .then((response) => {
                    jobs2 = response.data
                    state.jobs = jobs2
                    console.log(response, 'response')
                })
            
            return this.jobs;
        },
     
      
    }
})