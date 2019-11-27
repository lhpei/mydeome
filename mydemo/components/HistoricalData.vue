<template>
    <div class="body01">
            <div class="headr01">
                    <!-- head列表 -->
                    <div class="headr02">
                      <span>选择设备:</span>
                      <el-select v-model="value" placeholder="选择设备">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </div>
                    <!-- 数据点 -->
                    <div class="headr02">
                      <span>数据点:</span>
                      <el-select v-model="value" placeholder="数据点选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </div>
                    <!-- 时间选择 -->
                    <div class="headr02">
                      <span>选择时间:</span>
                      <el-date-picker class="date-picker"  v-model="value1" type="date" placeholder="起始日期">
                      </el-date-picker>
                      <span>-</span>
                      <!-- 结束日期 -->
                      <el-date-picker v-model="value2" type="date" placeholder="结束日期">
                      </el-date-picker>
                    </div>
                    <el-button type="primary" style="height: 2.5rem;margin-left: 1rem;">查询</el-button>
                  </div>
                  <!-- 图表 -->
                  <div class="tubiao1">
                    <div style="margin-left: 5rem;">
                      <span style="color: red;">设备动态图:</span>
                        <BrokenLine ></BrokenLine>
                    </div>
                    <div>
                        <span style="color: red;">设备位置:</span>
                        <mymap style="height: 15rem;width: 30rem;margin-top: 4rem;margin-left: 5rem;"></mymap>
                    </div>
                  </div>
                  <!-- 下部表格 -->
                  <div class="zhanshi">
                      <!-- 选择数据 -->
                        <div style="margin-left: 3rem;">
                                <el-radio v-model="radio" label="1">室内温度</el-radio>
                                <el-radio v-model="radio" label="2">室外温度</el-radio>  
                          </div>
                          <!-- 下载按钮 -->
                          <div style="margin-right: 3rem;">
                              <el-button type="primary">下载当前数据</el-button>
                          </div>
                  </div>
                  <!-- 表格 -->
                  <div style="width: 50rem;height: 45rem;margin-top: 2rem;">
                      <el-table
                      :data="tableData"
                      stripe
                      width='1400'
                      style="width: 100%">
                      <el-table-column
                      prop="name"
                      label="数值"
                      width="400">
                    </el-table-column>
                      <el-table-column
                        prop="date"
                        label="日期"
                        width="400">
                      </el-table-column>

                    </el-table>
                  </div>
 
                 
    </div>
  
</template>
<script>
  import BrokenLine from './BrokenLine'
  import mymap from './map'
  export default {
    components:{
      BrokenLine,
      mymap
    },
    data() {
      return {
        radio:'1',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        // 表格
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        value: '',
        // 时间选择
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }]
        },
        value1: '',
        value2: '',
      }
    }
  }

</script>
<style>
  .headr01 {
    width: 75rem;
    height: 2rem;
    margin-top: 1rem;
    margin-left: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .headr02 {
    display: flex;
    flex-direction: row;
  }

  .headr02>span {
    margin-top: 0.5rem;
    margin-right: 0.5rem;
  }
  .body01{
      width: 86rem;
      height: 43rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* background-color: black; */
    align-items:center;
    overflow: auto;
  }
  .tubiao1{
      /* width:50rem ; */
      margin-top: 2rem;
      margin-left: -15rem;
      display: flex;
      flex-direction: row;
      /* height:5000px; */
  }
  .zhanshi{
      width: 100%;
      height: 3rem;
      display: flex;
      margin-top: 3rem;
      flex-direction: row;
      justify-content: space-between ;
  }
</style>
