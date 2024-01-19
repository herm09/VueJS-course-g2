<script>
import CartePerso from './CartePerso.vue'
import { usePersonnageStore } from '@/stores/personnage'
export default {    
    name: 'FormPerso',
    setup() {
        const personnageStore = usePersonnageStore()
        return {
            personnageStore
        }
    },
    components: {
        CartePerso
    },
    data() {
        return {
            formPerso: {
                pseudo: '',
                age: 0
            },
        }
    },
    methods: {
        ajoutPerso() {
            this.personnageStore.ajoutPerso(this.formPerso) //on utilise le personnageStore puis le ajoutPerso en envoyant formPerso
            this.formPerso = {
                pseudo: '',
                age: 0
            }
        },
    },
}
</script>


<template>
    <CartePerso :personnage="formPerso" />
    <form @submit.prevent="ajoutPerso()">
        <input type="text" placeholder="Pseudo" v-model="formPerso.pseudo">
        <input type="number" placeholder="Age" v-model="formPerso.age">
        <p class="error" v-if="formPerso.pseudo.length < 3">Le pseudo doit faire au moins 3 caractères</p>
        <button type="submit">Ajouter</button>
    </form>
</template>


<style scoped>
form {
    background-color: #42b983;
    width: 50vw;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    border-radius: 10px;
}

input {
    padding: 10px;
    border-radius: 10px;
    border: none;
}

button {
    padding: 10px;
    border-radius: 10px;
    border: none;
    background-color: #2c3e50;
    color: white;
    font-weight: bold;
}
</style>