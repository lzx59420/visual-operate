<template>
  <div class="box">
    {{text}}
  </div>
</template>

<script setup lang="ts">
export interface FirstProp {
  text: String
}
const { text } = defineProps({
  text: String
})
</script>

<style scoped>
.box{
  width: 200px;
  height: 200px;
  background-color: red;
}
</style>