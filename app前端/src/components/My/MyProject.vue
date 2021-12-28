<template>
<!-- 消息页面 -->
  <div class="info">
    <h3>项目提现</h3>
   
  </div>
</template>
<script>
export default {
  name: "info",
  data() {
    return {
      Url: this.$store.state.Url
    };
  }
};
</script>
<style scoped lang='less'>
.info {
 background-color: #fff;
}
</style>