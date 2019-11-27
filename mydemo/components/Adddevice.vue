<template>
  <div class="addDevice">
    <div class="addDevice_01">
      <div style="width:20rem;margin-top:2rem;">
        <span style="width:10rem;margin-top:0.5rem;">设备编号</span>
        <span style="color:red;margin-right:0.5rem;">*</span>
        <el-input placeholder="请输入内容"></el-input>
      </div>
      <div style="width:20rem;margin-top:2rem;">
        <span style="width:10rem;margin-top:0.5rem;">设备名称</span>
        <span style="color:red;margin-right:0.5rem;">*</span>
        <el-input  placeholder="请输入内容"></el-input>
      </div>

      <div style="width:20rem;margin-top:2rem;">
        <span style="width:10rem;margin-top:0.5rem;">设备联系人</span>
        <span style="color:red;margin-right:0.5rem;">*</span>
        <el-input  placeholder="请输入内容"></el-input>
      </div>
      <!-- 单选按钮 -->
      <div style="width:20rem;margin-top:2rem;margin-left:-3rem;">
        <span style="width:10rem;margin-top:-0.2rem;">原始数据上传</span>
        <template>
          <el-radio v-model="radio" label="1">禁用</el-radio>
          <el-radio v-model="radio" label="2">启用</el-radio>
        </template>
      </div>
      <!-- 经纬度及地图坐标地址 -->
      <div style="width:20rem;margin-top:2rem;">
        <span style="width:10rem;margin-top:0.5rem;">右侧地图选择设备地址</span>
      </div>
      <!-- 地址显示 -->
       <div style="width:20rem;margin-top:1rem;">
        <span style="margin-top:0.5rem;">选择位置:{{this.$store.state.weizhi}}</span>
      </div>
      <!-- 经度纬度 -->
       <div style="width:20rem;">
        <span style="width:20rem;margin-top:0.5rem;">经度:{{this.$store.state.modifyTips[0]}}</span>
      </div>
       <div style="width:20rem;">
        <span style="width:20rem;margin-top:0.5rem;">纬度:{{this.$store.state.modifyTips[1]}}</span>
      </div>
      <div style="width:20rem;margin-top:8rem;">
        <el-button type="primary">提交</el-button>
      </div>
       
    </div>
    <!-- 高德地图 -->
    <div  class="MyMap_addDevice">
        <Mymap></Mymap>
    </div>
    </div>
  
</template>
    <script>
    import Mymap from './map'
    export default {
    components:{
      Mymap
  },
    data:function() {
    return {
      radio: "1"
    };
  },
  

}


</script>
<style>
.addDevice {
  width: 80rem;
}
.addDevice_01 {
  display: flex;
  margin-top: 3rem;
  margin-left: 12rem;
  flex-direction: column;
  justify-content: center;
}
.addDevice_01 > div {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.mapsty {
  width: 10rem;
  height: 10rem;
}
.MyMap_addDevice{
  position: absolute;
  width: 50%;
  top: 4rem;
  right: 0.1rem;
}
</style>