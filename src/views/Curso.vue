<template>
  <div>
    <div v-if="loading"><PageLoading /></div>
    <transition>
      <div v-if="api" class="conteudo">
        <div>
          <h1>{{ api.nome }}</h1>
          <p>{{ api.descricao }}</p>
          <h2>Aulas</h2>
          <ul class="aulas">
            <li v-for="aula in api.aulas" :key="aula.id">
              <router-link :to="{ name: 'aula', params: { aula: aula.id } }">
                {{ aula.nome }}
              </router-link>
            </li>
          </ul>
        </div>
        <router-view></router-view>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData';

export default {
  name: 'CursoVue',
  mixins: [fetchData],
  props: ['curso'],
  created() {
    this.fetchData(`/curso/${this.curso}`);
  },
};
</script>

<style>
.aulas li a {
  display: block;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  padding: 1.2rem;
  margin-bottom: 0.75rem;
  border-radius: 4px;
}

.aulas li a.router-link-active {
  background-color: #4b8;
  color: #fff;
}
</style>
