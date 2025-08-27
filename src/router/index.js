import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddStudent from '../views/students/AddStudent.vue'
import EditStudent from '../views/students/EditStudents.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/students',
      name: 'students',
      component: () => import('../views/students/Students.vue'),
    },
    {
      path: '/add-student',
      name: 'addstudent',
      component: AddStudent,
    },
    {
      path: '/edit-student/:id',
      name: 'editstudent',
      component: EditStudent,
    }
  ],
})

export default router
