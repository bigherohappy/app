<template>
  <div class="app" :style="`height:${$store.state.screenH}px;`">
  <router-view />

  </div>
</template>


<style >
body{
  margin: 0;
}
.tabbar div.mint-tabbar>.mint-tab-item.is-selected{
  color: #78e69d ;
}


</style>
