<template>
  <div>
    <el-container width=100%>
      <el-card width=auto>出发地：{{ start }}</el-card>
      <el-card width=auto>目的地：{{ end }}</el-card>
      <el-card width=auto>总路程：{{ distance }}</el-card>
      <el-card width=auto>预计时间：{{ estimatedTime }}</el-card>
      <el-card width=auto>剩余时间：{{ remainingTime }}</el-card>
      <el-card width=auto>下一趟公交：{{ nextBus }}</el-card>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      start: 'aaa',
      end: 'bbb',
      distance: 123,
      estimatedTime: 'ddd',
    }
  },
  computed: {
    remainingTime() {
      return 0
    },
    nextBus() {
      return 'eee'
    }
  }
}
</script>

<style scoped>

</style>