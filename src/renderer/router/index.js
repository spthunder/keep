import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default,
      redirect:'/todo',
      children:[
        {
          path:'todo',
          component: () => import('../components/TodoList/toDoList.vue')
        },
        {
          path:'done',
          component: () => import('../components/DoneList/doneList.vue')
        }
      ]
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
