const app = Vue.createApp({
  data() {
    return {
      enteredTask: "",
      tasks: [],
      taskListIsVisble: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.taskListIsVisble ? "hide" : "show";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
    },
    showOrHideTasks() {
      this.taskListIsVisble = !this.taskListIsVisble;
    },
  },
});

app.mount("#assignment");
