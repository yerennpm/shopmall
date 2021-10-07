<template>
  <div>
    <nav-bar>
      <div slot="left" class="left" @click="backClick">
        <img src="../../../assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="nav-bar">
        <div v-for="(item, index) in titles"
             class="nav-bar-item"
             :class="{active: index === currentIndex}"
             @click="itemClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>

import NavBar from "../../../components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('titleClick', index)
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  font-size: 13px;
}
.nav-bar-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.left {
  margin-top: 6px;
}
</style>
