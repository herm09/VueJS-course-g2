<script>
     export default {
        name: 'CartePErso',
        props: [
            'personnage' //nom qui se situe à gauche de se qu'on a envoyé. Passer un élément parent à enfant
        ]
     }
</script>

<template>
    <div>
        <h2>{{ personnage.pseudo }}</h2>
        <p>{{ personnage.age }} ans</p>
        <p v-if="personnage.age < 18">La personne est mineure</p>
        <p v-else>La personne est majeure</p>
    </div>
</template>

<style scoped>
div {
    width: 200px;
    margin: 0 auto;
    height: 200px;
    background-color: #42b983;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
</style>
