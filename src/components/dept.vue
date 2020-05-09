<template>
  <div>
      <table>
          <tr>
              <td>编号</td>
              <td>部门</td>
              <td>地址</td>
          </tr>
          <tr v-for="(item,index) in depts" :key="index">
              <td>{{item.deptno}}</td>
              <td>{{item.deptname}}</td>
              <td>{{item.loc}}</td>
          </tr>
      </table>
  </div>
</template>

<script>
export default {
    name: 'dept ',
    data: function(){
        return{
            depts: [{deptno:1,deptname:"研发部",loc:"沈阳"},{deptno:2,deptname:"销售部",loc:"大连"}]
        }
    },
    created:function(){
        this.$http.get("http://127.0.0.1:8090/dept/findAll").then(resp=>{
            console.log(resp);
            this.depts = resp.data
        })
    }
}
</script>

<style>

</style>