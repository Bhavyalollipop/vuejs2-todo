import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Index.vue'
import Layout from '@/components/Layout.vue'
import PlannedTask from '@/views/Task/Planned.vue'
import GeneralTask from '@/views/Task/Task.vue'
import ImportantTask from '@/views/Task/ImportantTask.vue'

Vue.use(VueRouter)

// permission route

const pages = [{
    path: 'general',
    name: 'GeneralTask',
    component: GeneralTask,
    props: true
  },
  {
    path: 'important',
    name: 'ImportantTask',
    component: ImportantTask,
    props: true
  },
  {
    path: 'planned',
    name: 'PlannedTask',
    component: PlannedTask,
    props: true
  },
]
const routes = [{
  path: "/app",
  name: "Layout",
  component: Layout,
  children: pages
}, {
  path: "/",
  name: "Index",
  component: Login
}]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
