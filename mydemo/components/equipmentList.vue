<template>
  <div>
    <!-- 搜索框 -->
    <div class="sousuo">
      <el-input placeholder="请输入内容搜索设备"></el-input>
      <el-button type="primary">搜索</el-button>
    </div>
    <!-- 设备列表 -->
    <div style="width:85rem;">
      <el-table :data="tableData" height='40rem' style="width: 100%">
        <el-table-column label="更新时间" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="数据上传" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="设备状态" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="设备编号" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="设备地址" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="设备安装时间" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" style='width:50rem;'>
          <template slot-scope="scope" style='width:15rem;'>
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">详情</el-button>
            <el-button size="mini" @click="drawer = true" type="primary">
              编辑
            </el-button>
            <el-button size="mini" @click="dialogVisible7 = true" type="primary">
               申请上传
              </el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 申请上传权限 -->
      <el-dialog
  title="提示"
  :visible.sync="dialogVisible7"
  width="30%"
  :before-close="handleClose">
  <span>当前设备编号:Xms25647,是否确定申请此设备的上传权限?</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible7 = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible7 = false">确 定</el-button>
  </span>
</el-dialog>
      <!-- 抽屉页 -->
      <el-drawer title="设备编辑" :visible.sync="drawer" :direction="direction" :before-close="handleClose">
        <div class="sousuo">
            <span  style="margin-top:0.5rem;font-size: 1.5rem;">增加设备绑定用户:</span>
            <el-select  placeholder="请选择需绑定的用户">
                <el-option
                  v-for="item in tableData"
                  :key="item.value"
                  :value="item.name">
                </el-option>
              </el-select>
        </div>
        <!-- 删除保存按钮 -->
        <div class="sousuo1">
            <el-button  type="warning">删除此设备</el-button>
            <el-button type="primary">保存设置</el-button>
            <el-button type="info">退出</el-button>
        </div>

      </el-drawer>
    </div>

  </div>


</template>

<script>
  export default {
    data() {
      return {
        drawer: false,
        dialogVisible7:false,
        direction: 'rtl',
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
          },
          {
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
          },
        ]
      }
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  }

</script>
<style>
  .sousuo {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .sousuo1{
    margin-top: 120px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
</style>
