<template>
  <div>
    <div v-if="loading"><PageLoading /></div>
    <transition>
      <div v-if="api" class="conteudo">
        <div>
          <h1>Sobre a {{ api.titulo }}</h1>
          <p>{{ api.descricao }}</p>
          <router-link :to="{ name: 'cursos' }"
            ><button class="btn-cursos">Cursos</button></router-link
          >
          <div>
            <h2>Avaliações</h2>
            <ul>
              <li v-for="avaliacao in api.avaliacoes" :key="avaliacao.nome">
                <p>{{ avaliacao.nome }}</p>
                <p>{{ avaliacao.descricao }}</p>
              </li>
            </ul>
          </div>
        </div>
        <img src="../assets/aprender.png" alt="Aprender Web Design" />
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData';
import { RouterLink } from 'vue-router';

export default {
  name: 'HomeVue',
  mixins: [fetchData],
  created() {
    this.fetchData('/home');
  },
  components: { RouterLink },
};
</script>

<style>
.btn-cursos {
  border: none;
  background-color: #4b8;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  padding: 15px 2.5rem;
  font-size: 1rem;
  margin-top: 0.75rem;
  margin-bottom: 2.5rem;
  font-family: 'Avenir', Arial, Helvetica, sans-serif;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
}
</style>
