import Vue from 'vue'
import VueRouter from 'vue-router'
import ISTJ from '../layout/ISTJ.vue'
import ISFJ from '../layout/ISFJ.vue'
import INFJ from '../layout/INFJ.vue'
import INTJ from '../layout/INTJ.vue'

import ISTP from '../layout/ISTP.vue'
import ISFP from '../layout/ISFP.vue'
import INFP from '../layout/INFP.vue'
import INTP from '../layout/INTP.vue'

import ESTP from '../layout/ESTP.vue'
import ESFP from '../layout/ESFP.vue'
import ENFP from '../layout/ENFP.vue'
import ENTP from '../layout/ENTP.vue'

import ESTJ from '../layout/ESTJ.vue'
import ESFJ from '../layout/ESFJ.vue'
import ENFJ from '../layout/ENFJ.vue'
import ENTJ from '../layout/ENTJ.vue'


Vue.use(VueRouter)


const routes = [
  { path: '/ISTJ', component: ISTJ },
  { path: '/ISFJ', component: ISFJ },
  { path: '/INFJ', component: INFJ },
  { path: '/INTJ', component: INTJ },

  { path: '/ISTP', component: ISTP },
  { path: '/ISFP', component: ISFP },
  { path: '/INFP', component: INFP },
  { path: '/INTP', component: INTP },

  { path: '/ESTP', component: ESTP },
  { path: '/ESFP', component: ESFP },
  { path: '/ENFP', component: ENFP },
  { path: '/ENTP', component: ENTP },

  { path: '/ESTJ', component: ESTJ },
  { path: '/ESFJ', component: ESFJ },
  { path: '/ENFJ', component: ENFJ },
  { path: '/ENTJ', component: ENTJ },


]

const router = new VueRouter(
  { routes }
)

export default router