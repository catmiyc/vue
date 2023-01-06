const app = Vue.createApp({
	data() {
		return {
			name: "Leon",
			age: 20,
			imgLink:
				"https://images.unsplash.com/photo-1672862817339-51ef2610a5d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
		};
	},
	methods: {
		calculateAge() {
			return this.age + 5;
		},
		output() {
			const randomNum = Math.random();
			return randomNum;
		},
	},
});

app.mount("#assignment");
