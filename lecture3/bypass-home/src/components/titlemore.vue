<template>
    <div>
        <span class="title-for-more">{{ titlemore }}</span>
    </div>
</template>

<script>
export default {
  props: ["titlemore"],
};
</script>
<style scoped>
.title-for-more {
  font-size: 18px;
  font-weight: bold;
}
</style>
