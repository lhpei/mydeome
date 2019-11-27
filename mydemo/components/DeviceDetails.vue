<!-- 设备详情页 -->
<template>
  <div class="addshebei">
    <!-- 高德地图 -->
    <div  class="MyMap">
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
.addshebei {
  width: 80rem;
}
.addshebei_01 {
  display: flex;
  margin-top: 3rem;
  margin-left: 12rem;
  flex-direction: column;
  justify-content: center;
}
.addshebei_01 > div {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.mapsty {
  width: 10rem;
  height: 10rem;
}
.MyMap{
  position: absolute;
  width: 65%;
  top: 4rem;
  right: 0.1rem;
}
</style>