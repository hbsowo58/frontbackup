<template>
  <div class="home">
    <div class="visual">

        <div class="visual_pic">
                <span class="visual_title">
        <span class="visual_sub">세 가지</span>를 꼭 지켜주세요.
        </span>
        <span class="visual_content">하나, 모든 소스코드는 처음부터 작성하기<br>
        두울, Trace로 끝가지 버그 잡아내기
        <br>
        세엣, 질문은 적극적이고 구체적으로
        </span>
        </div>
    </div>
  <Row type="flex" justify="space-around">
    <Col :span="22">
      <br>
      <!-- 0204 NEW위에 캐러셀 삭제 -->
      <!--
      <panel shadow v-if="contests.length" class="contest">
      <div slot="title">
      <Button type="text"  class="contest-title" @click="goContest">{{contests[index].title}}</Button>
      </div>
       <Carousel v-model="index" trigger="hover" autoplay :autoplay-speed="6000" class="contest">
        <CarouselItem v-for="(contest, index) of contests" :key="index">
        <div class="contest-content">
        <div class="contest-content-tags">
          <Button type="info" shape="circle" size="small" icon="calendar">
          {{contest.start_time | localtime('YYYY-M-D HH:mm') }}
          </Button>
          <Button type="success" shape="circle" size="small" icon="android-time">
          {{getDuration(contest.start_time, contest.end_time)}}
          </Button>
          <Button type="warning" shape="circle" size="small" icon="trophy">
          {{contest.rule_type}}
          </Button>
        </div>
        <div class="contest-content-description">
        <blockquote v-html="contest.description"></blockquote>
    </div>
  </div>
    </CarouselItem>
      </Carousel>
      </panel>
       -->
      <Announcements class="announcement"></Announcements>
    </Col>
  </Row>
  </div>
</template>

<script>
  import Announcements from './Announcements.vue'
  import api from '@oj/api'
  import time from '@/utils/time'
  import { CONTEST_STATUS } from '@/utils/constants'
  
  export default {
    name: 'home',
    components: {
      Announcements
    },
    data () {
      return {
        contests: [],
        index: 0
      }
    },
    mounted () {
      let params = {status: CONTEST_STATUS.NOT_START}
      api.getContestList(0, 5, params).then(res => {
        this.contests = res.data.data.results
      })
    },
    methods: {
      getDuration (startTime, endTime) {
        return time.duration(startTime, endTime)
      },
      goContest () {
        this.$router.push({
          name: 'contest-details',
          params: {contestID: this.contests[this.index].id}
        })
      }
    }
  }
</script>
<style lang="less" scoped>
  // .home{
  //   margin: -160px -2% 0 -2%;
  // }

  .contest {
    &-title {
      font-style: italic;
      font-size: 21px;
    }
    &-content {
      padding: 0 70px 40px 70px;
      &-description {
        margin-top: 25px;
      }
    }
  }
.content-app{
    // margin-top: 160px;
    // padding: 0 2%;
  }
   .visual_pic{
     margin:0 -2%;
     position: relative;
     height:45vh;
     width:auto;
     background-image:url("../../../../assets/pro_visual.jpg");
     background-size: cover;
     background-position:center center;
     background-repeat: no-repeat;
   }
  .visual{
    margin-bottom:40px;
    font-family:'Noto Sans KR';
    font-weight:300;
    .visual_title{
    top:25%;
    left:15%;
    position:absolute;
    font-size:39px;
    .visual_sub{
      font-weight:500;
    }
   }
  .visual_content{
    font-size:21px;
    position:absolute;
    top:40%;
    left:15%;
   }
  }

  .announcement {
    margin-top:60px;
  }
@media screen and (max-width: 1200px) {
  .visual_pic{
    margin:-160px -2% 0 -2%;
    height:60vh;
   }

  .visual{
    margin-bottom:20px;
    .visual_title{
    top:35%;
    }
    .visual_content{
    top:50%;
    }
  }
}
@media screen and (max-width: 770px) {
  .visual{
    .visual_title{
    font-size:30px;
   }
  .visual_content{
    font-size:20px;
   }
  }
}

@media screen and (max-width: 500px) {
  .contest{
    display: none;
  }
  .visual{
    .visual_title{
    font-size:25px;
    top:50%;
   }
  .visual_content{
    font-size:15px;
    top:65%;
   }
  .visual_pic{
    height:50vh;
   }
  }
}
</style>
