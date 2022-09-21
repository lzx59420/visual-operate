<script lang="ts">
import { h,resolveComponent } from 'vue'
import { useDrawingListStore } from '@/stores/drawingList'

export default {
    setup(){ 
      const { drawList,changeCurrentDraw } = useDrawingListStore()
      const FirstComp = resolveComponent('FirstComp')
      return ()=>drawList.map(item=>{
        return  h(FirstComp,{...item.props,onClick: () => {
          changeCurrentDraw(item)
        }
      })})
    },
}
</script>

<style scoped>

</style>