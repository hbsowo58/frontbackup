<template>
  <div class="comment">
    <el-input placeholder="댓글을 입력해주세요" v-model="input"></el-input>
    <el-button @click="postComment">입력</el-button>
  </div>
</template>

<script>
import api from "@oj/api";
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "Comment",
  data() {
    return {
      input: ""
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
    //   this.postComment()
    // console.log(this.profile);
  },
  methods: {
    ...mapActions(["getBoard"]),
    async postComment() {
      if (!this.input.length) {
        this.$error("댓글을 입력해주세요");
        return;
      }
      // console.log(this.profile);
      const parameter = this.$route.params["board_id"];
      await api.postComment(this.input, parameter, this.user.profile.user.id);
      this.getBoard(this.$route.params["board_id"]);
      this.input = "";
    }
  }
};
</script>

<style lang="less" scoped>
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
}
</style>
