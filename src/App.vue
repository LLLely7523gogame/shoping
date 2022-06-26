<template>
  <div class="app">
    <my-header title="购物小车车" backgroundColor="green" color="blue" />
    <my-goods v-for="item in goodsList" :key="item.goods_id" :goods="item" />
    <my-footer :goods="goodsList" />
  </div>
</template>

<script>
import MyHeader from '#/MyHeader.vue'
import MyFooter from '#/MyFooter.vue'
import MyGoods from '#/MyGoods.vue'
import axios from 'axios'
export default {
  components: {
    MyHeader,
    MyFooter,
    MyGoods
  },
  data () {
    return {
      goodsList: []
    }
  },
  methods: {
    async getList () {
      const res = await axios({ url: '/api/cart' })
      this.goodsList = res.data.list
      // console.log(this.goodsList)
    }
  },
  created () {
    this.getList()
  }
}
</script>

<style scoped>
.app {
  padding: 50px 0;
}
</style>
