<template>
  <div class="home_01">
    <!-- 扫码登录 -->
    <div class="erweima" v-on:mouseover="say()" v-on:mouseout="rem()">
      <img src="../assets/images/erweima.png" class="image_01" />
      <span>扫一扫</span>
    </div>
    <!-- 二维码 -->
    <div class="erweima_02" v-if="erweimais">
      <div style="margin:0 2rem 0 2rem">
        <el-row>
          <el-col>
            <el-card :body-style="{ padding: '0px' }">
              <img src="../assets/images/erweim0.jpg" class="image" style="width:8rem;height:8rem" />
              <div style="padding: 14px;">
                <span>公众号</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <!-- 第二个二维码 -->
      <div>
        <el-row>
          <el-col>
            <el-card :body-style="{ padding: '0px' }">
              <img src="../assets/images/erweim0.jpg" class="image" style="width:8rem;height:8rem" />
              <div style="padding: 14px;">
                <span>小程序</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
    <!--  -->
    <!-- 中间四个卡片 -->
    <div class="home_02">
      <div style="margin:0 50px 0 50px">
        <el-row>
          <el-col>
            <el-card :body-style="{ padding: '0px' }">
              <img
                src="../assets/images/xianweijing.jpg"
                class="image"
                style="width:15rem;height:15rem"
              />
              <div style="padding: 14px;">
                <span>当前设备数量</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button">点击前往</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>

      <div style="margin:0 50px 0 50px">
        <el-row>
          <el-col>
            <el-card :body-style="{ padding: '0px' }">
              <img
                src="../assets/images/fangdajing.jpg"
                class="image"
                style="width:15rem;height:15rem"
              />
              <div style="padding: 14px;">
                <span>当前数据点数量</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button">点击前往</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>

      <div style="margin:0 50px 0 50px">
        <el-row>
          <el-col>
            <el-card :body-style="{ padding: '0px' }">
              <img
                src="../assets/images/xianweijing.jpg"
                class="image"
                style="width:15rem;height:15rem"
              />
              <div style="padding: 14px;">
                <span>截至当前的报警信息</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button">点击前往</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>

      <div style="margin:0 50px 0 50px">
        <el-row>
          <el-col>
            <el-card :body-style="{ padding: '0px' }">
              <img
                src="../assets/images/fangdajing.jpg"
                class="image"
                style="width:15rem;height:15rem"
              />
              <div style="padding: 14px;">
                <span>设备相关联系人</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button">点击前往</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      erweimais: false
    };
  },
  methods: {
    say: function() {
      this.erweimais = true;
    },
    rem: function() {
      this.erweimais = false;
    }
  }
};
</script>
<style>
.home_01 {
  width: 90%;
  height: 100%;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.home_02 {
  width: 90%;
  height: 100%;
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  position: relative;
  top: 12rem;
}
.image_01 {
  width: 3rem;
  height: 3rem;
}
.erweima {
  position: absolute;
  top: 5rem;
  right: 3rem;
  display: flex;
  font-size: 5px;
  flex-direction: column;
  /* justify-content:center; */
  /* position: relative; */
}
.erweima_02 {
  top: 2rem;
  right: 10rem;
  position: absolute;
  display: flex;
  flex-direction: row;
}
</style>