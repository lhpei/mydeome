import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Display from '@/components/dataDisplay'
import Equip from '@/components/equipmentList'
import Adddev from '@/components/Adddevice'
import Adduser from '@/components/userList'
import ListDisplay from '@/components/listDisplay'
import HistoricalData from '@/components/HistoricalData'
import Mymap from '@/components/map'
import AlarmRecord from '@/components/AlarmRecord'
import AlarmManagement from '@/components/AlarmManagement'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Display',
      name: 'Display',
      component: Display
    },
    {
      path: '/Equip',
      name: 'Equip',
      component: Equip
    },
    {
      path: '/Adddev',
      name: 'Adddev',
      component: Adddev
    },
    {
      path: '/Adduser',
      name: 'Adduser',
      component: Adduser
    },
    {
      path: '/ListDisplay',
      name: 'ListDisplay',
      component: ListDisplay
    },
    {
      path: '/HistoricalData',
      name: 'HistoricalData',
      component: HistoricalData
    },
    {
      path: '/AlarmRecord',
      name: 'AlarmRecord',
      component: AlarmRecord
    },
    {
      path: '/AlarmManagement',
      name: 'AlarmManagement',
      component: AlarmManagement
    }


  ]
})
