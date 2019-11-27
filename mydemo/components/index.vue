<template>
  <div>
    <home></home>
    <!-- <equipmentList></equipmentList> -->
    <!-- <Adddevice></Adddevice> -->
    <!-- <Display></Display> -->
    <!-- <AlarmManagement> </AlarmManagement> -->
    <!-- <DeviceDetails></DeviceDetails> -->

  </div>
</template>
<script>
import home from './home'
import equipmentList from './equipmentList'
import Adddevice from './Adddevice'
import Display from './dataDisplay'
import Userlist from './userList'
import HistoricalData from './HistoricalData'
import ListDisplay from './listDisplay'
import DeviceDetails from './DeviceDetails'
import AlarmRecord from './AlarmRecord'
import AlarmManagement from './AlarmManagement'
export default {
   components:{
    home,
    equipmentList,
    Adddevice,
    Display,
    Userlist,
    ListDisplay,
    HistoricalData,
    DeviceDetails,
    AlarmRecord,
    AlarmManagement
  }
}
</script>