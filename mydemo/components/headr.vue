<template>
  <div>
      <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <div style="color:#FFF;float:left;margin-left:20px;">
        <h3>伯克森(北京)股份有限公司</h3>
      </div>
      <div style="display: flex;flex-direction: row ;justify-content: flex-end; float:right">
        <el-menu-item index="1">当前用户</el-menu-item>
        <el-menu-item index="4"  @click="dialogVisible = true">退出系统</el-menu-item>
      </div>
    </el-menu>
    <!-- 提示 -->
    <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>确认退出系统?</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
  </div>

</template>
<script>
    export default {
      data() {
        return {
          dialogVisible: false
        };
      },
      methods: {
        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        }
      }
    };
  </script>