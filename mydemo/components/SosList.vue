<template>
        <div>
          <!-- 搜索框 -->
          <div class="sousuo">
            <span>报警信息</span>
            <div>
              <el-button type="primary" @click="adduser = true">添加信息语句</el-button>
              <el-button type="success" @click="Jurisdiction = true">权限管理</el-button>
            </div>
          </div>
          <!-- 权限管理 -->
          <el-dialog title="权限管理" :visible.sync="Jurisdiction">
            <el-form :model="form">
              <el-form-item label="选择角色:">
                <el-select v-model="form.region" placeholder="请选择角色">
                  <el-option label="管理员" value="shanghai"></el-option>
                  <el-option label="大工" value="beijing"></el-option>
                  <el-option label="小工" value="jj"></el-option>
                </el-select>
                <el-button>添加角色</el-button>
              </el-form-item>
      
            </el-form>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="接收报警"></el-checkbox>
              <el-checkbox label="查看数据"></el-checkbox>
              <el-checkbox label="下载数据"></el-checkbox>
              <el-checkbox label="报警管理"></el-checkbox>
              <el-checkbox label="设备管理"></el-checkbox>
              <el-checkbox label="原始数据"></el-checkbox>
            </el-checkbox-group>
            <el-button type="primary" style="margin-top: 15px;" plain>添加权限</el-button>
            <div slot="footer" class="dialog-footer">
              <el-button @click="Jurisdiction = false">取 消</el-button>
              <el-button type="primary" @click="Jurisdiction = false">确 定</el-button>
            </div>
          </el-dialog>
          <!-- 用户权限分配 -->
          <el-dialog title="分配角色" :visible.sync="dialogFormVisible">
            <el-radio-group v-model="radio">
              <el-radio :label="3">经理</el-radio>
              <el-radio :label="6">大工</el-radio>
              <el-radio :label="9">小工</el-radio>
            </el-radio-group>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
          </el-dialog>
          <!-- 添加用户 -->
          <el-dialog title="添加用户" :visible.sync="adduser">
            <el-form :model="form">
              <el-form-item label="用户名称" :label-width="formLabelWidth">
                <el-input autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="用户密码" :label-width="formLabelWidth">
                <el-input autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="用户角色" :label-width="adduser">
                <el-select placeholder="请选择角色">
                  <el-option label="管理员" value="shanghai"></el-option>
                  <el-option label="大工" value="beijing"></el-option>
                  <el-option label="小工" value="shanghai"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="adduser = false">取 消</el-button>
              <el-button type="primary" @click="adduser = false">确 定</el-button>
            </div>
          </el-dialog>
          <!-- 设备列表 -->
          <div style="width:80rem;">
            <el-table :data="tableData" height='40rem' style="width: 100%">
              <el-table-column label="名称" width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.name }}</span>
                </template>
              </el-table-column>
              <el-table-column label="描述" width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.name }}</span>
                </template>
              </el-table-column>
              <el-table-column label="角色" width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.name }}</span>
                </template>
              </el-table-column>
              <el-table-column label="更新时间" width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button size="mini" @click="dialogFormVisible = true">管理</el-button>
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
              this.$confirm('此用户将永久删除', '提示', {
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
      