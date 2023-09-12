<template>
  <div>
    <TheHeader />
    <router-view class="container"></router-view>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
body {
  margin: 0px;
  font-family: 'Avenir', Arial, Helvetica, sans-serif;
}

.container {
  max-width: 50rem;
  margin: 0 auto;
  padding: 1.2rem;
}

ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

a {
  font-weight: bold;
  text-decoration: none;
  color: #234;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a.router-link-active {
  color: #4b8;
}

.v-enter {
  transform: translate3d(-20px, 0, 0);
}

.v-enter-active {
  transition: all 0.3s;
}

.conteudo {
  display: grid;
  grid-template-columns: minmax(200px, 1fr) minmax(150px, 400px);
  gap: 1.875rem;
}

@media (max-width: 28.125rem) {
  .conteudo {
    display: block;
  }
}
</style>
