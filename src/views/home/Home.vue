<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <tab-control :titles="['流行', '新款', '精选']"
                 @tabClick="tabClick"
                 class="tab-control" v-show="isTabFixed">
    </tab-control>

    <scroll class="content" ref="scroll"
            :pull-up-load="true"
            @pullingUp="loadMore"
            @scroll="contentScroll">
      <home-swiper :banners="banners" @swiperImageLoad="imgLoad"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <home-feature></home-feature>
      <tab-control ref="tabControl"
                   :titles="['流行', '新款', '精选']"
                   @tabClick="tabClick"></tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
    <back-top @click.native="backClick"></back-top>
  </div>
</template>

<script>

  import NavBar from "../../components/common/navbar/NavBar";
  import TabControl from "../../components/content/TabControl/TabControl";
  import GoodsList from "../../components/content/goods/GoodsList";
  import Scroll from "../../components/common/scroll/Scroll";
  import BackTop from "../../components/content/backTop/BackTop";

  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommend from "./childComps/HomeRecommend";
  import HomeFeature from "./childComps/HomeFeature";

  import {getHomeMultidata} from "../../network/home";
  import {getHomeGoods} from "../../network/home";



  export default {
    name: "Home",
    data() {
      return {
        banners: [],
        recommends: [],
        currentType: 'pop',
        topoffsetTop: 0,
        isTabFixed: false,
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        }
      }
    },
    components: {
      NavBar,
      TabControl,
      GoodsList,
      HomeSwiper,
      HomeRecommend,
      HomeFeature,
      Scroll,
      BackTop
    },
    created() {
      this.getHomeMultidata()

      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted() {

    },
    methods: {
      //事件监听方法
      tabClick(index) {
        switch(index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
        }

      },
      backClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      loadMore() {
        this.getHomeGoods(this.currentType)
      },
      imgLoad() {
        //获取tabControl的offsetTop
        this.topoffsetTop = this.$refs.tabControl.$el.offsetTop;
      },
      contentScroll(position) {
        // 决定tabControl是否吸顶（position:fixed）
        this.isTabFixed = (-position.y) > this.topoffsetTop
      },



      //网络请求方法
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },

      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          // console.log(res);
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          this.$refs.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }
  .home-nav {
    background-color: var(--color-high-text);
    color: #fff;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control {
    position: relative;
    z-index: 9;
  }
  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
