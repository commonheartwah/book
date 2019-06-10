<template>
    <div>
      <MHeader>列表页</MHeader>
      <div class="content" ref="scroll" @scroll="loadMore">
        <ul>
          <router-link v-for="(book,index) in books" :to="{name:'detail',params:{bid:book.bookId}}" :key="index" tag="li">
            <div>
              <img v-lazy="book.bookCover">
            </div>
            <div>
              <h4>{{book.bookName}}</h4>
              <p>{{book.bookInfo}}</p>
              <b>￥{{book.bookPrice}}</b>
              <div class="btn-list">
                <button @click.stop="remove(book.bookId)">删除</button>
                <button @click.stop="(book.bookId)">添加购物车</button>
              </div>
            </div>
          </router-link>
        </ul>
        <div @click="more" class="more">加载更多</div>
      </div>
    </div>
</template>
<script>
import MHeader from '../base/MHeader.vue';
import {pagination,removeBook} from '../api';
export default{
  components:{
      MHeader
  },
  created(){
    this.getData();
  },
  data(){
    return{
        books:[],
        offset:0,
        hasMore:true,
        isLoading:false,
        timer:''
    }
  },
  methods:{
    more(){
        this.getData();
    },
    loadMore(){
        clearTimeout(this.timer);
        this.timer=setTimeout(()=>{
          let {scrollTop,clientHeight,scrollHeight}=this.$refs.scroll;
          if(scrollTop+clientHeight+20>scrollHeight){
              this.getData();
          }
        },13);
    },
    async remove(id){
        await removeBook(id);
        this.books=this.books.filter(item=>{
            return item.bookId!==id;
        })
    },
    async getData(){
      if(this.hasMore&&!this.isLoading){//有更多时获取数据
        let {hasMore,books}=await pagination(this.offset);
        this.isLoading=true;
        this.books=[...this.books,...books];//获取的书放到books属性上
        this.hasMore=hasMore;
        this.isLoading=false;//加载完毕
        this.offset=this.books.length;//维护偏移量，就是总数的长度
      }
    }
  }
}
</script>
<style scoped lang="less">
.content{
  h4{
    font-size: 20px;
    line-height: 25px;
  }
  button{
    display: block;
    padding: 10px;
    background-color: #55859b;
    color: #fff;
    border: none;
    border-radius: 3px;
    outline: none;
  }
  b{
    color: red;
  }
  p{
    color: #2a2a2a;
    line-height: 35px;
  }
  ul{
    padding: 10px;
    li{
      display: flex;
      padding: 20px 0 10px;
      border-bottom: 1px solid #f1f1f1;
      img{
        width: 130px;
      }
    }
  }
  .more{
    margin:10px;
    background: #d0eded;
    text-align: center;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    padding:10px 0;
  }
  .btn-list{
    display: flex;
    justify-content : space-around;
  }
}
</style>
