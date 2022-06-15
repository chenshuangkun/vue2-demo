<template>
  <div>
    <el-table :data="tableData" :span-method="arraySpanMethod" border style="width: 100%">
      <el-table-column label="商品信息" prop="prodName"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import store from '@/store';
export default {
  data() {
    return {
      tableData: store.state.tableModule.tableList
    };
  },
  mounted() {
    console.log(this.tableData);
  },
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 1];
        } else if (columnIndex === 1) {
          return [0, 0];
        }
      }

    },
  }
};
</script>