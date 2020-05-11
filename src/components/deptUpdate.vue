<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

  <el-form-item label="部门ID" prop="deptno">
    <el-input v-model="ruleForm.deptno" disabled="true"></el-input>
  </el-form-item>
  <el-form-item label="部门名称" prop="deptname">
    <el-input v-model="ruleForm.deptname"></el-input>
  </el-form-item>
 <el-form-item label="部门地址" prop="loc">
    <el-input v-model="ruleForm.loc"></el-input>
  </el-form-item>
 

  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          deptno: '',
          deptname: '',
          loc: ''
        },
        rules: {
          deptname: [
            { required: true, message: '请输入部门名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          loc: [
            { required: true, message: '请输入部门地址', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]        
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.put("http://localhost:8090/dept/update",this.ruleForm).then(resp=>{
              if(resp.data =="success"){
                this.$alert('保存成功', '消息提示', {
                            confirmButtonText: '确定',
                            callback: action => {
                               this.$router.push('/deptManager');  
                            }
                          });
              }else{
                alert("保存失败");
              }
            })
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    },
     created(){
          this.$http.get("http://localhost:8090/dept/findById/"+this.$route.query.deptno).then(resp=>{
              this.ruleForm = resp.data;
          });
      }
  }
</script>