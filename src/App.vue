<template>
  <div style="padding-top: 45px">
    <MyHeader title="tabberDemo"></MyHeader>
    <keep-alive> <component :is="comName"> </component> </keep-alive>
    <MyTabBar :arr="tabList" @change="changeFn"></MyTabBar>
  </div>
</template>

<script>
import MyHeader from "@/components//MyHeader";
import MyTabBar from "@/components//MyTabBar";
import MyTable from "@/components//MyTable";
import MyGoodsList from "@/views/MyGoodsList";
import MyGoodsSearch from "@/views/MyGoodsSearch";
import MyUserInfo from "@/views/MyUserInfo";
export default {
  name: "PractiseOfVueDay07App",
  components: {
    MyHeader,
    MyTabBar,
    MyTable,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo,
  },
  data() {
    return {
      tabList: [
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "MyGoodsList",
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "MyGoodsSearch",
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "MyUserInfo",
        },
      ],
      comName: "MyGoodsList",
    };
  },

  mounted() {},

  methods: {
    changeFn(val) {
      this.comName = val;
    },
  },
};
</script>

<style lang="less" scoped>
</style>