<template>
  <div class="home">なおとさん専用ページ
    <el-input placeholder="Please input" v-model="input"></el-input>
    <p>{{input}}</p>

    <div class="block">
      <span class="demonstration">カスタムバー</span>
      <el-slider v-model="value2"></el-slider>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data: function() {
    return {
      input: '',
      value2: 50
    };
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
