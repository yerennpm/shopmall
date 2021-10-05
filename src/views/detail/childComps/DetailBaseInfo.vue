<template>
  <div class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="item-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .base-info {
    padding: 0 8px;
  }
  .info-title {
    color: #222;
  }
  .info-price {
    margin-top: 10px;
  }
  .n-price {
    color: var(--color-high-text);
    font-size: 24px;
  }
  .o-price {
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }
  .discount {
    font-size: 12px;
    margin-left: 5px;
    padding: 2px 5px;
    color: #fff;
    background-color: var(--color-high-text);
    border-radius: 8px;
    top: -8px;
    position: relative;
  }
  .item-other {
    display: flex;
    margin-top: 10px;
    line-height: 30px;
    font-size: 13px;
    justify-content: space-between;
  }
  .info-service {
    display: flex;
    justify-content: space-between;
  }
  .info-service-item img {
    width: 14px;
    height: 14px;
  }
  .info-service-item span {
    font-size: 13px;
    color: #333;
  }
</style>
