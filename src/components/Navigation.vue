<template>
  <div>
    <br>
    <el-form ref="form" :model="newRecord" label-width="80px">
      <el-form-item label="起点" prop="start">
        <el-input v-model.trim="newRecord.start" @change="$refs.mapContainer.routing()"></el-input>
      </el-form-item>
      <el-form-item label="终点" prop="end">
        <el-input v-model.trim="newRecord.end" @change="$refs.mapContainer.routing()"></el-input>
      </el-form-item>
      <el-form-item label="路线规划" prop="plan">
        <el-radio-group v-model="newRecord.plan" size="medium" @input="$refs.mapContainer.routing()">
          <el-radio-button label="步行"></el-radio-button>
          <el-radio-button label="校巴"></el-radio-button>
          <el-radio-button label="驾车"></el-radio-button>
        </el-radio-group>
      </el-form-item>
      <p></p>
      <mapContainer ref="mapContainer"/>
    </el-form>


    <el-button type="primary" @click="addNavigation"
               style="margin-top: 10px; horiz-align: center;margin-bottom: 10px">
      Search
    </el-button>
    <p></p>
    <busNavigation v-if="newRecord.plan==='校巴'" ref="busNavigation"/>
  </div>
</template>

<script>
import mapContainer from "@/components/MapContainer.vue";
import busNavigation from "@/components/BusNavigation.vue";
import {mapState} from "vuex";
import dataService from "@/service/dataService";
// import dataService from "@/service/dataService";


export default {
  name: 'Navigation',
  components: {busNavigation, mapContainer},
  computed: {
    ...mapState('navigation', {
      newRecord: state => state.newRecord
    })
  },
  data() {
    return {}
  },
  methods: {
    addNavigation() {
      const result = mapContainer.result;
      console.log(result)
      dataService.addRecord(result, resp => {
        console.log(resp)
      })
      //组装数据保存到后台
      this.$store.commit('navigation/setNewRecord', {
        lat: result.destination.lat,
        lng: result.destination.lng,
        name: result.destinationName
      });
      //保存数据到后台
      this.isAddNewRecord = false
      this.$store.dispatch("navigation/addRecord")
    },
    returnNavigation() {

    }
  }
}
</script>

<style scoped>
</style>