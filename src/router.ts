import Vue from 'vue';
import Router from 'vue-router';
import AnalysisRequest from './views/AnalysisRequest.vue';
import AnalysisResultList from './views/AnalysisResultList.vue';
import AnalysisResult from './views/AnalysisResult.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'analysisResultList',
      component: AnalysisResultList
    },
    {
      path: '/analysisRequest',
      name: 'analysisRequest',
      component: AnalysisRequest
    },
    {
      path: '/analysisResultList',
      name: 'analysisResultList',
      component: AnalysisResultList
    },
    {
      path: '/analysisResult/:id',
      name: 'analysisResult',
      component: AnalysisResult
    }
  ]
});
