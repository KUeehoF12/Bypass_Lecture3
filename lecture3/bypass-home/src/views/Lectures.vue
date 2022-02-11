<template>
  <div>
    <PageTitle title="Lectures" />
    <LectureList :list="lectures" />
    <div>footer</div>
  </div>
</template>

<script>
import PageTitle from "../components/page.title.vue";
import LectureList from "../components/lecture.list.vue";
export default {
  name: "Lectures",
  components: { PageTitle, LectureList },
  data() {
    return {
      lectures: [
        "lecture 1",
        "lecture 2",
        "lecture 3",
        "lecture 4",
        "lecture 5",
        "lecture 6",
      ],
    }
  },
};
</script>
