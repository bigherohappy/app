<template>
  <!-- 详情页 -->
  <div class="shop" :style="`height:${$store.state.screenH-51}px`">
   <van-nav-bar  left-text="确认订单" left-arrow @click-left="onClickLeft">
</van-nav-bar>
   <van-contact-card type="edit"   :tel="tel" :name="name" @click="onEdit" :address='address'  />
    <van-card
  num="2"
  price="2.00"
  title="Title"
  desc="Description"
  thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
/>
<p style="text-align:center;font-size:12px;padding-right:10px">服务<span style="font-size:12px;color:#999">不支持7无理由退换</span></p>
    
    <div>
      赠送他人
      <van-switch v-model="checked" />
<van-cell-group>
  <van-cell title="运费险 退货可赔付10元" value="￥0.20" size="large" />
  <van-cell title="配送方式 普通方式" is-link value="快递 免邮" />
   <van-cell
    title="订单备注"
   
    size="large"
    label="选填，请先和商家协商一致，付款后商家可查看"
  />
<van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />

</van-cell-group>

    </div>
  </div>
</template>
<script>
import { Toast } from 'vant';
export default {
  name: "shopDetail",
  data() {
    return {
      obj: {},
      Url: this.$store.state.Url,
      tel :'重庆市永川区重庆文理学院13000000000',
      name : 'John Snow',
      address:'重庆市永川区重庆文理学院',
      checked:false
    };
  },
  mounted() {
    // const params = { params: this.$route.params };
    // this.$axios.get("getProductId", params).then((rs) => {
    //   const obj = rs.obj;
    //   obj.src = this.$store.state.Url + obj.smallSrc;
    //   obj.date = new Date(obj.updatedAt).toLocaleDateString();
    //   this.obj = obj;
    // });
  },
  methods:{
   onClickLeft () {
     history.back();
  },
  onEdit() {
    Toast('edit');
  } ,
  onSubmit(){
    alert('提交订单成功')
  }
  
  
  }
};
</script>
<style lang="less" scoped>
.shop {
  div.body {
    margin-top: 60px;
    text-align: center;
    padding: 0 10px;
    img {
      width: 350px;
    }
    h3 {
      color: #333;
    }
    aside {
      color: #999;
      font-size: 13px;
    }
    div.con {
      text-align: justify;
      text-indent: 2em;
      line-height: 1.8;
      color: #555;

      /deep/ img {
        width: 100%;
      }
    }
  }
}
</style>