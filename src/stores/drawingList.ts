import { reactive,computed,ref } from 'vue'
import { defineStore } from 'pinia'

interface drawCell {
  props: Object;
  component: string;
  option: Object;
  id:string,
}

// 真实实例对象需要走接口（接口返回的实例数据需要些什么？1、模版id，2、属于哪个用户，3、组件props列表(prop、ID、option)
export const useDrawingListStore = defineStore('drawingList', () => {
  // 接口数据
  const propsList:drawCell[] = [
    // { props: {}, component: 'FirstComp', option: {},id:'1' },
    // { props: {}, component: 'FirstComp', option: {},id:'2' }
  ]
  const drawList = reactive<drawCell[]>(propsList)
  console.log(drawList);
  
  // 记录当前选中的组件
  const id = ref('3')
  const currentDraw = computed(()=>{
    return drawList.find(item=>item.id === id.value)  as drawCell
  }) 
  // 变更选中组件
  function changeCurrentDraw(chooseCell: drawCell) {
    id.value = chooseCell.id
  }
  // 更新实例属性
  function changVal (prop:Object){
    if(!currentDraw)return 
    Object.assign(currentDraw.value.props,prop)
  }
  // 新增组件到画布
  function pushComponent(drawCell: drawCell) {
    drawList.push(drawCell) 
    changeCurrentDraw(drawCell)
  }
  return { drawList,currentDraw, pushComponent, changeCurrentDraw,changVal}
})

