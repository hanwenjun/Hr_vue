<template>
<div>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="deptno"
      label="部门编号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="deptname"
      label="部门名称"
      width="120">
    </el-table-column>
    <el-table-column
      prop="loc"
      label="部门地址"
      width="120">
    </el-table-column>
    <el-table-column
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
  background
  layout="prev, pager, next"
  :page-size="size"
  :total="total"
  @current-change="page">
</el-pagination>
</div>
</template>

<script>
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      },
      page:function(currentPage){
        this.$http.get("http://localhost:8090/dept/findAll/"+(currentPage-1)+"/5").then(resp=>{
          console.log(resp.data);
          this.tableData = resp.data.content;
        })
      }
    },

    data() {
      return {
        size: 5,
        total: 10,
        tableData: [{
          deptno: '10',
          deptname: '王小虎',
          loc: '上海'
        }, {
          deptno: '20',
          deptname: '王小虎',
          loc: '上海'
        }, {
          deptno: '30',
          deptname: '王小虎',
          loc: '上海'
        }]
      }
    },
    created:function(){
      this.$http.get("http://localhost:8090/dept/findAll/0/5").then(resp=>{
        this.tableData = resp.data.content;
        this.size = resp.data.size;
        this.total = resp.data.totalElements;
      })
    }
  }
</script>