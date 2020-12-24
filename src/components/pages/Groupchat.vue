<template>
  <div class="Groupchat">
    <el-card class="box-card">
      <el-form label-width="80px">
        <el-form-item label="IM类型">
          <el-select placeholder="请选择类型" v-model="sizeForm.region">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="群标签">
          <el-select placeholder="请选择类型" v-model="sizeForm.region">
            <el-option label="全部" value="shanghai"></el-option>
            <el-option label="123" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="群ID">
          <el-input placeholder="请选择群ID"></el-input>
        </el-form-item>
        <el-form-item label="群名称">
          <el-input placeholder="请选择群名称"></el-input>
        </el-form-item>
        <el-form-item label="群连接">
          <el-input placeholder="请选择群连接"></el-input>
        </el-form-item>
        <el-form-item label="开始时间">
          <el-col :span="24">
            <el-date-picker
              type="date"
              placeholder="选择开始日期"
              style="width: 95%"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="结束时间">
          <el-col :span="24">
            <el-date-picker
              type="date"
              placeholder="选择结束日期"
              style="width: 95%"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="用户ID">
          <el-input placeholder="请选择用户ID"></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input placeholder="请选择昵称"></el-input>
        </el-form-item>
        <el-form-item label="关键字">
          <el-input placeholder="请选择关键字"></el-input>
        </el-form-item>
      </el-form>
      <div class="button">
        <el-button>重置</el-button>
        <el-button type="info">搜索</el-button>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      sizeForm: {
        region: ''
      },
      tableData: [
        {
          name: '张三',
          id: '12345676',
          biaoqian: 'div',
          num: '123',
          list: '撒旦就开心'
        }
      ]
    }
  }
}
</script>
<style scoped>
.box-card {
  width: 30%;
  height: 100%;
  float: left;
}
.el-input {
  width: 100%;
}
.el-select {
  width: 100%;
}
.button {
  margin-left: 40px;
}
.table{
    border: 1px solid #ffccff;
}
</style>
