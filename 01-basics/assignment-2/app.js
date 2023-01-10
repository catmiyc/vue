const app = Vue.createApp({
  data() {
    return {
      name: "",
      age: "",
    };
  },
  methods: {
    showAlert() {
      alert("You clicked the button");
    },
    showName(event) {
      this.name = event.target.value;
    },
    showAge(event) {
      this.age = event.target.value;
    },
  },
});

app.mount("#assignment");
