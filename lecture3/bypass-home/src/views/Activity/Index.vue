<template>
  <div>
    <PageTitle title="Activities" />
    <div>
      <router-link to="/detail">授業</router-link>
    </div>
    <div>footer</div>
  </div>
</template>

<script>
import PageTitle from "../../components/page.title.vue";
export default {
  name: "Activities",
  components: { PageTitle },
};
</script>
