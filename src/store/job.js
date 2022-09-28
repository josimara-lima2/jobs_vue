import axios from "axios";
import { defineStore } from "pinia";

export const jobStore = defineStore('job',{
    state: () => {
        return{
            job:[
                
            ]
        }},

        
        actions:{
            async getUsers(){
                try{
                   await axios.get('http://localhost:3000/jobs').then(r =>  {
                    this.$patch({
                        job: r.data
                    }) 
                    
                })

                }catch(error){
                    console.log(error)
                }
            }
        },
        persist:{
            enabled:true
        }
    
})