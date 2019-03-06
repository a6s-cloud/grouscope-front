<template>
  <div class="home">解析結果一覧画面</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
<style scoped>
.home {
  width: 1200px;
  margin: 0 auto;
}
</style>