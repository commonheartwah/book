<template>
    <div class="footer">
      <router-link to="/home">
        <i class="iconfont icon-weibiaoti1"></i><span>首页</span>
      </router-link>
      <router-link to="/list">
        <i class="iconfont icon-liebiao"></i><span>关注</span>
      </router-link>
      <router-link to="/collect">
        <i class="iconfont icon-tianjia"></i><span>我的</span>
      </router-link>
    </div>
</template>
<style scoped lang="less">
  .footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    display: flex;
    border-top: 1px solid #ccc;
    a{
      color: black;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
    }
    a.router-link-active{
      color: saddlebrown;
    }
  }
</style>
