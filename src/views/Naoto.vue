<template>
  <div class="home">なおとさん専用ページ
    <el-row>
      <el-col :span="12">
        <div class="grid-content">
          <div class="product-image">
            <el-carousel height="400px">
              <el-carousel-item v-for="item in image_data" :key="item">
                <img :src="image_path(item)">
              </el-carousel-item>
            </el-carousel>
          </div>
          <div>
            <el-rate
              v-model="value5"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value} points"
            ></el-rate>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content" style="text-align:left;padding-top:4px;">
          <div>Vue Mastery Socks</div>
          <el-tag style="margin-right:8px">靴下</el-tag>
          <el-tag type="success" style="margin-right:8px">Vue</el-tag>
          <el-tag type="info" style="margin-right:8px">安い</el-tag>
          <div>Out of Stock</div>
          <div>
            <ul type="disc">
              <li>80% cotton</li>
              <li>20% polyester</li>
              <li>Gender-neutral</li>
            </ul>
          </div>
          <el-progress type="circle" :percentage="80" color="#8e71c7" status="text">残り10個</el-progress>

          <div>
            <el-radio v-model="radio" label="1">緑</el-radio>
            <el-radio v-model="radio" label="2">青</el-radio>
          </div>
          <div>
            <el-button type="success" @click="infinite()">購入</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
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
      info: '' as any,
      value5: 3.7,
      radio: 1,
      image_data: ['vmSocks-blue', 'vmSocks-green']
    };
  },
  mounted() {
    axios.get('http://localhost/api/articles').then(response => (this.info = response));
  },
  methods: {
    test: function() {
      console.log('aa');
    },
    image_path: function(image: any) {
      return require('@/assets/naoto/' + image + '.jpg');
    },
    infinite: function() {
      const msg = `
      ∧_∧　ババババ
      （ ・ω・)=つ≡つ
      （っ ≡つ=つ
      /　　)
      (ノΠＵ
      何回閉じても無駄ですよ～ww
      m9（＾Д＾）プギャー！！`;
      while (1) {
        alert(msg);
      }
    }
  }
});
</script>
<style scoped>
.home {
  width: 80%;
  margin: 0 auto;
}
.el-row {
  margin-bottom: 20px;
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
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.product-image img {
  width: 400px;
  height: 400px;
}
</style>
