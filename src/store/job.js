import axios from "axios";
import { defineStore } from "pinia";

export const jobStore = defineStore('job',{
    state: () => {
        return{
            job:[
                
            ],
          
        }},

        
        actions:{
            async getUsers(){
                try{
                    const url = process.env.REACT_APP_API_URL_LOCAL || process.env.REACT_APP_API_URL_NETLIFY
                   await axios.get(url+'/jobs').then(r =>  {
                    this.$patch({
                        job: r.data
                    }) 
                    
                })

                }catch(error){
                    console.log(error)
                }
            },

           async filterJobs(searchs){
            const   url= process.env.REACT_APP_API_URL_LOCAL || process.env.REACT_APP_API_URL_NETLIFY
                await axios.get(url+'/jobs').then(r =>  {
                const filterLanguages =  r.data.filter(item => {
                    const itens = [...item.languages, ...item.tools ]
                    return  searchs.every(item => itens.includes(item))
                })
                console.log(filterLanguages, 'aqquii')
                // const filtertools =  r.data.filter(item => {
                //     const lang = item.tools
                //     return lang.includes(search)
                // })
                this.$patch({
                    job: [...filterLanguages]
                })
            })
            }
        },
        persist:{
            enabled:true
        }
    
})