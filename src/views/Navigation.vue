<script>
// import TitleLine from "@/components/TitleLine.vue";
import Navigation from "@/components/Navigation.vue";
import MyAside from "@/components/myAside.vue";
export default {
  components:{
    Navigation,
    // TitleLine,
    MyAside
  }
}
</script>

<template>
  <div class="container">
<!--    <TitleLine/>-->
    <MyAside/>
    <Navigation/>
  </div>
</template>