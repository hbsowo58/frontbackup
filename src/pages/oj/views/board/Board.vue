<template>
  <div>
    <Read/>
  </div>
</template>

<script>
import Read from './Read.vue'
import {mapGetters, mapState, mapActions} from 'vuex'
export default {
  components: { Read },
  name: 'Board',
  created(){
    const check = this.$store.getters.userinfonum;
    // console.log(!check.includes('sds'))
    if(!check.includes('sds')){
      alert("접근이 금지된 게시판입니다.")
      this.$router.push("/")
    }
  },
  beforeMount(){
    // console.log("cehck")
    // console.log(this.user);
    // console.log(this.user.profile)
    // console.log('h1', this.user.profile.github);
  },
  mounted(){
    this.getProfile()
    console.log(this.isSuperAdmin)
    console.log(this.userinfo)
    // console.log('hi2', this.profile.github)
    // console.log(this.user)
    // console.log(this.isSuperAdmin)
    // console.log(this.userinfo)
  },
  computed:{
  ...mapState(['user']),
  ...mapGetters(['website', 'modalStatus', 'user', 'isAuthenticated', 'isAdminRole', 'isSuperAdmin', 'userinfo']),
  },
  methods: {
    ...mapActions(['getProfile', 'changeModalStatus']),
  },
  data () {
    return {
    }
  }
}
</script>