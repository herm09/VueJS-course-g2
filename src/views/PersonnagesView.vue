<script>
import CartePerso from '@/components/CartePerso.vue'
import FormPerso from '@/components/FormPerso.vue';
import { usePersonnageStore } from '@/stores/personnage'

export default {
  name: 'PersonnagesView',
  setup() {
    const personnageStore = usePersonnageStore()
    return {
      personnageStore
    }
  },
  computed: {
    personnages() {
      return this.personnageStore.personnages
    }
  },
  components: {
    CartePerso,
    FormPerso
  },
  data() {
    return {
      checkbox: false
    }
  },
  methods: {
    ajoutPerso(personnage) {
      this.personnages.push(personnage)
    }
  }
}
</script>


<template>
  <div class="personnages">
    <h1>This is a personnages page</h1>
    <!-- <input type="checkbox" v-model="checker">
    <p v-if="checker">LA condition est vraie</p> -->
  <!-- {{ personnages }} permet d'afficher ce qu'il y a dans le tableau -->

  <FormPerso />

  <div class="cartes">
    <div v-for="personnage in personnages" :key="personnage.pseudo">
      <CartePerso :personnage="personnage" /> <!-- nom de la variable et a droite valeur de la clé -->
    </div>
  </div>
  </div>
</template>


<style>
.cartes {
  margin: 50px;
  display: flex;
  gap: 20px;
  justify-content: space-around;
  flex-wrap: wrap;
}

.error {
  color: red;
}
</style>
