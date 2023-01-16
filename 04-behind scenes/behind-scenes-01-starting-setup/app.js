const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      // console.dir(this.$refs.userText);
    },
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created()");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
});

app.mount("#app");

const app2 = Vue.createApp({
  template: `
  <h2>hello</h2>
  <p>{{favoriteMeal}}</p>
  `,
  data() {
    return {
      favoriteMeal: "pizza",
    };
  },
  methods: {},
});

app2.mount("#app2");

// let message = "hello";

// let longMessage = message + " world";

// console.log(longMessage);

// message = "hello!!!";

// console.log(longMessage);
// longMessage = message + " world";
// console.log(longMessage);

// const data = {
//   message: "hello",
//   longMessage: "hello, world",
// };

// const handler = {
//   set(target, key, value) {
//     if (key === "message") {
//       target.longMessage = value + ", world";
//     }
//     target.message = value;
//   },
// };

// const proxy = new Proxy(data, handler);

// proxy.message = "hello!!!";

// console.log(proxy.longMessage);
