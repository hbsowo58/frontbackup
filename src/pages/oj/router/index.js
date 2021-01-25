import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import storage from '@/utils/storage'
import {STORAGE_KEY} from '@/utils/constants'
import {sync} from 'vuex-router-sync'
import {types, default as store} from '../../../store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
  routes
})

// 全局身份确认
router.beforeEach((to, from, next) => {
  Vue.prototype.$Loading.start()
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!storage.get(STORAGE_KEY.AUTHED)) {
      Vue.prototype.$error('Please login first')
      store.commit(types.CHANGE_MODAL_STATUS, {mode: 'login', visible: true})
      next({
        name: 'home'
      })  
    }
    else if(to.name === "Detail"){
    (async function(){
      // console.log(to);
      // 데이터를 가져와야한다
      // console.log(to.params.board_id);
      // console.log(store);  
      await store.dispatch("getBoard", to.params.board_id)
      // const reuslt = await this.getBoard(this.$route.params["board_id"]);
      // console.log(store.state.board);
      // console.log(store.getters.isSuperAdmin);
      const data = Object.entries(store.state.board);
      // console.log(data);
      // console.log(store.state.user.profile.id);
      // console.log(data[0][1].created_by);
      // 유저 아이디와 비교 + isSuperAdmin일떄 next
      // if(data[1].id )
      // console.log(data[0][1].created_by);
      // console.log(store.state.user.profile.user.id);
      if(data && data[0][1].flag === 3){
        if(store.getters.isSuperAdmin || data[0][1].created_by === store.state.user.profile.user.id){
          next();
        }else{
          next({
            name: 'Board'
          })
        }
      }else{
        next();
      }
          
      

    })();
    }
     else {
      //  console.log(to);
      //  조건 board의 flag를 가져와야 한다.
      //  console.log(store.state)
      next()
    }
  } else {
    next()
  }
})

router.afterEach((to, from, next) => {
  Vue.prototype.$Loading.finish()
})

sync(store, router)

export default router
