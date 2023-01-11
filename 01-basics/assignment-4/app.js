const app = Vue.createApp({
  data() {
    return {
      inputClass: "",
      userInputColor: "",
      paragraphIsVisible: true,
    };
  },

  computed: {
    paraClass() {
      return {
        user1: this.inputClass === "user1",
        user2: this.inputClass === "user2",
        visible: this.paragraphIsVisible,
        hidden: !this.paragraphIsVisible,
      };
    },
  },

  methods: {
    toggleParagraphVisble() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
  },
});

app.mount("#assignment");
