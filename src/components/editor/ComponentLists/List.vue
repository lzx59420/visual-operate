<template>
  <div v-for="(componentObj,index) in componentList" :key="componentObj.component">
    <img :src="componentObj.imgUrl" @click="addComp(componentObj)" class="img">
  </div>
</template>

<script setup lang="ts">
import { useComponentListStore } from '@/stores/componentList'
import { useDrawingListStore } from '@/stores/drawingList'
import { v4 as uuidv4 } from 'uuid'

const { componentList } = useComponentListStore()
const { pushComponent } = useDrawingListStore()
const addComp = function (componentObj: { component: string; }){
  pushComponent({ props: { }, component: componentObj.component,option: {},id: uuidv4() })
}
</script>

<style lang="scss" scoped>
.img{
  width: 200px;
  height: 200px;
  margin-top: 20px;
}
</style>