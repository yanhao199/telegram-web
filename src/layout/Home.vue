<template>
  <div class="home">
    <el-container>
      <el-header class="nav">
        <div>
          <img src="@/assets/images/1.png" alt="" />
          <span>Telegram</span>
        </div>
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="#001428"
          text-color="#fff"
          router
          :default-active="activePath"
        >
          <el-menu-item index="/inquire">账号联查</el-menu-item>
          <el-menu-item index="/groupchat">群聊检索</el-menu-item>
          <el-menu-item index="/jointsearch">群组联查</el-menu-item>
        </el-menu>
        <div class="loginout" @click="loginout"><span>退出登录</span></div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inquire: '',
      inquireSelect: '1',
      activePath: '/inquire'
    }
  },
  methods: {
    loginout () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less">
.home {
  height: 100%;
  .nav {
    padding: 0px 150px;
  }
  .el-header {
    background-color: #001428;
    div {
      display: inline-block;
      height: 100%;
      overflow: hidden;
      line-height: 60px;
      color: #fff;
      margin-right: 100px;
    }
    div img {
      vertical-align: middle;
      margin-top: -6px;
    }
    .loginout {
      float: right;
      cursor: pointer;
    }
    .el-menu--horizontal > .el-menu-item.is-active {
      color: #fff;
      font-weight: bold;
    }
  }
  .el-main {
    position: relative;
    padding: 20px 150px;
    img {
      width: 100%;
    }
  }
  .el-menu-demo {
    display: inline-block;
    background-color: #001428 !important;
  }
}
</style>
