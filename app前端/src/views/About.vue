<template>
<!-- 3秒广告 -->
  <div class="about" :style="aboutCss">
    <mt-button class="btn" @click="goTabbar">{{time}}</mt-button>
    <mt-swipe :auto="1000">
      <mt-swipe-item v-for="el in arr" :key="el.id">
        <h2 v-html="el.title"></h2>
        <h3 v-html="el.content"></h3>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: 0,
      aboutCss: `background-image:url('${this.$store.state.Url}images/3.jpg');
      background-size:100% ${this.$store.state.screenH}px; height:${this.$store.state.screenH}px;`,
      arr: [
        { id: 1, title: "", content: `` },
      ],
    };
  },
  mounted() {
    let _this = this;
    _this.time = 3;
    setInterval(_this.countDown, 1000);
  },
  watch: {
    time: function(newVal, oldVal) {
      if (newVal == 0) {
        this.$router.push("/tabbar");
      }
    }
  },

  methods: {
    goTabbar() {
      this.$router.replace("/tabbar");
      console.log(this.aqq,hhhhhhh);
      
    },
    countDown() {
      let _this = this;
      _this.time--;
    }
  }
};
</script>
<style lang="less" scoped>
div.about {
  background-repeat: no-repeat;
  .btn {
    font-size: 14px;
    border-radius: 50%;
    border: 1px solid red;
    height: 45px;
    width: 45px;
    background: transparent;
    position: absolute;
    top: 20px;
    right: 20px;
  }
}
</style>
