<template>
  <div>
    <PageTitle title="Home" />
    <TitleMore titlemore="Members">
    <More page="/members">
    <TitleMore titlemore="Lectures">
    <More page="/lectures">
    <TitleMore titlemore="activities">
    <More page="/Activity/index">
    <div>
      <router-link to="/members">More</router-link>
    </div>
    <MemberList :list="members" />
    <div>
      <span>Lectures</span>
      <router-link to="/lectures">More</router-link>
    </div>
    <LectureList :list="lectures" />
    <div>activities</div>
    <div>footer</div>
  </div>
</template>

<script>
import PageTitle from "../components/page.title.vue";
import TitleMore from "../components/page.titlemore.vue";
import MemberList from "../components/member.list.vue";
import LectureList from "../components/lecture.list.vue";
export default {
  name: "Home",
  components: { PageTitle, MemberList, LectureList },
  data() {
    return {
      members: ["a", "b", "c", "d", "e", "f"],
      lectures: [
        "lecture 1",
        "lecture 2",
        "lecture 3",
        "lecture 4",
        "lecture 5",
        "lecture 6",
        "lecture 3",
        "lecture 4",
        "lecture 5",
        "lecture 6",
      ],
    }
  },
};
</script>
