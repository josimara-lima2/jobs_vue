import { defineStore } from "pinia";

export const filterStore = defineStore("filter", {
  state: () => ({
    filtersItens: [],
  }),

  actions: {
    addFilter(item) {
      this.filtersItens.push(item);
    },

    removeFilter(item){
        this.filtersItens = this.filtersItens.filter(i => {
            console.log(i, item, i !== item)
            return i !== item
        })
        console.log(this.filtersItens)
    },
    removeAllFilters(){
      this.filtersItens = []
    }

  },
});
