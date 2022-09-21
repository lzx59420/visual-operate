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
        return  h(FirstComp,{...currentDraw.value.props,onChange: function (propObj:Object)  {
          console.log(propObj,'---');
          changVal(propObj)
        }
      })}
    },
}
</script>

<style lang="scss" scoped>

</style>