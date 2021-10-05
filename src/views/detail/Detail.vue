<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
  </div>
</template>

<script>
  import {getDetail} from "../../network/detail";
  import {Goods} from "../../network/detail";

  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";

  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {}
      }
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo
    },
    created() {
      //1.保存传入的id
      this.iid = this.$route.params.iid
      //2.根据id请求数据
      getDetail(this.iid).then(res => {
        console.log(res);
        const data = res.result;
        //获取轮播图数据
        this.topImages = data.itemInfo.topImages

        //获取商品的信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      })
    }
  }
</script>

<style scoped>

</style>
