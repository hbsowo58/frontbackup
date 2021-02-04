<template>
  <div id="header">
    <Menu theme="light" mode="horizontal" @on-select="handleRoute" class="oj-menu">
    <!-- 기본 파란줄 제거
    <Menu theme="light" mode="horizontal" @on-select="handleRoute" :active-name="activeMenu" class="oj-menu">
    -->
      <Menu-item name="/" class="logo">
      <img src="../../../assets/logo_01.svg" class="logoImage"/>
      </Menu-item>

      <!-- 
      <Menu-item name="/">
        <Icon type="home"></Icon>
        <span class="menu-title">{{$t('m.Home')}}</span>
      </Menu-item>
      -->

      <Submenu name="/category" v-if="isSuperAdmin">
        <template slot="title">
          <Icon type="ios-list-outline" style="margin-left:-2px"></Icon>
          <span class="menu-title">{{$t('m.Category')}}</span>
        </template>
        <Menu-item name="/category">
          {{$t('m.G1_name')}}
        </Menu-item>
        <Menu-item name="/category">
          {{$t('m.G2_name')}}
        </Menu-item>
        <Menu-item name="/category">
          {{$t('m.G3_name')}}
        </Menu-item>
        <Menu-item name="/category">
          {{$t('m.G4_name')}}
        </Menu-item>
        <Menu-item name="/category">
          {{$t('m.G5_name')}}
        </Menu-item>
        <Menu-item name="/category">
          {{$t('m.G6_name')}}
        </Menu-item>        
      </Submenu>

      <Menu-item name="/contest" class="contest">
        <Icon type="person-stalker"></Icon>
        <span class="menu-title">{{$t('m.Contests')}}</span>
      </Menu-item>
      

      <!--
      <Menu-item name="/problem" v-if="isSuperAdmin">
        <Icon type="ios-keypad"></Icon>
        <span class="menu-title">{{$t('m.NavProblems')}}</span>
      </Menu-item>
      -->
      
      <Menu-item name="/status" v-if="isSuperAdmin" class="status">
        <Icon type="ios-pulse-strong"></Icon>
        <span class="menu-title">{{$t('m.NavStatus')}}</span>
      </Menu-item>
      
      <Submenu name="rank" v-if="isSuperAdmin" class="rank">
        <template slot="title">
          <Icon type="podium"></Icon>
          <span class="menu-title">{{$t('m.Rank')}}</span>
        </template>
        <Menu-item name="/acm-rank">
          {{$t('m.ACM_Rank')}}
        </Menu-item>
        <Menu-item name="/oi-rank">
          {{$t('m.OI_Rank')}}
        </Menu-item>
      </Submenu>

      <Submenu name="about" class="about">
        <template slot="title">
          <Icon type="android-bulb"></Icon>
          <span class="menu-title">{{$t('m.About')}}</span>
        </template>
        <Menu-item name="/about">
          {{$t('m.Judger')}}
        </Menu-item>
        <Menu-item name="/FAQ">
          {{$t('m.FAQ')}}
        </Menu-item>
        <Menu-item name="/Java">
          {{$t('Java 입출력방법')}}
        </Menu-item>
      </Submenu>

      <Submenu name="board" v-if="isSuperAdmin || user['email'] !== undefined && (checkEmail(user['email']) === 'SAMSUNG') || user['email'] !== undefined && (checkEmail(user['email']) === 'MIRACOM')">
        <template slot="title">
          <Icon type="ios-contact"></Icon>
          <span class="menu-title">{{$t('질문게시판')}}</span>
        </template>
      <Menu-item name="/board" v-if=" isSuperAdmin || user['email'] !== undefined && (checkEmail(user['email']) === 'SAMSUNG')">
        <Icon type="ios-contact"></Icon>
        <span class="board">SDS 전용</span>
      </Menu-item>
      <Menu-item name="/board-miracom"  v-if=" isSuperAdmin || user['email'] !== undefined && (checkEmail(user['email']) === 'MIRACOM')">
        <Icon type="ios-contact"></Icon>
        <span class="board">미라콤 전용</span>
      </Menu-item>
      <Menu-item name="/" disabled>
        <Icon type="ios-contact"></Icon>
        <span class="board">강사 전용</span>
      </Menu-item>
      </Submenu>
     
      <template v-if="!isAuthenticated">
        <div class="btn-menu">
          <Button type="ghost"
                  ref="loginBtn"
                  shape="circle"
                  @click="handleBtnClick('login')">{{$t('m.Login')}}
          </Button>
          <Button v-if="website.allow_register"
                  type="ghost"
                  shape="circle"
                  @click="handleBtnClick('register')"
                  style="margin-left: 5px;">{{$t('m.Register')}}
          </Button>
        </div>
      </template>
      <template v-else>
        <Dropdown class="drop-menu" @on-click="handleRoute" placement="bottom" trigger="click">
          <Button type="text" class="drop-menu-title">{{ user.username }}님
            <Icon type="arrow-down-b"></Icon>
          </Button>
          <Dropdown-menu slot="list">
            <Dropdown-item name="/user-home">{{$t('m.MyHome')}}</Dropdown-item>
            <Dropdown-item name="/status?myself=1" v-if="isAdminRole || isSuperAdmin">{{$t('m.MySubmissions')}}</Dropdown-item>
            <Dropdown-item name="/problem" v-if="isSuperAdmin">{{$t('m.NavProblems')}}</Dropdown-item>
            <Dropdown-item name="/setting/profile">{{$t('m.Settings')}}</Dropdown-item>
            <Dropdown-item v-if="isAdminRole" name="/admin">{{$t('m.Management')}}</Dropdown-item>
            <Dropdown-item divided name="/logout">{{$t('m.Logout')}}</Dropdown-item>
          </Dropdown-menu>
        </Dropdown>
      </template>
    </Menu>
    <Modal v-model="modalVisible" :width="400">
      <div slot="header" class="modal-title">{{$t('m.Welcome_to')}} {{website.website_name_shortcut}}</div>
      <component :is="modalStatus.mode" v-if="modalVisible"></component>
      <div slot="footer" style="display: none"></div>
    </Modal>
  </div>
</template>

<script>
  import { mapGetters, mapActions, mapState } from 'vuex'
  import login from '@oj/views/user/Login'
  import register from '@oj/views/user/Register'

  export default {
    components: {
      login,
      register
    },
    mounted () {
      this.getProfile()
      // console.log(this.$router)
    },
    computed:{
      ...mapState(["user"])
    },
    methods: {
      ...mapActions(['getProfile', 'changeModalStatus']),
      handleRoute (route) {
        if (route && route.indexOf('admin') < 0) {
          this.$router.push(route);
          // .catch(e =>{
          //   if(e.name !== "NaviationDuplicated"){
          //     return this.currentRoute
          //   }
          // })
        } else {
          window.open('/admin/')
        }
      },
      handleBtnClick (mode) {
        this.changeModalStatus({
          visible: true,
          mode: mode
        })
      },
      checkEmail (email) {
        if (email === null) return 1
        //root
        if(email.indexOf('samsung') > 1){
          return 'SAMSUNG'
        }
        if(email.indexOf('miracom.co.kr') > 1){
          return 'MIRACOM'
        }
        return 0
        //samsung 포함
      }
    },
    computed: {
      ...mapGetters(['website', 'modalStatus', 'user', 'isAuthenticated', 'isAdminRole', 'isSuperAdmin']),
      
      activeMenu () {
        return '/' + this.$route.path.split('/')[1]
      },
      modalVisible: {
        get () {
          return this.modalStatus.visible
        },
        set (value) {
          this.changeModalStatus({visible: value})
        }
      }
    }
  }
</script>

<style lang="less" scoped>


  #header {
    min-width: 300px;
    position: fixed;
    top: 0;
    left: 0;
    height: auto;
    width: 100%;
    z-index: 1000;
    background-color: #fff;
    // box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);

    .oj-menu {
      background: #fdfdfd;
      font-family: 'Noto Sans KR', sans-serif;
      .menu-title{
        // background:red;
        font-size:16px;
        font-weight: 500;
        letter-spacing:-1px;
        margin-left:-7px;
      }
      .logo {
      margin-left:5vw;
      padding-top:1vh;
      padding-left:0px;
      padding-right:0px;
      margin-right:3vw;
        .logoImage{
          width:80px;
          height:30px;
          font-size:16px;
        }
      }
      .board{
        // background:red;
        font-size:16px;
        font-weight: 500;
      }
    }

    .drop-menu {
      float: right;
      margin-right: 50px;
      position: absolute;
      right: 10px;
      &-title {
        font-size: 18px;
      }
    }
    .btn-menu {
      font-size: 16px;
      float: right;
      margin-right: 5vw;
    }
  }

  .modal {
    &-title {
      font-size: 18px;
      font-weight: 600;
    }
  }

@media screen and (max-width: 1000px) {
  #header{
    .about{
      display:none;
    }
    .drop-menu{
      margin-right:0px;
    }
  }
}
@media screen and (max-width: 770px) {
  #header {
    .oj-menu {
      .logo {
        .logoImage{
          width:70px;
          height:30px;
          font-size:16px;
        }
      }
    }
  }
  .rank{
    display: none;
  }
}
@media screen and (max-width: 600px){
  .status{
    display:none;
  }
}
@media screen and (max-width: 400px) {
  #header {
    .btn-menu {
      float: none;
      margin-right: 0;
    }
    .oj-menu{
      .logo{
        .logoImage{
          width:60px;
          height:20px;
        }
      }
    }
    .ivu-menu-item{
      padding:0px 10px;
    }
    .contest{
      display:none;
    }
  }
}
</style>
