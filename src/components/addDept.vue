<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="活动名称" prop="deptname">
    <el-input v-model="ruleForm.deptname"></el-input>
  </el-form-item>
 <el-form-item label="活动名称" prop="loc">
    <el-input v-model="ruleForm.loc"></el-input>
  </el-form-item>
 

  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
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
            this.$http.post("http://localhost:8090/dept/saveDept",this.ruleForm).then(resp=>{
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
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>