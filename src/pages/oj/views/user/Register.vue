<template>
<div>
    <Form ref="formRegister" :model="formRegister" :rules="ruleRegister">
      <FormItem prop="username">
        <Input type="text" v-model="formRegister.username" :placeholder="$t('m.RegisterUsername')" size="large" @on-enter="handleRegister">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="email">
        <Input v-model="formRegister.email" :placeholder="$t('m.Email_Address')" size="large" @on-enter="handleRegister">
        <Icon type="ios-email-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>

      <FormItem prop="userProfileName">
        <Input v-model="formRegister.real_name" :placeholder="$t('m.real_name')" size="large"
      >
        <Icon type="ios-contact-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>


      <FormItem prop="password">
        <Input type="password" v-model="formRegister.password" :placeholder="$t('m.RegisterPassword')" size="large" @on-enter="handleRegister">
        <Icon type="ios-locked-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="passwordAgain">
        <Input type="password" v-model="formRegister.passwordAgain" :placeholder="$t('m.Password_Again')" size="large" @on-enter="handleRegister">
        <Icon type="ios-locked-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="captcha" style="margin-bottom:20px">
        <div class="oj-captcha">
          <div class="oj-captcha-code">
            <Input v-model="formRegister.captcha" :placeholder="$t('m.Captcha')" size="large" @on-enter="handleRegister">
            <Icon type="ios-lightbulb-outline" slot="prepend"></Icon>
            </Input>
          </div>
          <div class="oj-captcha-img">
            <Tooltip content="Click to refresh" placement="top">
              <img :src="captchaSrc" @click="getCaptchaSrc"/>
            </Tooltip>
          </div>
        </div>
      </FormItem>

      <div class="agree">
        <textarea>개인정보 취급방침

제 1조 [목적]
이 약관은 민코딩 및 민코딩연구소 (이하 “회사”)”에서 운영하는 "민코딩 패밀리사이트” (이하 "웹사이트")에서 제공하는 인터넷 관련 서비스(이하 "서비스")를 이용함에 있어 회사와 이용자의 권리, 의무 및 책임 사항을 규정함을 목적으로 합니다.

제2조 [용어의 정의]
약관에서 사용하는 용어의 정의는 다음과 같습니다
- 민코딩 패밀리사이트 : 민코딩 패밀리사이트는 “민코딩”, “민코딩연구소” “민풀” 사이트를 의미합니다. 이는 컴퓨터, 모바일 등 정보통신 설비를 이용하여 서비스 등을 거래할 수 있도록 설정한 가상의 영업장을 말하고, 아울러 민코딩 패밀리사이트를 운영하는 사업자의 의미로도 사용합니다.
- 서비스 : 구현되는 단말기와 상관없이 회원 혹은 웹사이트 방문자가 이용할 수 있는 온라인 저지 서비스를 의미합니다.
- 회원 : 회사의 서비스에 접속하여 본 약관에 따라 회사와 이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 고객을 말합니다.
- 이용계약 : 이 약관을 포함하여 서비스 이용과 관련하여 회사와 회원 간에 체결하는 모든 계약을 말합니다.
- 해지 : 회사 또는 회원이 이용계약을 해약하는 것을 말합니다.
- 문제 : 서비스에 업로드되어있는 문제를 말합니다.
- 강의 : 서비스에서 등록받아 진행하는 오프라인 강의를 말합니다.
- 유료서비스 : 회사가 유료로 제공하는 각종 온라인디지털콘텐츠 및 제반 서비스를 의미합니다.
이 약관에서 사용하는 용어 중 제1항에서 정하지 아니한 것은 관계 법령 및 서비스 별 안내에서 정하는 바에 따르며, 그 외에는 일반 관례에 따릅니다.

제3조 [약관 효력 및 변경]
이 약관은 그 내용을 회사의 웹사이트에 게시하거나 기타의 방법으로 회원에게 공지함으로 효력이 발생합니다
회사는 약관의규제에관한법률, 정보통신망이용촉진및정보보호등에관한법률(이하 정보통신망법) 등 관련법을 위배하지 않는 범위에서 사전 고지 없이 이 약관의 내용을 변경할 수 있으며, 변경된 약관은 제1항과 같은 방법으로 공지 또는 통지함으로 효력이 발생됩니다.
회원은 정기적으로 웹사이트에 방문하여 약관의 변경사항을 확인하여야 합니다. 변경된 약관에 대한 정보를 알지 못해 발생하는 회원의 피해는 회사에서 책임지지 않습니다. 단 회원에게 불리한 약관의 개정의 경우에는 공지 외에 일정기간 전자우편, 쪽지, 로그인시 동의양식 등의 전자적 수단을 통해 따로 명확히 통지하도록 합니다.

제4조 [약관 외 준칙]
회사는 필요한 경우 서비스 내의 개별항목에 대하여 개별약관 또는 운영원칙(이하 '서비스 별 안내'라 합니다.)를 정할 수 있으며, 회원은 각 서비스 별 안내에 대해 회원가입과 동시에 동의한 것으로 간주합니다. 본 약관과 서비스 별 안내의 내용이 상충되는 경우에는 서비스 별 안내의 내용을 우선하여 적용합니다.
        </textarea>
      </div>

      <label>
        <input type="checkbox" class="agreeCheckbox" prop="agree" v-model="formRegister.agree"
        @on-enter="handleRegister" />  약관에 동의합니다.
      </label>

    </Form>
    <div class="footer">
      <Button
        type="primary"
        @click="handleRegister"
        class="btn" long
        :loading="btnRegisterLoading">
        {{$t('m.UserRegister')}}
      </Button>
      <!--
      <Button
        type="ghost"
        @click="switchMode('login')"
        class="btn" long>
        {{$t('m.Already_Registed')}}
      </Button>
      -->
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import api from '@oj/api'
  import { FormMixin } from '@oj/components/mixins'
  
  export default {
    mixins: [FormMixin],
    mounted () {
      this.getCaptchaSrc()
    },
    data () {
      const CheckUsernameNotExist = (rule, value, callback) => {
        api.checkUsernameOrEmail(value, undefined).then(res => {
          if (res.data.data.username === true) {
            callback(new Error(this.$i18n.t('m.The_username_already_exists')))
          } else {
            callback()
          }
        }, _ => callback())
      }
      const CheckEmailNotExist = (rule, value, callback) => {
        api.checkUsernameOrEmail(undefined, value).then(res => {
          if (res.data.data.email === true) {
            callback(new Error(this.$i18n.t('m.The_email_already_exists')))
          } else {
            callback()
          }
        }, _ => callback())
      }
      const CheckPassword = (rule, value, callback) => {
        if (this.formRegister.password !== '') {
          this.$refs.formRegister.validateField('passwordAgain')
        }
        callback()
      }
      const CheckAgainPassword = (rule, value, callback) => {
        if (value !== this.formRegister.password) {
          callback(new Error(this.$i18n.t('m.password_does_not_match')))
        }
        callback()
      }
      return {
        btnRegisterLoading: false,
        formRegister: {
          username: '',
          password: '',
          passwordAgain: '',
          email: '',
          captcha: '',
          real_name: ''
        },
        ruleRegister: {
          username: [
            {required: true, trigger: 'blur'},
            {validator: CheckUsernameNotExist, trigger: 'blur'}
          ],
          email: [
            {required: true, type: 'email', trigger: 'blur'},
            {validator: CheckEmailNotExist, trigger: 'blur'}
          ],
          password: [
            {required: true, trigger: 'blur', min: 6, max: 20},
            {validator: CheckPassword, trigger: 'blur'}
          ],
          passwordAgain: [
            {required: true, validator: CheckAgainPassword, trigger: 'change'}
          ],
          captcha: [
            {required: true, trigger: 'blur', min: 1, max: 10}
          ],
          // real_name: [
          //   {required: true, trigger: 'blur', min: 1, max: 10}
          // ],
          real_name: [
            {required: true, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      ...mapActions(['changeModalStatus', 'getProfile']),
      switchMode (mode) {
        this.changeModalStatus({
          mode,
          visible: true
        })
      },
      handleRegister () {
        this.validateForm('formRegister').then(valid => {
          let formData = Object.assign({}, this.formRegister)
          if (formData.agree !== true) {
            this.$error(this.$i18n.t('약관에 동의를 해주세요.'))
            return
          }
          delete formData['passwordAgain']
          this.btnRegisterLoading = true
          api.register(formData).then(res => {
            this.$success(this.$i18n.t('m.Thanks_for_registering'))
            this.switchMode('login')
            this.btnRegisterLoading = false
          }, _ => {
            this.getCaptchaSrc()
            this.formRegister.captcha = ''
            this.btnRegisterLoading = false
            // this.formRegister.agree = ''
          })
        })
      }
    },
    computed: {
      ...mapGetters(['website', 'modalStatus'])
    }
  }
</script>

<style scoped lang="less">
  .agree{
    // background:red;
    textarea{
      width:100%;
      height:70px;
    }
  }

  .agreeCheckbox{
    margin-top:5px;
    transform: scale(1.2);
  }

  .footer {
    overflow: auto;
    margin-top: 20px;
    margin-bottom: -15px;
    text-align: left;
    .btn {
      margin: 0 0 15px 0;
      &:last-child {
        margin: 0;
      }
    }
  }
</style>