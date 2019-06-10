<template>
    <div class="header">
      <slot></slot>
      <i class="iconfont icon-fanhui" v-if="back" @click="goback"></i>
    </div>
</template>
<script>
    export default{
        props:{
          back:{
            type:Boolean,
            default:false
          }
        },
        data(){
            return {}
        },
        methods: {
            goback(){
                this.$router.go(-1);
            }
        },
        computed: {},
        components: {}
    }
</script>
<style scoped lang="less">
.header{
  width: 100%;
  background: brown;
  height:50px;
  color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  line-height: 50px;
  z-index:100;
  i{
    position:absolute;
    left:10px;
    font-size: 20px;
  }
}
</style>
