<template>
  <div class="home">
    <el-row>
      <span>Word Cloudの画像</span>
      <el-col>
        <el-card :body-style="{ padding: '0px' }" style="width:940px;margin:0 auto;">
          <img :src="imagePath(analysisResult.image)" class="image" />
          <div style="padding: 14px;">
            <span>{{analysisResult.analysisWord}}</span>
            <div class="bottom clearfix">
              <time class="time">{{analysisResult.analysisStartDate}} 〜 {{analysisResult.analysisEndDate}}</time>
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
            <div class="text item">{{analysisResult.favoriteCount}}</div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="box-card">
            <div class="text item">リツート数</div>
            <div class="text item">{{analysisResult.retweetCount}}</div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="box-card">
            <div class="text item">ツイート数</div>
            <div class="text item">{{analysisResult.tweetCount}}</div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="box-card">
            <div class="text item">ユーザ数</div>
            <div class="text item">{{analysisResult.userCount}}</div>
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
import axios from 'axios';
import { MOCK_ANALYSIS_RESULT } from '../mockdata/testData';
import { IAnalysisResult, IUserRanking, initAnalysisResult } from '../interface/type';

export default Vue.extend({
  data: function() {
    return {
      analysisResult: initAnalysisResult as IAnalysisResult
    };
  },

  mounted: function() {
    this.getAnalysisResult();
  },

  computed: {
    tableUserRank: function() {
      return this.analysisResult.userRanking.map((val: IUserRanking, index: number) => {
        return {
          no: index,
          name: `${val.userName}(@${val.userAccount})`,
          tweet: `${val.tweetCount}ツイート`
        };
      });
    }
  },

  methods: {
    imagePath: function(image: string) {
      if (image === 'dummy') {
        return require('@/assets/result.png');
      }
      if (image === '') {
        return;
      }

      return process.env.VUE_APP_API_URL_BASE_STORAGE + image;
    },
    getAnalysisResult: function() {
      const endpoint = process.env.VUE_APP_API_URL_BASE + `AnalysisResults/${this.$route.params.id}`;

      axios
        .get(endpoint, { timeout: 5000 })
        .then(response => {
          this.analysisResult = response.data;
        })
        .catch(error => {
          // テストデータを反映
          this.analysisResult = MOCK_ANALYSIS_RESULT;
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
