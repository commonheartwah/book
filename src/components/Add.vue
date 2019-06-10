<template>
  <div>
    <MHeader>添加</MHeader>
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
        <label for="bookCover">书的封面</label>
        <input type="text" id="bookCover" v-model="book.bookCover">
      </li>
      <li>
        <button @click="add()">添加</button>
      </li>
    </ul>
  </div>
</template>
<script>
  import MHeader from '../base/MHeader.vue';
  import {addBook} from '../api';
  export default{
    data(){
      return {
          book:{}
      }
    },
    methods: {
       async add(){
            await addBook(this.book);
            this.$router.push('./list');
        }
    },
    computed: {},
    components: {MHeader}
  }
</script>
<style scoped lang="less">
  ul {
    margin: 60px 20px 0 20px;
    li {
      label {
        display: block;
        font-size: 20px;
        color: #6a6f77;
      }
      input {
        margin: 10px 0;
        width: 100%;
        box-sizing: border-box;
        font-size: 1.4em;
        height: 2.7em;
        border-radius: 4px;
        border: 1px solid #c8cccf;
        color: #6a6f77;
        -web-kit-appearance: none;
        -moz-appearance: none;
        display: block;
        outline: 0;
        padding: 0 1em;
        text-decoration: none;
      }
      button {
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
</style>
