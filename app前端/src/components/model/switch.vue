<template>
  <div class="switch">
    <mt-cell title="显示详细内容">
      <mt-switch v-model="value" @change="show"></mt-switch>
    </mt-cell>
  </div>
</template>
<script>
export default {
  methods: {
    show(){
      console.log(this.value);
    }
  },
  data() {
    return {
      value: false
    };
  },
};
</script>

<style lang="less">
body {
  margin: 0;
}
</style>
