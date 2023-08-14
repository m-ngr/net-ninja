<template>
  <h1>Reaction Timer</h1>
  <p>Click as fast as you can</p>
  <button @click="startGame" :disabled="started">Start</button>

  <Block v-if="started" @endGame="endGame" />
  <Result v-show="time" :time="time" />
</template>

<script>
import Block from "./components/Block.vue";
import Result from "./components/Result.vue";

export default {
  data() {
    return { started: false, time: 0 };
  },
  methods: {
    startGame() {
      this.started = true;
      this.time = 0;
    },
    endGame(time) {
      this.started = false;
      this.time = time;
    },
  },
  components: { Result, Block },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

button {
  background-color: rgb(1, 170, 170);
  color: white;
  border: 0;
  border-radius: 4px;
  padding: 5px 15px;
  cursor: pointer;
}

button:hover {
  background-color: teal;
}

button:disabled {
  background-color: rgb(152, 189, 189);
}
</style>
