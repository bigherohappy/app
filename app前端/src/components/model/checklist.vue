<template>
  <div class="checklist">
    <mt-checklist
      align="right"
      title="右对齐"
      v-model="value"
      :options="options"
      @change="show"
    >
    </mt-checklist>
  </div>
</template>
<script>
export default {
  methods: {
    show() {
      console.log(this.value);
    },
  },
  data() {
    return {
      value: [],
      options: [
        {
          label: "被禁用",
          value: "值F",
        },
        {
          label: "选中禁用",
          value: "选中禁用的值",
          disabled: true,
        },
        {
          label: "选项A",
          value: "值A",
        },
        {
          label: "选项B",
          value: "值B",
        },
      ],
    };
  },
};
</script>

<style lang="less">
body {
  margin: 0;
}
</style>
