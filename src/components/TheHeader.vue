<template>
  <header>
    <nav>
      <div class="logo">
        <router-link to="/">Techno</router-link>
      </div>
      <ul>
        <li>
          <router-link :to="{ name: 'cursos' }">Cursos</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'contato' }">Contato</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>

<style scoped>
header {
  background-color: #234;
}

header a {
  color: #fff;
}

a.router-link-active {
  color: #4b8;
}

nav {
  max-width: 50rem;
  margin: 0 auto;
  display: flex;
  align-content: space-between;
  align-items: center;
  padding: 1.2rem;
  flex-wrap: wrap;
}

.logo {
  flex: 1;
}

.logo a {
  font-size: 1.2rem;
  color: #fff !important;
}

ul li {
  display: inline-block;
}

li a {
  padding: 0 0.75rem;
  margin-right: 0.75rem;
}
</style>
