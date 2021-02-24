<template>
  <div>
    <ReadMiracom />
  </div>
</template>

<script>
import ReadMiracom from './ReadMiracom.vue'
import {mapGetters, mapState, mapActions} from 'vuex'
export default {
  components: { ReadMiracom },
  name: 'Board-miracom',
    created(){
    // console.log(this.$store.getters.isSuperAdmin)
    const check = this.$store.getters.userinfonum;

    console.log(check)
    if(!check.includes('MIRACOM')){
      alert("접근이 금지된 게시판입니다.")
      this.$router.push("/")
    }
  },
  mounted(){
    this.getProfile()
    // console.log(this.isSuperAdmin)
    // console.log(this.userinfo.github)
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
  },
}
</script>
