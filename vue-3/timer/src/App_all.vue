<template>
  <h1>Reaction Timer</h1>
  <p>Click as fast as you can</p>
  <button @click="startGame" :disabled="started">Start</button>

  <div class="rect" @click="endGame" v-show="showRect"></div>

  <div class="result" v-show="endTime">
    <p>Reaction time - {{ timeDiff }} ms</p>
    <p class="highlight">{{ pace }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return { startTime: null, endTime: null, started: false, showRect: false };
  },
  methods: {
    startGame() {
      const time = (1 + Math.ceil(Math.random() * 5)) * 1000;
      this.startTime = null;
      this.endTime = null;
      this.started = true;
      this.showRect = false;
      setTimeout(() => {
        this.startTime = Date.now();
        this.showRect = true;
      }, time);
    },
    endGame() {
      this.endTime = Date.now();
      this.started = false;
      this.showRect = false;
    },
  },
  computed: {
    timeDiff() {
      return this.endTime - this.startTime;
    },
    pace() {
      const t = this.timeDiff;
      if (t < 10) return "Impossible SPEED";
      if (t < 100) return "Blazingly Fast";
      if (t < 300) return "very Fast";
      if (t < 400) return "Fast";
      if (t < 600) return "Speedy";
      if (t < 800) return "Slow";
      return "very Slow";
    },
  },
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

.rect {
  margin-top: 20px;
  background-color: teal;
  width: 300px;
  height: 200px;
  border-radius: 5px;
  cursor: pointer;
}

.result {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.highlight {
  color: teal;
  font-size: large;
  font-weight: bold;
}
</style>
