<template>
  <div v-for="(componentObj,index) in componentList" :key="componentObj.component">
    <img :src="componentObj.imgUrl" class="img">
  </div>
</template>

<script setup lang="ts">
import { useComponentListStore } from '@/stores/componentList'
const { componentList } = useComponentListStore()
</script>

<style lang="scss" scoped>
.img{
  width: 200px;
  height: 200px;
  margin-top: 20px;
}
</style>