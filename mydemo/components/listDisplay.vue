<template>
  <div class="dataList">
    <!-- 选择设备表格 -->
    <!-- 搜索框 -->
    <div class="dataList01">
            <div class="sousuo01">
                    <el-input placeholder="请输入内容" clearable></el-input>
                    <el-button type="primary">查找设备</el-button>
            </div>
      <el-table stripe :data="tableData" style="width: 100%;height: 100%;">
        <el-table-column prop="date" label="状态" width="150">
        </el-table-column>
        <el-table-column prop="name" label="设备名称" width="150">
        </el-table-column>
        <el-table-column width="100">
          <span>></span>
        </el-table-column>
      </el-table>
    </div>
    <!-- 设备显示表格 -->
    <div class="dataList02">
            <el-table
            :data="tableData1"
            style="width: 100%">
            <el-table-column
              prop="date"
              label="数据点"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="数值"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="更新时间">
            </el-table-column>
            <!-- 操作按钮 -->
            <el-table-column>
                    <div class="sousuo01">
                            <el-button type="info">历史数据</el-button>
                    </div>

          </el-table-column>
          </el-table>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '报警',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '正常',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '自测中',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '重启中',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        tableData1: [{
          date: '室内温度',
          name: '15',
          address: '2019.11.11:20.00'
        }, {
          date: '室外温度',
          name: '15',
          address: '2019.11.11:20.00'
        }, {
          date: '室内湿度',
          name: '15',

          address: '2019.11.11:20.00'
        }, {
          date: 'SIF',
          address: '2019.11.11:20.00'
        },
         {
          date: '当前模式',
          name: '地物1,1.0534',
          address: '2019.11.11:20.00'
        }]
      }
    }
  }

</script>
<style>
  .dataList {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .dataList01 {
    width: 25rem;
    height: 40rem;
    /* background-color: red; */
  }

  .dataList02 {
    width: 55rem;
    height: 43rem;
    border-left: solid 1px #000;
  }
  .sousuo01{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

</style>
