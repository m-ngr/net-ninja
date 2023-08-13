<template>
  <h1>{{ title }}</h1>
  <!-- ref: used to reference the element -->
  <p ref="welcome">Welcome...</p>

  <button @click="setWelcomeMessage('Hi, there')">
    change welcome Message
  </button>
  <!-- component with props -->
  <Modal @close="toggleModal" :heading="heading" theme="sale" v-if="showModal">
    <p>{{ text }}</p>

    <template v-slot:actions>
      <!-- this is used to fill a slot called 'actions' -->
      <a href="#">sign up now</a>
      <a href="#">more info</a>
    </template>
  </Modal>

  <button @click="toggleModal">Show Modal</button>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "My First Vue App!",
      heading: "Sign up for the Givaway!",
      text: "Grab your ninja swag for half price!",
      showModal: false,
    };
  },

  methods: {
    setWelcomeMessage(msg) {
      this.$refs.welcome.innerText = msg;
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
