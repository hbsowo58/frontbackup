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
    console.log(this.isSuperAdmin)
    if(this.isSuperAdmin === false && this.isValidSDS() === false){
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
    
    isValidSDS() {
      let belong = this.$store.state['user'].profile['github'];
      let email = this.user['email'];

      if(belong === undefined) return false;
      if(belong === null) return false;
      if(email === undefined) return false;
      if(email === null) return false;

      belong = belong.toUpperCase();
      email = email.toLowerCase();

      if(belong !== 'SDS') return false;
      if(email.indexOf("@samsung.") === -1) return false;

      return true;
    },
  },
  data () {
    return {
    }
  }
}
</script>