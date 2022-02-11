<template>
  <div class="lecture-list">
    <div v-for="item in list" :key="item" class="lecture-item">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["list"],
};
</script>
<style scoped>
.lecture-list {
  display: flex;
  column-count: 4;
}
.lecturer-list .lecture-item {
  width: 100%;
  height: 200px;
}
</style>
