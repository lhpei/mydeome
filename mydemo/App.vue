<template>
  <div id="app" class="maxwidthH">
    <myheadr></myheadr>
    <!-- 下面部分 -->
    <section style="display:flex;flex:1;">
      <!-- 左侧导航 -->
      <mynavigation ></mynavigation>
      <!-- 中间内容 -->
      <!-- <article class="maxwidthH">
        <router-view class="maxwidthH"></router-view>
      </article> -->
    </section>
  </div>
</template>

<script>
 import myheadr from './components/headr';
 import mynavigation from './components/sideNavigation'
export default {
  components:{
    myheadr,
    mynavigation
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0px;
  margin: 0px;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  border: hidden;
  height: 100vh;
  display: flex;
  flex-direction:column;
}
</style>
