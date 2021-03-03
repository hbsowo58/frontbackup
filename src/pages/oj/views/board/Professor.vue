<template>
  <div>
    <ProfessorRead/>
  </div>
</template>

<script>
import ProfessorRead from './ProfessorRead.vue'
import {mapGetters, mapState, mapActions} from 'vuex'
export default {
  components: { ProfessorRead },
  name: 'Professor',
  created(){
    // console.log(this.isSuperAdmin)
    if(this.isSuperAdmin === false){
      this.$router.push("/");
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
    // console.log(this.isSuperAdmin)
    // console.log(this.userinfo)
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