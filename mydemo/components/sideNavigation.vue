<template>
  <el-menu default-active="1-4-1" background-color="#545C64" text-color="#fff" class="el-menu-vertical-demo"
    :collapse="false" router>
    <el-menu-item index="5" route='/'>
      <i class="el-icon-s-home" style="margin-right:20px;"></i>
      <span slot="title" style="margin-right:15px;">主页</span>
    </el-menu-item>
    <el-submenu index="1" router>
      <template slot="title">
        <i class="el-icon-magic-stick"></i>
        <span slot="title">数据展示</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1" route='/Display'>地图显示</el-menu-item>
        <el-menu-item index="1-2" route='/ListDisplay'>列表显示</el-menu-item>
        <el-menu-item index="1-3" route='/HistoricalData'>历史数据</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-discover"></i>
        <span slot="title">报警管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="2-1" route='/AlarmRecord'>报警记录</el-menu-item>
        <el-menu-item index="2-2" route='/AlarmManagement'>报警信息管理</el-menu-item>

      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-link" margin></i>
        <span slot="title">设备管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="3-1" route='/Equip'>设备列表</el-menu-item>
        <el-menu-item index="3-2" route='/Adddev'>添加设备</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <!-- 用户管理 -->
    <el-menu-item index="4" route='/Adduser'>
      <i class="el-icon-user"></i>
      <span slot="title">用户管理</span>
    </el-menu-item>
  </el-menu>
</template>
