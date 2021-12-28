<template>
  <div class="Introduction">
    <router-link to="/search">
      <div class="outbox">
        <div class="box" ref="scroll">
          <ul ref="ul">
            <li v-for="el in topArr" :key="el">{{ el }}</li>
          </ul>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      topArr: [
        "朝辞白帝彩云间",
        "千里江陵一日还",
        "两岸猿声啼不住",
        "轻舟已过万重山",
      ],
      ulH: 0,
      timer1: null,
      timer2: null,
    };
  },
  mounted() {
    const scroll = this.$refs.scroll;
    const ul = this.$refs.ul;
    this.ulH = ul.offsetHeight;
    ul.innerHTML += ul.innerHTML;
    scroll.scrollTop = 0;
    this.timer1 = setInterval((_) => {
      if (scroll.scrollTop >= this.ulH) scroll.scrollTop = 0;
      else {
        this.move();
      }
    }, 3000);
  },
  destroyed() {
    clearInterval(this.timer1);
    clearInterval(this.timer2);
  },
  methods: {
    move() {
      let i = 0;
      const scroll = this.$refs.scroll;
      this.timer2 = setInterval((_) => {
        if (i < 40) {
          scroll.scrollTop++;
          i++;
        } else {
          clearInterval(this.timer2);
        }
      }, 30);
    },
  },
};
</script>


<style scoped lang="less">
div.Introduction {
  a,
  a:vertical {
    text-decoration: none;
    div.outbox {
      height: 50px;
      background: url("../assets/searchtop.jpg") no-repeat center center;
      background-size: 100% 50px;
      padding: 5px;
      box-sizing: border-box;
      div.box {
        height: 40px;
        overflow: auto;
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          li {
            line-height: 40px;
            color: black;
            font-weight: bold;
            letter-spacing: 5px;
            text-align: center;
            font-family: "simsun";
          }
        }
      }
    }
  }
}
</style>