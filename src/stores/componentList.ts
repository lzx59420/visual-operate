import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
interface componentCell {
  name: string;
  component: string;
  imgUrl: string;
}

export const useComponentListStore = defineStore('componentList', () => {
  // 获取组件列表
  const compList: componentCell[] = [
    { name: '', component: 'FirstComp', imgUrl: '/src/assets/transparent.png' },
  ]
  const componentList = reactive<componentCell[]>(compList)

  return { componentList }
})
