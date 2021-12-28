<template>
<!-- 消息页面 -->
  <div class="info">
    <h3>分享给盆友</h3>
    <div class="three1p">
      <div class="three1 pub">
        <img :src="`${this.Url}images/1/获赞.png`" width="40" height="40" alt />
        <p>收到的赞</p>
      </div>
      <div class="three2 pub">
        <img :src="`${this.Url}images/1/08.评论.png`" width="40" height="40" alt />
        <p>我的活动</p>
      </div>
      <div class="three3 pub">
        <img :src="`${this.Url}images/1/关注.png`" width="40" height="40" alt />
        <p>关注了我</p>
      </div>
      <div class="three4 pub">
        <img :src="`${this.Url}images/1/收藏.png`" width="40" height="40" alt />
        <p>我的收藏</p>
      </div>
    </div>
    <div class="two">
      <mt-cell-swipe>
        <mt-cell is-link to="http://www.baidu.com">
          <div class="word">
            <h4 class="title">活动通知</h4>
            <div class="desc">
              秋风送爽，巍巍天山，莽莽昆仑党的十八大以来尤其第二次中央新疆工作座谈会以来开启党的治疆方略新时代
              易地扶贫搬迁，一步千年跨入新时代扶贫扶志扶智，艰苦奋斗迎来新生活天山南北，各族干部群众团结携手新疆新图景，宏图正铺展
脱贫攻坚带给大漠绿洲的改变。力度之大、规模之广、影响之深千百年来前所未有
            </div>
          </div>
          <div class="date">21-08-25</div>
        </mt-cell>
        <img slot="icon" :src="`${this.Url}images/1/活动.png`" width="48" height="48" />
      </mt-cell-swipe>
      <mt-cell-swipe>
        <mt-cell is-link to="http://www.baidu.com">
          <div class="word">
            <h4 class="title">系统通知</h4>
            <div class="desc">暑热天气陆续登场，一年当中最热的三伏天也不知不觉的到来你眼中的夏天是什么样子的呢，空调、电风扇、冰镇饮料、冰镇西瓜...
              哪些是你夏天不可缺少的呢?快来参与话题晒你眼中的夏天还能赢取精美小礼品!。</div>
          </div>
          <div class="date">21-08-25</div>
        </mt-cell>
        <img slot="icon" :src="`${this.Url}images/1/我的公益.png`" width="48" height="48" />
      </mt-cell-swipe>
      <mt-cell-swipe>
        <mt-cell is-link to="http://www.baidu.com">
          <div class="word">
            <h4 class="title">家乡小助手</h4>
            <div class="desc">
              彩虹桥”工业设计人才培养专项行动即日启动
              06/09 18:34 “彩虹桥”人才计划 关注
              为贯彻落实国务院《中国制造2025》战略部署
              ，结合《中长期青年发展规划(20162025年)》文件精神，由天津理工大学担任工业设计专业自学考试主考院校，共青团中央直属中国光华科技基金会、天津理工大学继续教
              育学院与彩虹桥人才计划项目工作领导小组办公室决定共同实施“彩虹桥工业设计人才培养专项行动”。
            </div>
          </div>
          <div class="date">21-08-25</div>
        </mt-cell>
        <img slot="icon" :src="`${this.Url}images/1/获赞.png`" width="48" height="48" />
      </mt-cell-swipe>
    </div>
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
  h3 {
    text-align: center;
  }
  .three1p {
    display: flex;
    height: 80px;
    width: 100%;
    .pub {
      padding-top: 15px;
      align-items: center;
      text-align: center;
      height: 80px;
      width: 25%;
      font-size: 12px;
      p {
        margin: 0;
        color: #999;
      }
    }
  }
  .two {
    padding-top: 10px;
    img {
      border-radius: 50%;
      background-color: rgb(219, 208, 208);
    }
    div.word {
      flex: 7;
      h4.title {
        color: #666;
        margin: 10px 0 5px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        font-size: 15px;
      }
      div.desc {
        font-size: 12px;
        height: 40px;
        line-height: 20px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    }
    div.date {
      flex: 2;
      font-size: 12px;
      text-align: right;
      margin-right: 8px;
    }
  }
}
</style>