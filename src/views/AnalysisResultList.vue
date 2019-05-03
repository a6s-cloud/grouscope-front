<template>
  <div>
    <div class="home">解析結果一覧画面</div>
    <el-row>
      <el-col :span="24">
        <div class="grid-content" style="background: #409EFF;color: white;">
          <div>検索ワード</div>
          <el-input placeholder="Type something" prefix-icon="el-icon-search" v-model.lazy="search_word"> </el-input>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-table v-loading="loading" :data="tableData" stripe style="width: 100%" @row-click="redirectAnotherPage">
            <el-table-column prop="id" label="ID" width="180"> </el-table-column>
            <el-table-column prop="analysisStartDate" label="検索開始日" width="180"> </el-table-column>
            <el-table-column prop="analysisEndDate" label="検索終了日" width="180"> </el-table-column>
            <el-table-column prop="analysisWord" label="検索ワード" width="180"> </el-table-column>
            <el-table-column prop="status" label="ステータス" width="180">
              <template slot-scope="prop">
                <el-tag type="info" v-if="prop.row.status === 0"><i class="el-icon-time"></i>&nbsp;処理待ち</el-tag>
                <el-tag type="warning" v-else-if="prop.row.status === 1"><i class="el-icon-loading"></i>&nbsp;処理中</el-tag>
                <el-tag type="success" v-else-if="prop.row.status === 2"><i class="el-icon-success"></i>&nbsp;完了</el-tag>
                <el-tag type="danger" v-else-if="prop.row.status === 3"><i class="el-icon-error"></i>&nbsp;失敗</el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="favoriteCount" label="いいね数"> </el-table-column>
            <el-table-column prop="userCount" label="ユーザ数"> </el-table-column>
            <el-table-column prop="tweetCount" label="ツイート総数"> </el-table-column>
          </el-table>
        </div>
      </el-col>

      <el-col :span="24">
        <el-pagination @current-change="handleSizeChange" background layout="prev, pager, next" :total="total_data">
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import { Component } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { ANALYSIS_RESULT_LISTS } from '../mockdata/testData';

export default Vue.extend({
  data: function() {
    return {
      search_word: '',
      tableData: [],
      total_data: 0,
      loading: true
    };
  },
  mounted: function() {
    this.getAnalysisResultList('', 1);
  },
  watch: {
    search_word: function(newValue: string, oldValue: string) {
      this.getAnalysisResultList(newValue, 1);
      console.log('new value: ' + newValue + ', ' + 'old value: ' + oldValue);
    }
  },
  methods: {
    handleSizeChange(page: number) {
      this.getAnalysisResultList(this.search_word, page);
    },
    redirectAnotherPage(element: any) {
      console.log(element.id);
      this.$router.push({ path: `/analysisResult/${element.id}` });
    },
    getAnalysisResultList(searchWord: string, page: number) {
      const params = [];
      if (searchWord) {
        params.push('search_word=' + searchWord);
      }
      if (page) {
        params.push('page=' + page);
      }

      this.loading = true;
      const endpoint =
        'http://localhost/api/v1/AnalysisResultLists' + (params.length !== 0 ? '?' + params.join('&') : '');
      console.log(endpoint);

      axios
        .get(endpoint, { timeout: 5000 })
        .then(response => {
          this.tableData = response.data.data;
          this.total_data = response.data.total;
          this.loading = false;
        })
        .catch(error => {
          // テストデータを反映
          // @ts-ignore
          this.tableData = ANALYSIS_RESULT_LISTS.data;
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
          this.loading = false;
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
<style>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  margin-bottom: 20px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
