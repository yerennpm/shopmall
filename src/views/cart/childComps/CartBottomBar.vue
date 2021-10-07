<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button :is-checked="isSelectAll" class="check-button"></check-button>
      <span>全选</span>
    </div>
    <div class="total-bar">
      合计: {{totalPrice}}
    </div>
    <div class="calculate">
      去计算({{checkLength}})
    </div>
  </div>
</template>

<script>

  import CheckButton from "../../../components/content/checkButtom/CheckButton";

  export default {
    name: "CartBottomBar",
    components: {
      CheckButton
    },
    computed: {
      totalPrice() {
        return '￥' + this.$store.state.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + parseInt(item.price.substring(1)) * item.count
        }, 0).toFixed(2)

        },
      checkLength() {
        return this.$store.state.cartList.filter(item => item.checked).length
      },
      isSelectAll() {
        //1.使用filter
        // return !(this.$store.state.cartList.filter(item => !item.checked).length)
        //2.使用find
        if (this.$store.state.cartList.length === 0) return false
        return !(this.$store.state.cartList.find(item => !item.checked))
      }
    }

  }
</script>

<style scoped>
  .bottom-bar {
    height: 40px;
    position: relative;
    background-color: #eee;
    line-height: 40px;
    display: flex;
  }
  .check-content {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  .check-button {
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 8px;
  }
  .total-bar {
    margin-left: 10px;
  }
  .calculate {
    margin-left: 10px;
  }
</style>
