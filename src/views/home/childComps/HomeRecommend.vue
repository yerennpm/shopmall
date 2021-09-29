<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>


  export default {
    name: "HomeRecommend",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    text-align: center;
    font-size: 15px;
    padding: 10px 0 10px;
    border-bottom: 8px solid #eee;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img {
    margin-top: 10px;
    width: 65px;
    height: 65px;
  }
</style>
