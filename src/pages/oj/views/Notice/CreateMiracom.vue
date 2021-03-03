<template>
  <el-container style="background:white; padding: 0 20%;">
    <el-header>
      <div class="detail_title">공지사항 작성</div>
      <el-input v-model="title" placeholder="제목을 입력해주세요" />
      <!-- <el-checkbox v-model="checked" class="secret-checkbox">비밀공지로 변경하기</el-checkbox> -->
    </el-header>
    <el-main>
      <Simditor  v-model="content" placeholder=""></Simditor>

      <div style="margin-top:50px;"></div>
      <el-button v-if="index" @click="update">수정</el-button>
      <el-button v-else @click="write">작성</el-button>
    </el-main>
    <!--
      <el-button @click="index !== undefined ? update() : write()">{{index !== undefined ? "수정" : "작성"}}</el-button>
    -->
  </el-container>
</template>

<script>
import Simditor from "@/pages/admin/components/Simditor";
import api from "@oj/api";
import data from "../data";
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "CreateMiracom",
  components: {
    Simditor
  },
  data() {
    const index = this.$route.params.contentId;
    return {
      data: "",
      index: "",
      title: "",
      content: "",
      route: "",
      checked:"",
      company:"MIRACOM"
    };
  },
  computed: {
    ...mapState(["board", "user", "notice"]),
    ...mapGetters(["isSuperAdmin"])
  },
  async mounted() {
    if (this.$route.params["board_id"]) {
      // console.log(this.board);
      this.index = this.$route.params["board_id"];
      await this.getNotice(this.$route.params["board_id"]);
      // console.log(this.board);
      // console.log(this.user.profile.user.id);
      // console.log(this.notice.notice);
      // console.log(this.board.board.created_by);
      // console.log(this.user.profile.user.id);
      // console.log(this.board);
      this.title = this.notice.notice.title;
      this.content = this.notice.notice.content;
      // console.log(this.isSuperAdmin);
      if (
        !this.isSuperAdmin &&
        this.notice.notice.created_by !== this.user.profile.user.id
      ) {
        this.$router.push({
          path: "/notice-miracom"
        });
      }
    }
    // 수정글 작성시 해당 로그인 권한과 맞춰서 권한이 맞지 않을경우 수정이 불가능하게 한다
  },
  methods: {
    ...mapActions(["getBoard","getNotice"]),
    async write() {
      if (
        this.title.length > 0 &&
        this.title.length < 100 &&
        this.content.length > 0 &&
        this.content.length < 1000000
      ) {
        await api.postNotice(
          this.title,
          this.content,
          this.user.profile.user.id,
          this.checked ? "secret" : "",
          this.company
        );
        this.$router.push({
          path: "/notice-miracom"
        });
      } else if (this.title.length === 0) {
        this.$error("제목을 입력해주세요");
        return;
      } else if (this.title.length >= 100) {
        // console.log(this.title.length);
        this.$error("제목은 100자 이내로 입력해주세요");
        return;
      } else if (this.content.length === 0) {
        this.$error("내용을 입력해주세요");
        return;
      } else if (this.content.length > 1000000) {
        this.$error("내용은 1메가 이상 업로드 할 수 없습니다.");
        return;
      }
    },
    update() {
      if (
        this.title.length > 0 &&
        this.title.length < 100 &&
        this.content.length > 0 &&
        this.content.length < 1000000
      ) {
        this.$Modal.confirm({
          content: "공지사항을 수정 하시겠습니까?",
          onOk: async () => {
            if (
              this.isSuperAdmin ||
              this.notice.notice.created_by === this.user.profile.user.id
            ) {
              // if (
              //   this.title.length > 0 &&
              //   this.title.length < 100 &&
              //   this.content.length > 0 &&
              //   this.content.length < 1000000
              // ) {
                const test = await api.putNotice(
                  this.title,
                  this.content,
                  this.$route.params["board_id"]
                );
                this.$router.push({
                  path: `/notice-miracom/${this.$route.params["board_id"]}`
                });
              // }
            }
          },
          onCancel: () => {}
        });
      }
      if (this.title.length === 0) {
        this.$error("제목을 입력해주세요");
        return;
      } else if (this.title.length >= 100) {
        // console.log(this.title.length);
        this.$error("제목은 100자 이내로 입력해주세요");
        return;
      } else if (this.content.length === 0) {
        this.$error("내용을 입력해주세요");
        return;
      } else if (this.content.length > 1000000) {
        this.$error("내용은 1메가 이상 업로드 할 수 없습니다.");
        return;
      }
    },
  }
};
</script>

<style lang="less" scoped>
.el-header {
  background: white;
  padding: 20px 40px;
  height: 100% !important;
}
.el-input input {
  // margin-top: 100px;
  // margin-bottom: 20px;
}

// .el-textarea{
//   background: red;
// }

.el-textarea__inner {
  margin-bottom: 20px;
  // min-height: 50vh !important;
  // background: red;
}
.detail_title {
  font-size: 21px;
  font-weight: 500;
  margin-bottom: 10px;
}
.secret-checkbox{
  display: block;
  text-align: right;
  margin-top:10px;
}
</style>
