import {defineStore } from "pinia";

export const usePersonnageStore = defineStore('personnage', {
    state: () => ({
        personnages: [
            {
              pseudo: 'Colère Cachée',
              age: 15
            },
            {
              pseudo: 'Fire',
              age: 23
            },
            {
              pseudo: 'Antoine',
              age: 45
            },
        ],
    }),
    actions: {
        ajoutPerso(personnage) {
            this.personnages.push(personnage)
        }
    }
})