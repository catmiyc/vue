const app = Vue.createApp({
  data() {
    return {
      courseGoal1: "Finish the course and learn Vue!",
      courseGoal2: "Master Vue and make an app",
      vueLink: "https://cn.vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoal1;
      } else {
        return this.courseGoal2;
      }
    },
  },
});

app.mount("#user-goal"); // 构建与html中对应元素的联系
