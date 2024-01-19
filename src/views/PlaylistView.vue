<script>
export default {
  name: 'PlaylistView',
  props: {
    playlist: Array
  }
}
</script>


<template>
    <div>
        <ul>
            <li v-for="(music, index) in playlist" :key="index">{{ music }}</li>
        </ul>
    </div>
</template>


<style scoped>
</style>