<template>
  <div class="home">
    <el-row>
      <span>Word Cloudの画像</span>
      <el-col>
        <el-card :body-style="{ padding: '0px' }" style="width:940px;margin:0 auto;">
          <img :src="image_path(image)" class="image" />
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

export default Vue.extend({
  data: function() {
    return {
      image: undefined,
      startDate: '2019-04-17 00:00:00',
      endDate: '2019-04-17 23:59:59',
      analysisWord: '#技術書典',
      tweetCount: '872',
      favoriteCount: '489',
      userCount: '849',
      retweetCount: '3518',
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
      ]
    };
  },
  mounted: function() {
    this.getAnalysisResult();
  },
  methods: {
    image_path: function(image: any) {
      if (image === undefined) {
        return;
      }
      return 'http://localhost/storage/' + image;
    },
    getAnalysisResult: function() {
      const endpoint = `http://localhost/api/v1/AnalysisResults/${this.$route.params.id}`;

      axios
        .get(endpoint, { timeout: 5000 })
        .then(response => {
          this.image = response.data.image;
          this.startDate = response.data.analysis_start_date;
          this.endDate = response.data.analysis_end_date;
          this.analysisWord = response.data.analysis_word;
          this.tweetCount = response.data.tweet_count;
          this.favoriteCount = response.data.favorite_count;
          this.userCount = response.data.user_count;
          this.retweetCount = response.data.retweet_count;
          this.tableUserRank = response.data.user_ranking.map((val: any, index: any) => {
            return {
              no: index,
              name: `${val.user_name}(@${val.user_account})`,
              tweet: `${val.tweet_count}ツイート`
            };
          });
        })
        .catch(error => {
          if (error.code === 'ECONNABORTED') {
            // FIXME: this.$notify とするとtypescript が型エラーを出す。(this as any).$notify は暫定対処
            (this as any).$notify.error({
              title: 'Error',
              message: 'サーバとの接続がタイムアウトしました'
            });
          } else {
            (this as any).$notify.error({
              title: 'Error',
              message: 'データの取得に失敗しました'
            });
          }
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
