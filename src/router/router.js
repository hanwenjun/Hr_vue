import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import mycom from '../components/mycom'
import dept from '../components/dept'
import App from '../App'
import deptManager from '../components/deptManager'
import addDept from '../components/addDept'
import Index from '../components/index.vue'
import deptupdate from '../components/deptUpdate.vue'

Vue.use(Router)

export default new Router({
routes: [
        {
            path: '/',
            name: '部门管理',
            component: Index,
            redirect: '/deptManager',
            children: [
                {
                    path: '/deptManager',
                    name: '部门查询',
                    component: deptManager
                },
                {
                    path: '/addDept',
                    name: '添加部门',
                    component: addDept
                },
                {
                    path: '/deptupdate',
                    component: deptupdate
                }
            ]
        }
        
    ]
})