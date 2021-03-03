<template>
  <el-container class="board-container">
    <el-header>공지사항</el-header>
    <el-main>
      <el-table
        border
        @cell-click="detail"
        :data="data"
        empty-text="검색한 정보가 없습니다"
      >
        <el-table-column prop="id" align="center" width="140px">
        </el-table-column>

        <el-table-column prop="title" label="제목" align="left">
          <template slot-scope="scope">
            <span
              style="padding-left:30px;"
              v-if="
                scope.row.flag == 3 &&
                  user.profile &&
                  (isSuperAdmin || scope.row.created_by == user.profile.user.id)
              "
              >{{ scope.row.title }}
              <span v-if="scope.row.notice.length && getCommentCount(scope.row.notice)"
                >[{{ getCommentCount(scope.row.notice) }}]</span>🔒</span>
            <span style="padding-left:30px;" v-else-if="scope.row.flag == 3"
              >비공개 글입니다. 🔒</span>
            <span v-else style="padding-left:30px;"> {{ scope.row.title }}
              <span
                v-if="
                  scope.row.notice.length && getCommentCount(scope.row.notice)
                "
                >[{{ getCommentCount(scope.row.notice) }}]</span
              ></span>
          </template>
        </el-table-column>

        <el-table-column
          prop="real_name"
          label="작성자"
          width="200px"
          align="center"
        >
        </el-table-column>

        <el-table-column
          prop="created_time"
          label="작성날짜"
          width="200px"
          align="center"
        >
          <template slot-scope="scope">
            {{ scope.row.created_time && toLocal(scope.row.created_time) }}
            <div>
              ({{
                scope.row.created_time && toLocalTime(scope.row.created_time)
              }})
            </div>
          </template>
        </el-table-column>
      </el-table>
    </el-main>

    <el-footer>
      <div class="page-wrapper">
        <el-button type="primary" @click="write">글쓰기</el-button>
        <div class="serach-wrapper">
          <el-input
            v-model="keyword"
            prefix-icon="el-icon-search"
            placeholder="제목 / 내용 / 이름 검색"
          ></el-input>
          <el-button type="primary" @click="getNoticeList">검색</el-button>
        </div>
        <el-pagination
          class="page"
          layout="prev, pager, next"
          :page-size="10"
          :current-page.sync="currentPage"
          @current-change="getNoticeList"
          :total="total"
        >
        </el-pagination>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
import time from "@/utils/time";
import api from "@oj/api";
import { mapGetters, mapState } from "vuex";
export default {
  name: "Read",
  data() {
    return {
      total: 0,
      data: [],
      currentPage: 1,
      keyword: ""
    };
  },
  async mounted() {
    this.getNoticeList();
  },
  computed: {
    ...mapState(["user"]),
    ...mapGetters(["isSuperAdmin"])
  },
  methods: {
    toLocalTime(data) {
      const result = time.utcToLocal(data, "HH시 mm분");
      return result;
    },
    toLocal(data) {
      const result = time.utcToLocal(data, "YYYY년 M월 D일");

      return result;
    },
    async getNoticeList() {
      const response = await api.getNoticeList({
        limit: 10,
        offset: (this.currentPage - 1) * 10,
        keyword: this.keyword,
        company: "SDS"
      });
      // const data = Object.entries(response).find(el => el[0] === "data");
      const data = Object.entries(response).find(el => el[0] === "data");
      // console.log('리스폰스얌', data)
      this.total = data[1]["data"]["total"];
      const result = data[1]["data"]["results"];
      this.data = result;
    },
    write() {
      this.$router.push({
        path: "create"
      });
    },
    detail(id, column, cell, event) {
      // console.log(column.property);

      if (
        this.isSuperAdmin ||
        (this.user.profile.user &&
          id.created_by === this.user.profile.user.id) ||
        (id.flag !== 3 && column.property === "title")
      ) {
        this.$router.push(`/board/${id.id}`);
      }
      // console.log(id);
      // console.log(column);
      // console.log(cell);
      // console.log(event);
    },
    getCommentCount(commentList) {
      console.log('hello wolrd', commentList)
      return commentList.filter(li => li.flag !== 4).length;
    }
  }
};
</script>

<style lang="less" scoped>
.el-header {
  font-size: 21px;
  font-weight: 500;
  padding: 19px 31px;
  height: 100% !important;
}
.board-container {
  // width: 80%;
  margin: 0 auto;
  background: white;
}
.el-table td {
  padding: 6px 0 !important;
}
.serach-wrapper {
  display: flex;
  align-items: center;
  width: 40%;
}
.page-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.board-container > * {
  width: 80%;
  margin: 0 auto;
}
.for-align {
  width: 80%;
  margin: 0 auto;
}
</style>
