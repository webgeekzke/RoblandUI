import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import UserList from './components/UserList.vue'
import UserDocument from './components/UserDocuments.vue'
import ViewDocuments from './components/ViewUserDocuments.vue'
import { createRouter,createWebHistory } from 'vue-router'
 
const routes= [
    {
        name:'Home',
        component:Home,
        path:"/"
    },
    {
        name:'SignUp',
        component:SignUp,
        path:"/sign-up"
    }, {
        name:'User-List',
        component:UserList,
        path:"/user-list"
    }, {
        name:'User-Document',
        component:UserDocument,
        path:"/user-document"
    }, {
        name:'View-Document',
        component:ViewDocuments,
        path:"/view-document"
    },
]
 
const router = createRouter({
    history: createWebHistory(),
    routes,
})
    export default router;