import { reactive,computed,ref } from 'vue'
import { defineStore } from 'pinia'

interface drawCell {
  props: Object;
  component: string;
  option: Object;
  id:string,
}
interface currentCell {
  current: drawCell
}

export const useDrawingListStore = defineStore('drawingList', () => {
  const drawList = reactive<drawCell[]>([
    { props: {}, component: 'FirstComp', option: {},id:'1' },
    { props: {}, component: 'FirstComp', option: {},id:'2' }
  ])
  function pushComponent(listsArr: drawCell[]) {
    drawList.push(...listsArr) 
  }
  const id = ref('1')
  const currentDraw = computed(()=>drawList.find(item=>item.id === id.value) as drawCell) 
  function changeCurrentDraw(chooseCell: drawCell) {
    id.value = chooseCell.id
  }
  function changVal (prop:Object){
    Object.assign(currentDraw.value.props,prop)
  }
  return { drawList,currentDraw, pushComponent, changeCurrentDraw,changVal}
})

// prop
// Components
// option

// 库需要返回每个组件的prop初始值和type
// 真实实例对象需要走接口（接口返回的实例数据需要些什么？1、模版id，2、属于哪个用户，3、组件props列表，4、）

