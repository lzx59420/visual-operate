import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
interface componentCell {
  name: string;
  component: string;
  imgUrl: string;
}

export const useComponentListStore = defineStore('componentList', () => {
  const componentList = reactive<componentCell[]>([
    { name: '', component: 'FirstComp', imgUrl: '/src/assets/transparent.png' },
    { name: '', component: 'FirstComp', imgUrl: '/src/assets/transparent.png' }
  ])
  function pushComponent(listsArr: componentCell[]) {
    componentList.push(...listsArr)
  }

  return { componentList, pushComponent }
})
