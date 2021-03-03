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
  name: 'Notice-miracom',
  //   created(){
  //   // console.log(this.$store.getters.isSuperAdmin)
  //   const check = this.$store.getters.userinfonum;

  //   console.log(check)
  //   if(!check.includes('MIRACOM')){
  //     alert("접근이 금지된 게시판입니다.")
  //     this.$router.push("/")
  //   }
  // },
  created(){
    if(this.isSuperAdmin === false && this.isValidMiracom() === false){
      this.$router.push("/");
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
    console.log('heelo')
  },
  computed:{
  ...mapState(['user']),
  ...mapGetters(['website', 'modalStatus', 'user', 'isAuthenticated', 'isAdminRole', 'isSuperAdmin', 'userinfo']),
  },
  methods: {
    ...mapActions(['getProfile', 'changeModalStatus']),
    isValidMiracom(){
      let id = this.user['username'];
      let belong = this.$store.state['user'].profile['github'];
      console.log(id,belong)

      if(id === null) return false;
      if(id === undefined) return false;
      if(belong === null) return false;
      if(belong === undefined) return false;
      
      id = id.toLowerCase();
      belong = belong.toUpperCase();

      if(belong !== 'MIRACOM') return false;
      if(id.length !== 15) return false;
      if(id.slice(0,8) !== 'miracom_') return false;
      if(!isNaN(id.slice(-7)) === false) return false;
      return true;
    }
  },
  data () {
    return {
    }
  },
}
</script>
