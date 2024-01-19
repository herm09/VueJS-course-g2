<script>
import { useCompteurStore } from '@/stores/compteur'

export default {
    name: 'CompteurView',
    setup () {
        const compteurStore = useCompteurStore()
        return {
            compteurStore
        }
    },
    computed: {
        compteur() { //on crée une fonction qui renvoie la valeur du compteur
            return this.compteurStore.compteur //renvoie la valeur du compteur
        }
    },
    data() {
        return {
            compteur: 0
        }
    },
    methods: {
        increment(compteur) {
            this.compteur++
        }
    }
}
</script>


<template>
    <div>
        <span>J'ai cliqué {{ compteur }} fois</span>
        <button @click="increment">Clique</button>
    </div>
</template>


<style scoped> /*scoped = tout ce qu'on écrit en css ne s'appliquera que à cette page là*/
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: #2c3e50;
  width: 20%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  color: white;
}

button {
  background-color: #42b983;
  border: none;
  border-radius: 5px;
  padding: 10px;
  color: white;
  font-weight: bold;
}
</style>