import { defineStore } from "pinia";

export const useMainStore = defineStore('main', {
    state: () => ({
        music: [],
    }),
    actions: {
        ajoutMusic(music) {
            this.musics.push(music)
        }
    }
})