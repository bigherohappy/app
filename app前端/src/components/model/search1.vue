<template>
  <div class="search">
    <mt-search
      style="width:100%"
      v-model="value"
      cancel-text="取消"
      placeholder="搜索"
    >
      <mt-cell v-for="item in result" :title="item.title" :value="item.value" :key="item.id">
      </mt-cell>
    </mt-search>
  </div>
</template>
<script>
export default {
  methods: {},
  data() {
    return {
      value: "",
      arr: [
       {id:1,title:'aaaa',value:'1111'},
       {id:2,title:'bbbb',value:'2222'},
       {id:3,title:'bbbb',value:'2222'},
       {id:4,title:'bbbb',value:'2222'},
       {id:5,title:'dddd',value:'3333'},
       {id:6,title:'cccc',value:'5555'},
      ],
    };
  },
  computed:{
    result(){
      return this.arr.filter(el=>{
        return el.title.indexOf(this.value)>=0
      })
    }
  }
};
</script>

