<template>
    <div class="detail">
      <MHeader :back="true">详情页</MHeader>
      <ul>
        <li>
          <label for="bookName">书的名字</label>
          <input type="text" id="bookName" v-model="book.bookName">
        </li>
        <li>
          <label for="bookInfo">书的简介</label>
          <input type="text" id="bookInfo" v-model="book.bookInfo">
        </li>
        <li>
          <label for="bookPrice">书的价格</label>
          <input type="text" id="bookPrice" v-model="book.bookPrice">
        </li>
        <li>
          <button @click="update">确认修改</button>
        </li>
      </ul>
    </div>
</template>
<script>
  import MHeader from '../base/MHeader.vue';
  import {findOneBook,updateBook} from '../api';
    export default{
        data(){
            return {
                book:{}
            }
        },
        created(){
          this.getData();
        },
        methods: {
            async getData(id){
                this.book=await findOneBook(this.bid);
                //如果是空对象，需要跳转回列表页
                Object.keys(this.book).length>0?void 0:this.$router.push('/list');
            },
            async update(){//点击修改图书信息
                await updateBook(this.bid,this.book);
                this.$router.push('/list');//修改完成后跳转页面
            }
        },
        watch:{
            $route(){//只要路径变化，重新获取数据
              this.getData();
          }
        },
        computed: {
            bid(){
              return this.$route.params.bid;//将路径参数的id映射到bid上
            }
        },
        components: {
          MHeader
        }
    }
</script>
<style scoped lang="less" lang="less">
.detail{
  position: absolute;
  top:0;
  left:0;
  bottom: 0;
  right:0;
  background: #fff;
  z-index: 100;
  ul{
    margin: 60px 20px 0 20px;
    li{
      label{
        display: block;
        font-size: 20px;
        color:#6a6f77;
      }
      input{
        margin: 10px 0;
        width: 100%;
        box-sizing: border-box;
        font-size:1.4em;
        height:2.7em;
        border-radius:4px;
        border:1px solid #c8cccf;
        color:#6a6f77;
        -web-kit-appearance:none;
        -moz-appearance: none;
        display:block;
        outline:0;
        padding:0 1em;
        text-decoration:none;
      }
      button{
        display: block;
        background-color: #2aabd2;
        color: #fff;
        border: none;
        border-radius: 3px;
        position: relative;
        left: 160px;
        outline: none;
        font-size: 18px;
        padding: 10px;
        margin-top: 30px;
      }
    }
  }
}
</style>
