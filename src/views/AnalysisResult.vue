<template>
  <div class="home">
    <el-row>
      <span>Word Cloudの画像</span>
      <el-col>
        <el-card :body-style="{ padding: '0px' }" style="width:940px;margin:0 auto;">
          <img :src="imagePath(image)" class="image" />
          <div style="padding: 14px;">
            <span>{{analysisWord}}</span>
            <div class="bottom clearfix">
              <time class="time">{{startDate}} 〜 {{endDate}}</time>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <div>
      <span>ユーザランキング</span>
      <el-table :data="tableUserRank" stripe style="width: 60%;margin:0 auto;" :height="500">
        <el-table-column prop="no" label="No" width="50px"></el-table-column>
        <el-table-column prop="name" label="Name"></el-table-column>
        <el-table-column prop="tweet" label="ツイート数" width="130px"></el-table-column>
      </el-table>
    </div>

    <div>
      <span>統計情報</span>
      <el-row>
        <el-col :span="6">
          <el-card class="box-card">
            <div class="text item">いいね数</div>
            <div class="text item">{{favoriteCount}}</div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="box-card">
            <div class="text item">リツート数</div>
            <div class="text item">{{retweetCount}}</div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="box-card">
            <div class="text item">ツイート数</div>
            <div class="text item">{{tweetCount}}</div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="box-card">
            <div class="text item">ユーザ数</div>
            <div class="text item">{{userCount}}</div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div>
      <span>参加者</span>
      <el-row>
        <el-col :span="24">
          <el-card class="box-card">
            <div class="text item">
              <span v-for="item in tableUserRank" :key="item.id">{{item.name}},　</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import axios from 'axios';
import { ANALYSIS_RESULT } from '../mockdata/testData';

export default Vue.extend({
  data: function() {
    return {
      image: undefined as any,
      startDate: '2019-04-17 00:00:00' as any,
      endDate: '2019-04-17 23:59:59' as any,
      analysisWord: '#技術書典' as any,
      tweetCount: '872' as any,
      favoriteCount: '489' as any,
      userCount: '849' as any,
      retweetCount: '3518' as any,
      tableUserRank: [
        {
          no: '1',
          name: 'なおと(@naoto_7713)',
          tweet: '150ツイート'
        },
        {
          no: '2',
          name: 'なおと2(@naoto_7713)',
          tweet: '150ツイート'
        },
        {
          no: '3',
          name: 'なおと3(@naoto_7713)',
          tweet: '150ツイート'
        },
        {
          no: '4',
          name: 'なおと4(@naoto_7713)',
          tweet: '150ツイート'
        }
      ] as any
    };
  },
  mounted: function() {
    this.getAnalysisResult();
  },
  methods: {
    imagePath: function(image: any) {
      if (image === 'dummy') {
        return require('@/assets/naoto/result.png');
      }

      if (image === undefined) {
        return;
      }
      return process.env.VUE_APP_API_URL_BASE_STORAGE + image;
    },
    getAnalysisResult: function() {
      const endpoint = process.env.VUE_APP_API_URL_BASE + `AnalysisResults/${this.$route.params.id}`;

      axios
        .get(endpoint, { timeout: 5000 })
        .then(response => {
          this.image = response.data.image;
          this.startDate = response.data.analysisStartDate;
          this.endDate = response.data.analysisEndDate;
          this.analysisWord = response.data.analysisWord;
          this.tweetCount = response.data.tweetCount;
          this.favoriteCount = response.data.favoriteCount;
          this.userCount = response.data.userCount;
          this.retweetCount = response.data.retweetCount;
          this.tableUserRank = response.data.userRanking.map((val: any, index: any) => {
            return {
              no: index,
              name: `${val.userName}(@${val.userAccount})`,
              tweet: `${val.tweetCount}ツイート`
            };
          });
        })
        .catch(error => {
          // テストデータを反映
          this.image = ANALYSIS_RESULT.image;
          this.startDate = ANALYSIS_RESULT.analysisStartDate;
          this.endDate = ANALYSIS_RESULT.analysisEndDate;
          this.analysisWord = ANALYSIS_RESULT.analysisWord;
          this.tweetCount = ANALYSIS_RESULT.tweetCount;
          this.favoriteCount = ANALYSIS_RESULT.favoriteCount;
          this.userCount = ANALYSIS_RESULT.userCount;
          this.retweetCount = ANALYSIS_RESULT.retweetCount;
          this.tableUserRank = ANALYSIS_RESULT.userRanking.map((val: any, index: any) => {
            return {
              no: index,
              name: `${val.userName}(@${val.userAccount})`,
              tweet: `${val.tweetCount}ツイート`
            };
          });
          (this as any).$notify.warning({
            title: 'warning',
            message: 'テストデータを反映しました。'
          });

          // 本番環境では下記を使用する
          // if (error.code === 'ECONNABORTED') {
          //   // FIXME: this.$notify とするとtypescript が型エラーを出す。(this as any).$notify は暫定対処
          //   (this as any).$notify.error({
          //     title: 'Error',
          //     message: 'サーバとの接続がタイムアウトしました'
          //   });
          // } else {
          //   (this as any).$notify.error({
          //     title: 'Error',
          //     message: 'データの取得に失敗しました'
          //   });
          // }
        });
    }
  }
});
</script>
<style scoped>
.home {
  width: 1200px;
  margin: 0 auto;
}
</style>
