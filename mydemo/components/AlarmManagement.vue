<!-- 报警信息管理 -->
<template>
  <div>
    <!-- 搜索框 -->
    <div class="sousuo">
      <span>报警信息管理</span>
      <div class="shebeititle">
        <el-input placeholder="设备查找"></el-input>
        <el-button type="primary" @click="Jurisdiction = true">搜索设备</el-button>
      </div>
    </div>
    <!-- 设备详情抽屉 -->
    <el-drawer title="报警信息编辑/添加" :visible.sync="drawer" >
      <div class="bjtianjia" style="width:20rem;margin-top:2rem;">
        <span style="width:10rem;margin-top:0.5rem;margin-left: 3rem;">报警内容</span>
        <span style="color:red;margin-right:0.5rem;">*</span>
        <el-input placeholder="请输入内容"></el-input>
      </div>
      <!-- 编号 -->
      <div class="bjtianjia" style="width:20rem;margin-top:2rem;">
        <span style="width:10rem;margin-top:0.5rem;margin-left: 3rem;">报警编号</span>
        <span style="color:red;margin-right:0.5rem;">*</span>
        <el-input placeholder="请输入内容"></el-input>
      </div>
      <!-- 级别 -->
      <div class="bjtianjia1" style="width:27rem;margin-top:2rem;">
        <span style="width:10rem;margin-top:-0.2rem;margin-left: 3rem;">报警级别</span>
        <div style="position: relative;left: -5.5rem;">
          <span style="color:red;margin-left:-1rem;">*</span>
          <el-radio v-model="radio3" label="1">错误级别</el-radio>
          <el-radio v-model="radio3" label="2">报警级别</el-radio>
        </div>
      </div>
      <!-- 报警启用状态 -->
      <div class="bjtianjia1" style="width:27rem;margin-top:2rem;">
        <span style="width:10rem;margin-top:-0.2rem;margin-left:1rem;">报警启用状态</span>
        <div style="position: relative;left: -9rem;">
          <span style="color:red;margin-left:-1rem;">*</span>
          <el-radio v-model="radio" label="1">禁用</el-radio>
          <el-radio v-model="radio" label="2">启用</el-radio>
        </div>
      </div>
      <!-- 报警设备 -->
      <div class="bjtianjia" style="width:20rem;margin-top:2rem;">
        <span style="width:10rem;margin-top:0.5rem;margin-left: 3rem;">报警设备</span>  
        <!-- <span style="color:red;z-index: 5;">*</span>      -->
        <el-select  placeholder="全选"style="margin-left:-1.5rem;">
            <el-option
            style="width: 20rem;"
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </div>
       <!-- 报警推送内容 -->
       <div class="bjtianjia" style="width:20rem;margin-top:2rem;">
        <span style="width:10rem;margin-top:0.5rem;margin-left: 3rem;">报警内容</span>
        <span style="color:red;margin-right:0.5rem;">*</span>
        <el-input placeholder="请输入内容"></el-input>
      </div>
      <!-- 回复正常推送内容 -->
      <div class="bjtianjia" style="width:20rem;margin-top:2rem;">
        <span style="width:10rem;margin-top:0.5rem;margin-left: 3rem;">恢复内容</span>
        <span style="color:red;margin-right:0.5rem;">*</span>
        <el-input placeholder="请输入内容"></el-input>
      </div>
      <!-- 选择此报警信息的用户 -->
      <div class="bjtianjia" style="width:20rem;margin-top:2rem;">
        <span style="width:10rem;margin-top:0.5rem;margin-left: 3rem;">添加推送人</span>  
        <!-- <span style="color:red;z-index: 5;">*</span>      -->
        <el-select  placeholder="全选"style="margin-left:-1.5rem;">
            <el-option
            style="width: 20rem;"
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </div>
      <!-- 按钮两个 -->
      <div class="bjtianjia1" style="width:15rem;margin: 5rem 0 0 7rem;">
        <el-button type="primary" round>保存</el-button>
        <el-button type="success" round>取消</el-button>
      </div>
    </el-drawer>
    <!-- 报警信息选择 -->
    <div style="float:left;margin-top:2rem;">
      <el-radio-group v-model="radio1">
        <el-radio-button label="警报信息"></el-radio-button>
        <el-radio-button label="错误信息"></el-radio-button>
      </el-radio-group>
    </div>

    <!-- 设备列表 -->
    <div style="width:80rem;">
      <el-table :data="tableData" height='40rem' style="width: 100%">
        <el-table-column label="报警编号" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="报警信息" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="创建时间" width="260">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template>
            <el-button size="mini" @click="drawer = true">编辑</el-button>
            <el-button size="mini" type="drawer" @click="dialogFormVisible1 = true">添加设备</el-button>
            <el-button size="mini" type="danger" @click="open">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 报警管理 添加设备弹框 -->
    <el-dialog title="当前报警编号:XMS5685" :visible.sync="dialogFormVisible1">
        <el-form :model="form">
          <el-form-item label="选择设备:" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择设备">
              <el-option label="设备一" value="shanghai"></el-option>
              <el-option label="设备二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible1 = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible1 = false">确 定</el-button>
        </div>
      </el-dialog>
      
  </div>


</template>

<script>
  export default {
    data() {
      return {
        radio3:1,
        radio: 3,
        adduser: false,
        dialogFormVisible: false,
        dialogFormVisible1:false,
        drawer: false,
        Jurisdiction: false,
        radio1: '上海',
        radio2: '上海',
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

  .shebeititle {
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

  .bjtianjia {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .bjtianjia1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

</style>
