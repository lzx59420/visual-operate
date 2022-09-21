<template>
  <div class="box">
    文案：<a-input v-model:value="innetVal" @change="handleChange" placeholder="请输入文案" />
  </div>
</template>

<script setup lang="ts">
import { ref,toRefs,watch } from 'vue'
export interface FirstProp {
  text: String
}
const props= defineProps<FirstProp>()
const { text } = toRefs(props)
const innetVal = ref(text.value)
watch(text, () => {
  /* 深层级变更状态所触发的回调 */
  innetVal.value = text.value
})

const emit = defineEmits<{(e: 'change', prop: object): void}>()
const handleChange = function (){
  emit('change',{text:innetVal.value})
  console.log(text.value,'text',innetVal.value);
}
// 选中id，
</script>

<style scoped>
.box{
  width: 200px;
  height: 200px;
  background-color: red;
}
</style>