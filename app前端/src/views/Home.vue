<template>
<!-- 进入app -->
  <div class="home" :style="appCss">
   <mt-button class="btn" @click="goabout">跳过</mt-button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      appCss:`background-image:url('${this.$store.state.Url}images/2.jpg');
      background-size:100% ${this.$store.state.screenH}px; height:${this.$store.state.screenH}px;`
    
    }
  },
  mounted(){

  },
  methods:{
    goabout(){
      this.$router.replace('/about');
    }
  }
}
</script>
<style lang="less" scoped>


div.home{
  background-repeat: no-repeat;
  height: 100%;
 .btn{
  font-size: 14px;
    border-radius: 50%;
    border: 1px solid red;
    height: 45px;
    width: 45px;
    background: white;
    position: absolute;
    top: 20px;
    right: 20px;
  }


}


</style>
