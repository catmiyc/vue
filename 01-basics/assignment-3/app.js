const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },

  computed: {
    result() {
      if (this.counter <= 37) {
        return "Not there yet";
      } else {
        return "Too much!";
      }
    },
  },

  watch: {
    result() {
      const that = this;
      setTimeout(function () {
        that.counter = 10;
      }, 5000);
    },
  },

  methods: {
    addNum(n) {
      this.counter = this.counter + n;
    },
  },
});

app.mount("#assignment");
