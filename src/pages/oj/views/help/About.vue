<template>
  <div>
    <panel class="container">
      <div slot="title">{{ $t("m.Compiler") }} & {{ $t("m.Judger") }}</div>
      <div class="content markdown-body">
        <ul>
          <div :key="lang.name" v-for="lang in languages">
            <li v-if="lang.name !== 'C' && lang.name !== 'Python2' && lang.name !== 'Golang'">
              {{ lang.name }} ( {{ lang.description }} )
              <div class="lang-detail" v-if="lang.name === 'C++'">
                
                  GNU G++을 사용하며 C++ 14버전을 사용합니다.
                <br>
                C언어 개발자도, C++로 제출 부탁드립니다.
              </div>
              
              <div class="lang-detail" v-if="lang.name === 'Java'">
                Java 8 SE 버전을 사용하여 Compile 합니다.
                <br>
                (삼성 역량테스트 환경)
              </div>
              <pre>{{ lang.config.compile.compile_command }}</pre>
              <br>
            </li>
          </div>
        </ul>
      </div>
    </panel>

    <panel :padding="15" class="container">
      <div slot="title">{{ $t("m.Result_Explanation") }}</div>
      <div class="content">
        <ul>
          <li>
            <!-- <b>{{ $t("m.Pending") }} & {{ $t("m.Judging") }}</b> : -->
            <b>{{ $t("m.Pending") }}</b> :
            {{ $t("m.Pending_Judging_Description") }}
          </li>
          <li>
            <b>{{ $t("m.Compile_Error") }}</b> :
            {{ $t("m.Compile_Error_Description") }}
          </li>
          <!-- <li>
            <b>{{ $t("m.Accepted") }}</b> : {{ $t("m.Accepted_Description") }}
          </li> -->
          <li>
            <b>{{ $t("m.Wrong_Answer") }}</b> :
            {{ $t("m.Wrong_Answer_Description") }}
          </li>
          <li>
            <b>{{ $t("m.Runtime_Error") }}</b> :
            {{ $t("m.Runtime_Error_Description") }}
          </li>
          <li>
            <b>{{ $t("m.Time_Limit_Exceeded") }}</b> :
            {{ $t("m.Time_Limit_Exceeded_Description") }}
          </li>
          <li>
            <b>{{ $t("m.Memory_Limit_Exceeded") }}</b> :
            {{ $t("m.Memory_Limit_Exceeded_Description") }}
          </li>
          <li>
            <b>{{ $t("m.System_Error") }}</b> :
            {{ $t("m.System_Error_Description") }}
          </li>
        </ul>
      </div>
    </panel>
  </div>
</template>

<script>
import utils from "@/utils/utils";

export default {
  data() {
    return {
      languages: []
    };
  },
  beforeRouteEnter(to, from, next) {
    utils.getLanguages().then(languages => {
  
      next(vm => {
        vm.languages = languages;
      });
    });
  }
};
</script>

<style scoped lang="less">
.container {
  margin-bottom: 20px;

  .content {
    font-size: 16px;
    margin: 0 50px 20px 50px;
    > ul {
      list-style: disc;
      li {
        line-height: 2;
        .title {
          font-weight: 500;
        }
      }
    }
  }
  .lang-detail{
    font-size:14px;
  }
}
</style>
