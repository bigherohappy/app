<template>
<!-- 首页中的关注组件 -->
  <div class="care" :style="`height:${$store.state.screenH-101}px`">
    <h3>你还没有关注任何人或组织</h3>
    <img :src="`${this.Url}images/关注.jpg`" alt="">
  </div>
</template>
<script>
export default {
  name:'care',
  data(){
    return{
       Url:this.$store.state.Url,
    }
  }
}
</script>

<style lang="less" scoped>
    div.care {
   touch-action: none;
   h3{
     text-align: center;
   }
   img{
     height: 240px;
     width: 100%;
   }
    }
</style>
