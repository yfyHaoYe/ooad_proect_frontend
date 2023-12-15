<template>
  <div style="height: 100%">
    <el-button type="primary" @click="search"
               style="margin-top: 50px; margin-left:90px;margin-bottom: 0px">
      Search
    </el-button>

    <el-col :span="17" :offset="3">
      <div>
        <el-form label-width="80px">
          <el-form-item label="起点" prop="start">
            <el-input v-model.trim="start" @change="$refs.mapContainer.routing()"></el-input>
          </el-form-item>
          <el-form-item label="终点" prop="end">
            <el-input v-model.trim="end" @change="$refs.mapContainer.routing()"></el-input>
          </el-form-item>
          <el-form-item label="路线规划" prop="plan">
            <el-radio-group v-model="plan" size="medium" @input="$refs.mapContainer.routing()">
              <el-radio-button label="步行"></el-radio-button>
              <el-radio-button label="公交"></el-radio-button>
              <el-radio-button label="驾车"></el-radio-button>
            </el-radio-group>
          </el-form-item>
          <map-container ref="mapContainer"/>
        </el-form>

        <bus-navigation-container v-on="isBusSearching"/>

        <el-button type="primary" @click="navigate" style="margin-top: 50px; margin-left:90px;margin-bottom: 0px">
          保存
        </el-button>
        <el-button @click="returnSearchRecord" style="margin-top: 50px; margin-left:90px;margin-bottom: 0px">
          返回
        </el-button>
      </div>

    </el-col>
  </div>
</template>

<script>
import MapContainer from "@/components/MapContainer";
import {mapState} from "vuex";
import dataService from "@/service/dataService";
import BusNavigationContainer from "@/components/BusNavigationContainer.vue";

export default {
  ...mapState("navigation", {
    newRecord: state => state.newRecord,
    totalDistance: state => state.newRecord.totalDistanceKm,
    isBusNavigating: state => state.newRecord.isBusNavigating
  }),

  name: "NavigationMap",
  components: {BusNavigationContainer, MapContainer},
  data() {
    return {
      isAddNewRecord: false,
      isBusSearching: false
    }
  },
  methods: {
    mapState,
    navigate() {
      const result = this.$refs.mapContainer.result;
      // console.log(result)
      dataService.addRecord({
        start: {
          lat: result.departure.lat,
          lng: result.departure.lng,
          name: result.departure.name
        },
        end: {
          lat: result.destination.lat,
          lng: result.destination.lng,
          name: result.destination.ame
        }

      }, resp => {
        console.log(resp)
      })
      /*//组装数据保存到后台的数据
      this.$store.commit('navigation/setNewRecord', {
        lat: result.destination.lat,
        lng: result.destination.lng,
        name: result.destinationName
      });
      //保存数据到后台
      this.isAddNewRecord = false
      this.$store.dispatch("navigation/addRecord")*/
    },
    search() {
      this.isAddNewRecord = true
      this.navigate()
    },
    returnSearchRecord() {
      this.isAddNewRecord = false
    }
  },
  computed: {},
  mounted() {}
}
</script>

<style scoped>
</style>