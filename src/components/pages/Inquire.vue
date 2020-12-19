<template>
  <div class="inquire">
    <img src="@/assets/images/2.svg" alt="" />
    <el-card>
      <div slot="header" class="clearfix">
        <i class="iconfont icon-tijikongjian"></i>
        <span>Telegram</span>
      </div>
      <div class="content">
        <el-select v-model="inquireSelect" placeholder="请选择">
          <el-option label="ID" value="1"></el-option>
          <el-option label="用户名" value="2"></el-option>
          <el-option label="用户昵称" value="3"></el-option>
          <el-option label="手机号" value="4"></el-option>
        </el-select>
        <el-input v-model="inquire" placeholder="请输入内容">
          <el-button type="primary" slot="append">查询</el-button>
        </el-input>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.inquire {
  .el-card {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 450px;
    border: 0;
    transform: translate(-50%, -50%);
  }
  .el-card__header {
    padding: 0;
    background: #40426f;
    color: #fff;
    height: 40px;
    line-height: 40px;
  }
  .iconfont {
    margin: 0 10px;
    font-size: 28px;
    vertical-align: middle;
  }
  .el-select {
    margin-right: 10px;
    width: 150px;
  }
  .content {
    display: flex;
  }
  .el-input-group__append {
    background: #40426f;
    color: #fff;
  }
}
</style>
