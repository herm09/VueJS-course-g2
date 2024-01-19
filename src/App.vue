<script>
import { RouterLink, RouterView } from 'vue-router'
export default { //stocke des éléments que l'on pourra réutiliser plus tard
  name: 'App',
}
</script>



<template>

  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/personnages">Personnages</RouterLink>
    <RouterLink to="/compteur">Compteur</RouterLink>
    <RouterLink to="/main">Main</RouterLink>
    <RouterLink to="/playlist">Playlist</RouterLink>
  </nav>

  <RouterView />

</template>



<style scoped> /*scoped = tout ce qu'on écrit en css ne s'appliquera que à cette page là*/

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
