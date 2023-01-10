const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      //fullname: "",
      lastname: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 20) {
        this.counter = 0;
      }
    },
    // name(value) {
    //   // this.fullname = this.name + " " + "Dicapreo";
    //   this.fullname = value + " " + this.lastname;
    // },
    // lastname(value) {
    //   this.fullname = this.name + " " + value;
    // },
  },
  computed: {
    fullname() {
      return this.name + " " + this.lastname;
    },
  },
  methods: {
    resetInput() {
      this.name = "";
    },
    confirmedInput(event) {
      this.name = event.target.value;
    },
    submitForm() {
      alert("Submitted!");
    },
    setName(event) {
      this.name = event.target.value;
    },
    addNum(n) {
      this.counter = this.counter + n;
    },
    minusNum(n) {
      this.counter = this.counter - n;
    },
  },
});

app.mount("#events");
