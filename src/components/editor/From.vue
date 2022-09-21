<script lang="ts">
import { h,resolveComponent } from 'vue'
import { useDrawingListStore } from '@/stores/drawingList'
import { storeToRefs } from 'pinia'

export default {
    setup(){
      const stores = useDrawingListStore()
      const { changVal } = stores
      const { currentDraw } = storeToRefs(stores)
      const FirstComp = resolveComponent('FirstCompAttr')

      return ()=>{
        return currentDraw.value 
        ? h(FirstComp,{...currentDraw.value.props,onChange:  (propObj:Object)=> changVal(propObj)})
        : h('div') 
      }
    },
}
</script>

<style lang="scss" scoped>

</style>