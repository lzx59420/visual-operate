<template>
  <div v-for="(componentObj,index) in componentList" :key="componentObj.component">
    <img :src="componentObj.imgUrl" @click="addComp" class="img">
  </div>
</template>

<script setup lang="ts">
import { useComponentListStore } from '@/stores/componentList'
import { useDrawingListStore } from '@/stores/drawingList'

const { componentList } = useComponentListStore()
const { pushComponent } = useDrawingListStore()
const addComp = function (){
  pushComponent([{ props: {text:'文案'}, component: 'FirstComp', option: {},id:'1' }])
}
</script>

<style lang="scss" scoped>
.img{
  width: 200px;
  height: 200px;
  margin-top: 20px;
}
</style>