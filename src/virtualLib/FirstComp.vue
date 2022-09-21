<template>
  <div class="box">
    {{text}}
  </div>
</template>

<script setup lang="ts">
import { toRefs} from 'vue'
export interface FirstProp {
  text?: string
}
const prop= withDefaults(defineProps<FirstProp>(),{ text:'默认文案'})
const { text } = toRefs(prop)

defineExpose({
  text
})
</script>

<style scoped>
.box{
  width: 200px;
  height: 200px;
  background-color: red;
}
</style>