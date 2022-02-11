<template>
  <div>
    <span class="page-title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>
<style scoped>
.page-title {
  font-size: 18px;
  font-weight: bold;
}
</style>
