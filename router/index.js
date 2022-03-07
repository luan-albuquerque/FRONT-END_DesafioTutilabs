import { createRouter,createWebHistory } from 'vue-router'
import http from "../services/login"

async function verifyToken(to,from, next) {
  
  const token = sessionStorage.getItem("token")

  if(!token) {
    return next("/login")
  }

  await http.verifyLogin().then((response) => {
   console.log(response.status)
    if(response.status === 200) {
      return next()
    } 
    return next("/login")
  }).catch((error) => {
     return next("/login")
  })
  return next("/login")
}

const routes = [
  { path: '/', 
  component: () => import("../src/views/Login.vue"),
},
  { path: '/login', 
  component: () => import("../src/views/Login.vue") 
},
{ path: '/home', 
  component: () => import("../src/views/Home.vue") ,
  beforeEnter: verifyToken

},
{ path: '/department', 
  component: () => import("../src/views/Department.vue"),
  beforeEnter: verifyToken 
},
{ path: '/department/:id',
  name: 'departmentEdit', 
  component: () => import("../src/views/EditDepartment.vue"),
  beforeEnter: verifyToken
},
{ path: '/department-create',
  name: 'departmentCreate', 
  component: () => import("../src/views/CreateDepartment.vue"),
  beforeEnter: verifyToken
},

{ path: '/collaborators', 
  component: () => import("../src/views/Collaborators.vue") ,
  beforeEnter: verifyToken
},
{ path: '/collaborators/:id',
  name: 'collaboratorsEdit', 
  component: () => import("../src/views/EditCollaborators.vue") ,
  beforeEnter: verifyToken
},
{ path: '/collaborators-create',
  name: 'collaboratorCreate', 
  component: () => import("../src/views/CreateCollaborators.vue") ,
  beforeEnter: verifyToken
},


]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router