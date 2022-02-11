<template>
  <div>
    <PageTitle title="Members" />
    <MemberList :list="members" />
    <div>footer</div>
  </div>
</template>

<script>
import PageTitle from "../components/page.title.vue";
import MemberList from "../components/member.list.vue";
export default {
  name: "Members",
  components: { PageTitle, MemberList },
  data() {
    return {
      members: ["a", "b", "c", "d", "e", "f", "c", "d", "e", "f"],
    }
  },
};
</script>
