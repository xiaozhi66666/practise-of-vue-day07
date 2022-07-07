<template>
  <div>
    <MyTble :arr="list">
      <template #title>
        <tr>
          <th>#</th>
          <th>商品名称</th>
          <th>价格</th>
          <th>标签</th>
          <th>操作</th>
        </tr>
      </template>
      <template #tbody="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <td>
          <input
            class="tag-input form-control"
            style="width: 100px"
            type="text"
            v-if="scope.row.inputVisible"
            v-focus
            v-model="scope.row.inputValue"
            @keyup.enter="add(scope.row)"
            @blur="scope.row.inputVisible = false"
          />
          <button
            class="btn btn-primary btn-sm add-tag"
            v-else
            @click="scope.row.inputVisible = true"
          >
            +Tag
          </button>
          <span
            v-for="(str, ind) in scope.row.tags"
            :key="ind"
            class="badge badge-warning"
            style="margin-left: 6px"
          >
            {{ str }}
          </span>
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="del(scope.row.id)">
            删除
          </button>
        </td>
      </template>
    </MyTble>
  </div>
</template>

<script>
import MyTble from "@/components/MyTable";
import { getList } from "@/api/getList.js";
export default {
  name: "PractiseOfVueDay07MyGoodsList",
  components: {
    MyTble,
  },

  data() {
    return {
      list: [],
    };
  },
  created() {
    this.getShopList();
  },
  mounted() {},

  methods: {
    // 获取数据请求
    async getShopList() {
      const res = await getList();
      this.list = res.data.data;
      // console.log(res);
    },
    // 删除
    del(id) {
      const index = this.list.findIndex((item) => item.id == id);
      this.list.splice(index, 1);
    },
    // 添加
    add(obj) {
      if (obj.inputValue.trim().length == 0) {
        return alert("请添加内容后再进行添加");
      }
      obj.tags.push(obj.inputValue);
      obj.inputValue = "";
    },
  },
};
</script>

<style lang="less" scoped>
.my-goods-list {
  .badge {
    margin-right: 5px;
  }
}
</style>