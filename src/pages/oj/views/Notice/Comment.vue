<template>
  <div class="comment">
    <el-input
      type="textarea"
      :rows="3"
      autosize
      placeholder="댓글을 입력해주세요"
      v-model="input"
    ></el-input>
    <el-button @click="noticepostComment">입력</el-button>
    <el-checkbox  v-model="checked" class="secret-comment secret-checkbox">비밀댓글</el-checkbox>
  </div>
</template>

<script>
import api from "@oj/api";
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "Comment",
  data() {
    return {
      input: "",
      checked:""
    };
  },
  computed: {
    ...mapState(["user"])
    // ...mapGetters(['profile'])
  },
  mounted() {
    // console.log(this.$route.params["board_id"]);
    //   console.log(this.user)
    //  console.log(this.user.profile.user.id)
    // console.log(this.profile);
    //   this.noticepostComment()
    // console.log(this.profile);
  },
  methods: {
    ...mapActions(["getBoard","getNotice"]),
    async noticepostComment() {
      if (!this.input.trim().length) {
        this.$error("댓글을 입력해주세요");
        return;
      }
      
      let str = this.input.replace(/ /g, "\u00a0");
      str = str.replace(/(?:\r\n|\r|\n)/g, "<br/>");
      const parameter = this.$route.params["board_id"];
      console.log(str, parameter, this.user.profile.user.id, this.checked ? "secret" : "")
      await api.noticepostComment(str, parameter, this.user.profile.user.id, this.checked ? "secret" : "");
      this.getNotice(this.$route.params["board_id"]);
      this.input = "";
    }
  }
};
</script>

<style lang="less">
.comment {
  position: relative;
  text-align: center;
  .el-input {
    input {
      border: none;
      border-top: 1px solid #eeeeee;
      min-height: 52px;
    }
  }
  .el-button {
    min-width: 8rem;
    height: 100% !important;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .el-textarea__inner{
    min-height: 45px !important;
  }
  .secret-comment{
    position: absolute;
    right: 45px;
    bottom: -23px;
    // transform: translateY(50%);
  }

}
  .el-textarea__inner{
    min-height: 45px !important;
  }
</style>
