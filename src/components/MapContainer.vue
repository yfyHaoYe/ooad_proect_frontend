<template>
  <div>
    <div id="container"></div>
    <div id="panel"></div>
  </div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";
import {mapState} from "vuex";

window._AMapSecurityConfig = {
  securityJsCode: '8bf2de630026e7b79dc612fdb91cece0',
}

export default {
  name: "map-view",
  data() {
    return {
      walking: null,  //步行
      transfer: null, //公交
      driving: null,  //驾车
    }
  },
  computed: {
    ...mapState('navigation', {
      newRecord: state => state.newRecord
    })
  },
  mounted() {
    this.initAMap();
  },
  unmounted() {
    this.map?.destroy();
  },
  methods: {
    initAMap() {
      AMapLoader.load({
        key: "5cb928528b5b081207bf285a4637c986", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.Walking', 'AMap.Transfer', 'AMap.Driving', 'AMap.Geolocation'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
          .then((AMap) => {
            this.AMap = AMap;
            // 设置地图容器id
            this.map = new AMap.Map("container", {
              resizeEnable: true,
              center: [114.001343, 22.596590], // 初始化地图中心点位置
              zoom: 16, //地图显示的缩放级别
              viewMode: "3D", // 是否为3D地图模式
            });

            //构造路线导航类
            this.walking = new AMap.Walking({ //步行
              map: this.map,
              panel: "panel"
            });

            // this.transfer = new AMap.Transfer({ //公交
            //   map: this.map,
            //   city: '深圳市',
            //   panel: 'panel',
            //   policy: AMap.TransferPolicy.LEAST_TIME //乘车策略
            // });

            this.driving = new AMap.Driving({ //驾车
              // map 指定将路线规划方案绘制到对应的AMap.Map对象上
              map: this.map,
              // panel 指定将结构化的路线详情数据显示的对应的DOM上，传入值需是DOM的ID
              panel: 'panel',
              // 驾车路线规划策略，AMap.DrivingPolicy.LEAST_TIME是最快捷模式
              policy: AMap.DrivingPolicy.LEAST_TIME,
            });

          })
          .catch((e) => {
            console.log(e);
          });
    },
    routing() { //导航
      console.log(111, this)
      if (this.newRecord.start && this.newRecord.end) {
        console.log(222, this.newRecord)
        //清除搜索结果
        this.walking.clear();
        // this.transfer.clear();
        this.driving.clear();

        const points = [
          {keyword: this.newRecord.start, city: '深圳'},
          {keyword: this.newRecord.end, city: '深圳'}
        ];
        if (this.newRecord.plan === '步行') {
          this.walking.search(points, (s, r) => {
            this.searchFinish(s, r);
          });
        } else if (this.newRecord.plan === '校巴') {
          // this.transfer.search(points, (s, r) => {
          //   this.searchFinish(s, r);
          // });
          this.$store.dispatch('navigation/busSearch')
        } else if (this.newRecord.plan === '驾车') {
          this.driving.search(points, (s, r) => {
            this.searchFinish(s, r);
          });
        }
      }
    },

    searchFinish(status, result) {  //搜索完成
      if (status === 'complete') {
        this.result = result;
        console.log(result)
        // //定位目前不可用，因为没有服务器
        // const geolocation = new this.AMap.Geolocation({
        //   enableHighAccuracy: true,//是否使用高精度定位，默认:true
        //   timeout: 10000,          //超过10秒后停止定位，默认：5s
        //   buttonPosition:'RB',    //定位按钮的停靠位置
        //   buttonOffset: new this.AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        //   zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点
        // });
        // this.map.addControl(geolocation);
        // geolocation.getCurrentPosition(function(geolocationStatus,geolocationResult){
        //   console.log(geolocationStatus,geolocationResult)
        //   if(geolocationStatus==='complete'){
        //     return false;
        //   }else{
        //     this.$message.info(geolocationResult.message);
        //   }
        // });
      } else {
        this.$message.warning(result.info);
      }
    },
    geolocation() { // 定位
    }
  }
}
</script>

<style scoped>
#container {
  width: 70%;
  height: 600px;
  margin: auto;
}
</style>
