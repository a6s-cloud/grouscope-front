<template>
  <div class="home">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="日付">
        <el-col :span="11">
          <el-date-picker format="yyyy/MM/dd" value-format="yyyy/MM/dd" type="date" placeholder="Pick a date" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="検索ワード">
        <el-input v-model="form.search"></el-input>
      </el-form-item>
      <el-form-item label="URL">
        <el-input v-model="form.url"></el-input>
      </el-form-item>
      <el-form-item label="解析タイミング">
        <el-col :span="16">
          <el-checkbox-group v-model="form.timing">
            <el-checkbox label=0 name="timing" >今すぐ</el-checkbox>
            <el-checkbox label=1 name="timing">3/3 23:59</el-checkbox>
            <el-checkbox label=2 name="timing">3/4 23:59</el-checkbox>
          </el-checkbox-group>
        </el-col>
      </el-form-item>
      <el-form-item label="自動つぶやき">
        <el-col :span="1">
          <el-switch v-model="form.tweet"></el-switch>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="centerDialogVisible = true">解析依頼</el-button>
      </el-form-item>
    </el-form>

    <el-dialog title="下記内容で抽出します。よろしいですか？" :visible.sync="centerDialogVisible" width="250px;" center>
      <div>
        <div>日付:{{form.date1}}</div>
        <div>検索ワード:{{form.search}}</div>
        <div>URL:{{form.url}}</div>
        <div>解析タイミング:【TODO】今後修正する</div>
        <div>自動つぶやき:【TODO】今後修正する</div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">キャンセル</el-button>
        <el-button type="primary" @click="onSubmit">解析</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import axios from 'axios';

export default Vue.extend({
  data: function() {
    return {
      form: {
        date1: '',
        search: '',
        url: '',
        timing: [],
        tweet: false
      },
      centerDialogVisible: false
    };
  },
  methods: {
    onSubmit() {
      const loading = (this as any).$loading({
        lock: true,
        text: '解析中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });

      const endpoint = 'http://localhost/api/v1/AnalysisRequests';
      const params = new URLSearchParams();
      params.append('start_date', this.form.date1);
      params.append('analysis_word', this.form.search);
      params.append('url', this.form.url);
      params.append('analysis_timing', '[' + this.form.timing.join(',') + ']');
      params.append('auto_tweet', String(this.form.tweet));

      this.centerDialogVisible = false;

      axios
        .post(endpoint, params)
        .then(response => {
          loading.close();
          console.log('完了');
        })
        .catch(error => {
          // front画面のみで確認用で入れてます（実際は必要ない見込み）
          setTimeout(() => {
            loading.close();
          }, 2000);

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
  width: 600px;
  margin: 0 auto;
  margin-top: 10px;
}
</style>