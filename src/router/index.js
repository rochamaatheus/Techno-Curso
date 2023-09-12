import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeVue from '@/views/Home';
import ContatoVue from '@/views/Contato';
import CursosVue from '@/views/Cursos';
import CursoVue from '@/views/Curso';
import AulaVue from '@/views/Aula';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeVue,
  },
  {
    path: '/contato',
    name: 'contato',
    component: ContatoVue,
  },
  {
    path: '/cursos',
    name: 'cursos',
    component: CursosVue,
  },
  {
    path: '/cursos/:curso',
    name: 'curso',
    component: CursoVue,
    props: true,
    children: [
      {
        path: ':aula',
        name: 'aula',
        component: AulaVue,
        props: true,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
