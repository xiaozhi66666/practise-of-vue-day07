<template>
  <div>
    <input type="text" placeholder="我是自定义指令" v-focus />
  </div>
</template>

<script>
// 局部自定义指令：
export default {
  directives: {
    focus: {
      inserted(el) {
        // 第二个参数binding, 第三个参数vnode
        //el表示当前添加指令的元素  binding表示该指令的集合相关信息  vnode表示虚拟节点，包括当前vue实例
        el.focus();
      },
      // update(){}  // 在数据发生更新时候触发
    },
  },
  name: "PractiseOfVueDay07App",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
</style>