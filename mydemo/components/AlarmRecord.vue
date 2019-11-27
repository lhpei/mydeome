<!-- 报警记录 -->
<template>
  <div>
    <!-- 搜索框 -->
    <div class="sousuo">
      <span>报警记录</span>
      <div class="shebeititle">
        <el-input placeholder="设备查找"></el-input>
        <el-button type="primary" @click="Jurisdiction = true">搜索设备</el-button>
      </div>
    </div>
   <!-- 设备详情抽屉 -->
    <el-drawer
  title="报警记录详情"
  :visible.sync="drawer"
  :direction="direction"
  :before-close="handleClose">
  <span>还没有定义具体的报警记录详情</span>
</el-drawer>
    <!-- 设备列表 -->
    <div style="width:80rem;">
      <el-table :data="tableData" height='40rem' style="width: 100%">
        <el-table-column label="序号" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="报错类型" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="错误信息" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="报警时间" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template>
            <el-button size="mini"  @click="drawer = true">详情</el-button>
            <el-button size="mini" type="danger" @click="open">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>


</template>

<script>
  export default {
    data() {
      return {
        radio: 3,
        adduser: false,
        dialogFormVisible: false,
         drawer: false,
        Jurisdiction: false,
        checkList: ['选中且禁用', '复选框 A'],
        formLabelWidth: '5rem',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
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
        }, ],
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      open() {
        this.$confirm('是否删除此条报警记录', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }

</script>
<style>
  .sousuo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .sousuo>span {
    font-size: 2rem;
    margin-left: 5px;
  }
  .shebeititle{
          display: flex;
    width: 15rem;
    flex-direction: row;
    justify-content: flex-start;
  }

  .quanxian {
    display: flex;
    width: 15rem;
    flex-direction: row;
    justify-content: flex-start;
  }

  .checkbox1 {
    display: flex;
    flex-direction: column;
    /* justify-content:flex-start; */
  }

</style>
