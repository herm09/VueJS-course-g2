<script>
export default {
    name: 'MainView',
    methods: {
    addMusic(music) {
      this.$emit('add-music', music)
    }
  }
}
</script>


<template>
    <div>
        <div class="music">
            <h2>Lana Del Rey</h2>
            <h3>Young And beautiful</h3>
            <button @click="addMusic('Titre de la musique')">+</button>
            <button class="play">▶️</button>
        </div>

        <div class="music">
            <h2>Joel Sunny</h2>
            <h3>Luminary</h3>
            <button @click="addMusic('Titre de la musique')">+</button>
            <button class="play">▶️</button>
        </div>

        <div class="music">
            <h2>You See Big Girl</h2>
            <h3>Hiroyuki Sawano</h3>
            <button @click="addMusic('Titre de la musique')">+</button>
            <button class="play">▶️</button>
        </div>

        <div class="music">
            <h2>Orelsan</h2>
            <h3>Tout va bien</h3>
            <button @click="addMusic('Titre de la musique')">+</button>
            <button class="play">▶️</button>
        </div>

        <div class="music">
            <h2>Lil Nas X</h2>
            <h3>STAR WALKIN'</h3>
            <button @click="addMusic('Titre de la musique')">+</button>
            <button class="play">▶️</button>
        </div>

        <div class="music">
            <h2>Kadebostany</h2>
            <h3>Crazy In Love</h3>
            <button @click="addMusic('Titre de la musique')">+</button>
            <button class="play">▶️</button>
        </div>

        <div class="music">
            <h2>Ashes Remain</h2>
            <h3>Right Here</h3>
            <button @click="addMusic('Titre de la musique')">+</button>
            <button class="play">▶️</button>
        </div>

        <div class="music">
            <h2>Imagine Dragons</h2>
            <h3>Whatever it Takes</h3>
            <button @click="addMusic('Titre de la musique')">+</button>
            <button class="play">▶️</button>
        </div>

        <div class="music">
            <h2>Dhruv</h2>
            <h3>Double Take</h3>
            <button @click="addMusic('Titre de la musique')">+</button>
            <button class="play">▶️</button>
        </div>

        <div class="music">
            <h2>Vaultboy</h2>
            <h3>Everything Sucks</h3>
            <button @click="addMusic('Titre de la musique')">+</button>
            <button class="play">▶️</button>
        </div>

        <div class="music">
            <h2>Oh The Larceny</h2>
            <h3>This Is It</h3>
            <button @click="addMusic('Titre de la musique')">+</button>
            <button class="play">▶️</button>
        </div>
    </div>
</template>


<style scoped>
div {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.music {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #2c3e50;
    width: 60%;
    height: 120px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    color: white;
}

.plus {
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-weight: bold;
}

.play {
    border: none;
    border-radius: 5px;
    padding: 10px;
    color: white;
    font-weight: bold;
}
</style>