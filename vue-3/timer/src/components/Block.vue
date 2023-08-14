<template>
  <div class="block" @click="endGame" v-show="showBlock"></div>
</template>

<script>
export default {
  data() {
    return { startTime: null, endTime: null, showBlock: true };
  },
  methods: {
    startGame() {
      const time = (1 + Math.ceil(Math.random() * 5)) * 1000;
      this.startTime = null;
      this.endTime = null;
      this.showBlock = false;
      setTimeout(() => {
        this.startTime = Date.now();
        this.showBlock = true;
      }, time);
      this.$emit("startGame");
    },
    endGame() {
      this.endTime = Date.now();
      this.showBlock = false;
      this.$emit("endGame", this.timeDiff);
    },
  },
  computed: {
    timeDiff() {
      return this.endTime - this.startTime;
    },
  },
  mounted() {
    this.startGame();
  },
};
</script>

<style>
.block {
  margin-top: 20px;
  background-color: teal;
  width: 300px;
  height: 200px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
