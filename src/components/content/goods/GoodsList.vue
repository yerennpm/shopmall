<template>
  <div class="goods">
    <goods-item-list v-for="item in goods" :goods-item="item"></goods-item-list>
  </div>
</template>

<script>
import GoodsItemList from "./GoodsItemList";

export default {
  name: "GoodsList",
  components: {
    GoodsItemList
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
