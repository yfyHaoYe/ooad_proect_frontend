<template>
  <el-container width="auto" v-if="mapState.isBusNavigating">
    <el-card>出发地: {{mapState.start}} </el-card>
    <el-card>目的地: {{mapState.end}}</el-card>
    <el-card>总路程：{{mapState.totalDistance}}</el-card>
    <el-card>预计时间：{{}}</el-card>
    <el-card>剩余时间：{{}}</el-card>
    <el-card>下一趟公交：{{}}</el-card>
  </el-container>
</template>

<style>

</style>

<script>

import {mapState} from "vuex";

export default {
  methods: {mapState},
  ...mapState("navigation", {
    start: state => state.newRecord.start,
    end: state => state.newRecord.end,
    plan: state => state.newRecord.plan,
    totalDistance: state => state.newRecord.totalDistanceKm,
    isBusNavigating: state => state.newRecord.isBusNavigating
  }),
  data() {
    return{
      start: null,
      end: null,
    }
  },


}
</script>
