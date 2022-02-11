<template>
  <div class="member-list">
    <div v-for="item in list" :key="item" class="member-item">
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
.member-list {
  display: flex;
  column-count: 3;
}
.member-list .member-item {
  width: 90%;
  height: 200px;
}
</style>
