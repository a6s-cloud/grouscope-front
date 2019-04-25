<template>
  <div class="home">
    <el-row>
      <span>Word Cloudの画像</span>
      <el-col>
        <el-card :body-style="{ padding: '0px' }" style="width:940px;margin:0 auto;">
          <img :src="image_path()" class="image">
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
      <el-table :data="tableUserRank" stripe style="width: 50%;margin:0 auto;">
        <el-table-column prop="no" label="No" width="180"></el-table-column>
        <el-table-column prop="name" label="Name" width="180"></el-table-column>
        <el-table-column prop="tweet" label="ツイート数"></el-table-column>
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

export default Vue.extend({
  data: function() {
    return {
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
  methods: {
    image_path: function(image: any) {
      return require('@/assets/naoto/result.png');
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