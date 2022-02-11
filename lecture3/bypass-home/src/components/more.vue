<template>
    <div>
        <router-link to="{{ page }}}">More</router-link>
    </div>
</template>

<script>
export default {
  props: ["page"],
};
</script>

