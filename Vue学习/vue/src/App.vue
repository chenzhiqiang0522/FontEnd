<script>
export default {
  data(){
    return {
      person:['张三','李四','王五'],
      personObject:{
        name:"张三",
        age:18 ,
        gender:'男'
      }
    };
  },
}
</script>

<template>
  <!-- 
    v-for可以动态渲染数组，item代表数组中的每一个元素，index代表索引
    语法：
      1、v-for="item in dateArray"
      2、v-for="(item,index) in dateArray"

   -->
  <ul v-for="(item,index) in person" :key="index" >{{ item }}----->{{ index }}</ul>
  <br />
  <ul v-for="(item,index) of person" :key="index">{{ item }}----->{{ index }}</ul>
  <br />
</template>

