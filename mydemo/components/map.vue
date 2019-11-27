<template>
  <div :style="{width:'100%',height:'43rem'}">
    <el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center" :events="events">
      <el-amap-marker
        v-for="(marker, index) in markers"
        :key="index"
        :position="marker.position"
        :events="marker.events"
        :visible="marker.visible"
        :draggable="marker.draggable"
        :vid="index"
      ></el-amap-marker>
    </el-amap>
  </div>
</template>
<script>
export default {
  data() {
    const self = this;
    return {
      center: [121.59996, 31.197646],
      loaded: false,
      // 位置和经纬度
      weizhi: [],
      weizhi:'',
      events: {
        click: e => {
          alert("map clicked");
          this.greet(e);
        }
      },
      plugin: [
        {
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          timeout: 100, //超过10秒后停止定位，默认：无穷大
          maximumAge: 0, //定位结果缓存0毫秒，默认：0
          convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true, //显示定位按钮，默认：true
          buttonPosition: "RB", //定位按钮停靠位置，默认：'LB'，左下角
          showMarker: true, //定位成功后在定位到的位置显示点标记，默认：true
          showCircle: true, //定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：f
          extensions: "all",
          pName: "Geolocation",
          events: {
            init(o) {
              // o 是高德地图定位插件实例
              o.getCurrentPosition((status, result) => {
                self.center = [];
                self.center.push(result.position.lng);
                self.center.push(result.position.lat);
                if (result && result.position) {
                  self.loaded = true;
                  self.$nextTick();
                  sessionStorage.setItem(
                    "id",
                    JSON.stringify(
                      result.position.lng + "," + result.position.lat
                    )
                  );
                }
              });
            }
          }
        }
      ],
      markers: [
        {
          position: [131.5273285, 39.21515044],
          events: {
            click: () => {
              alert("click marker");
            }
          },
          visible: true,
          draggable: false
        }
      ]
    };
  },
  mounted: function() {},
  methods: {
    greet: function(e) {
      console.log(e);
      this.markers[0].position = "";
      this.markers[0].position = [e.lnglat.lng, e.lnglat.lat];
      this.weizhi=[];
      this.weizhi.push(e.lnglat.lng);
      this.weizhi.push(e.lnglat.lat);
      //  获取位置
      var geocoder = new AMap.Geocoder({
        radius: 1000,
        extensions: "all"
      });
      geocoder.getAddress([e.lnglat.lng, e.lnglat.lat], function(
        status,
        result
      ) {
        if (status === "complete" && result.info === "OK") {
          self.weihzi2=result.regeocode.formattedAddress
          console.log(self.weihzi2);
          
        }
      });
      // 把位置和经纬度存入vuex
      this.$store.commit("modi",self.weihzi2);
      this.$store.commit("modifyLocation",this.weizhi);
    }
  }
};
</script>
<style>
.amap-demo {
  height: 100%;
}
</style>