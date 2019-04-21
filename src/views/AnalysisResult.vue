<template>
  <div class="home">
    <el-row>
      <span>Word Cloudの画像</span>
      <el-col>
        <el-card :body-style="{ padding: '0px' }" style="width:940px;margin:0 auto;">
          <img :src="image_path()" class="image">
          <div style="padding: 14px;">
            <span>#技術書典</span>
            <div class="bottom clearfix">
              <time class="time">2019/04/06 00:00:00 〜 2019/04/06 23:59:59</time>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <div>
      <span>ユーザランキング</span>
      <el-table :data="tableData" stripe style="width: 50%;margin:0 auto;">
        <el-table-column prop="date" label="No" width="180"></el-table-column>
        <el-table-column prop="name" label="Name" width="180"></el-table-column>
        <el-table-column prop="address" label="ツイート数"></el-table-column>
      </el-table>
    </div>

    <div>
      <span>統計情報</span>
      <el-row>
        <el-col :span="6">
          <el-card class="box-card">
            <div class="text item">
              いいね数
            </div>
            <div class="text item">
              50
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="box-card">
            <div class="text item">
              リツート数
            </div>
            <div class="text item">
              10
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="box-card">
            <div class="text item">
              ツイート数
            </div>
            <div class="text item">
              50
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="box-card">
            <div class="text item">
              ユーザ数
            </div>
            <div class="text item">
              50
            </div>
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
              @なおと, @つとむ, @Toki, @みのきち
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
      tableData: [
        {
          date: '1',
          name: 'なおと(@naoto_7713)',
          address: '150ツイート'
        },
        {
          date: '2',
          name: 'なおと2(@naoto_7713)',
          address: '150ツイート'
        },
        {
          date: '3',
          name: 'なおと3(@naoto_7713)',
          address: '150ツイート'
        },
        {
          date: '4',
          name: 'なおと4(@naoto_7713)',
          address: '150ツイート'
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