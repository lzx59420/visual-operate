<template>
  <div class="editor-box">
    <a-row>
      <a-col :span="8">
        <ComponentLists />
      </a-col>
      <a-col :span="8">
        <Draw />
      </a-col>
      <a-col :span="8">
        <From />
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import ComponentLists  from "./ComponentLists/Index.vue";
import Draw from "./Draw/Index.vue";
import From from "./From.vue";

</script>

<style lang="scss" scoped>
.editor-box {
  width: 100rem;
}
</style>
