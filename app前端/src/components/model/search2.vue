<template>
  <div class="search" :style="`height:${$store.state.screenH}px`">
    <!-- form作用是在手机小键盘上将enter变化search -->
    <form action="" onsubmit="return false;">
      <mt-search
        v-model="value"
        placeholder="请输入搜索内容"
        @keyup.native.enter="search"
      >
      <mt-cell v-for="el in arr" :key="el.id" :title="el.title"></mt-cell>
      </mt-search>
    </form>
  </div>
</template>
<script>
export default {
  methods: {
    search(){
      this.$axios.get('getSearchNews?keyword='+this.value).then(arr=>{
        this.arr=arr
      })      
    }
  },
  data() {
    return {
      value: "",
      arr: []
    };
  },
};
</script>
