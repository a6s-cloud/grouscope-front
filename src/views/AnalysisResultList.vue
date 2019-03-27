<template>
  <div>
    <div class="home">解析結果一覧画面</div>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <div>検索ワード</div>
             <el-input
                 placeholder="Type something"
                 prefix-icon="el-icon-search"
                 v-model="search_word">
             </el-input>
        </div>
      </el-col>
    </el-row>
    <el-row>
      
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-table
             v-loading="loading"
             :data="tableData"
             stripe
             style="width: 100%">
             <el-table-column
               prop="id"
               label="ID"
               width="180">
             </el-table-column>
             <el-table-column
               prop="analysis_start_date"
               label="検索開始日"
               width="180">
             </el-table-column>
             <el-table-column
               prop="analysis_end_date"
               label="検索終了日"
               width="180">
             </el-table-column>
             <el-table-column
               prop="analysis_word"
               label="検索ワード"
               width="180">
             </el-table-column>
             <el-table-column
               prop="status"
               label="ステータス"
               width="180">
             </el-table-column>
             <el-table-column
               prop="favorite_count"
               label="いいね数">
             </el-table-column>
             <el-table-column
               prop="user_count"
               label="ユーザ数">
             </el-table-column>
             <el-table-column
               prop="tweet_count"
               label="ツイート総数">
             </el-table-column>


           </el-table>
        </div>
      </el-col>

      <el-col :span="24">
        <el-pagination
          @current-change="handleSizeChange"
          background
          layout="prev, pager, next"
          :total="total_data">
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})

export default Vue.extend({
  data: function() {
    return {
      search_word: "",
      tableData: [],
      total_data: 0,
      loading: true
    }
  },
  mounted() {
    setTimeout(() => { this.loading = false; }, 2000);
    axios.get('http://localhost/api/v1/AnalysisResultLists').then(
        response => {
            this.tableData = response.data.data
            this.total_data = response.data.total
        }
    );
  },
  watch: {
    search_word: function (val, oldVal) {
    axios.get('http://localhost/api/v1/AnalysisResultLists?serach_word=' + val).then(
        response => {
            this.tableData = response.data.data
            this.total_data = response.data.total
        }
    );
      console.log('val ' + val + ", oldVal: " + oldVal)
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`${val} items per page`);
      axios.get('http://localhost/api/v1/AnalysisResultLists?serach_word=' + this.search_word + '&page=' + val).then(response => {this.tableData = response.data.data;});

       const h = this.$createElement;

        this.$notify({
          title: 'Title',
          message: h('i', { style: 'color: teal' }, 'This is a reminder')
        });
    }
  },
});

// export default class Home extends Vue {
// 
// }
</script>
<style scoped>
.home {
  width: 1200px;
  margin: 0 auto;
}

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

</style>
