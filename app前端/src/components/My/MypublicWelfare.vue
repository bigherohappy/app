<template>
<!-- 消息页面 -->
  <div class="info">
    <h3>公益</h3>
   
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