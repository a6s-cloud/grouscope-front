<template>
  <div class="home">なおとさん専用ページ
    <el-input placeholder="Please input" v-model="input"></el-input>
    <p>{{input}}</p>

    <div class="block">
      <span class="demonstration">カスタムバー</span>
      <el-slider v-model="value2"></el-slider>
      <p>{{info}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
export default Vue.extend({
  data: function() {
    return {
      input: '',
      value2: 50,
      info: '' as any
    };
  },
  mounted() {
    axios.get('http://localhost/api/articles').then(response => (this.info = response));
  },
  methods: {
    test: function() {
      console.log('aa');
    }
  }
});
</script>
<style scoped>
.home {
  width: 400px;
  margin: 0 auto;
}
</style>
