
import { defineStore } from "pinia";

export const filterStore = defineStore('filter',{
    state: () => ({
       
            filtersItens: []
        }),

        
        actions:{
            addFilter:  ( item) => {
                console.log(item)
                this.filtersItens.push(item)
                
                
               },
        },
       
    
})

