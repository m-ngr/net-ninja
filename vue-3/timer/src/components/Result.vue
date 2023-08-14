<template>
  <div class="result">
    <p>Reaction time - {{ time }} ms</p>
    <p class="highlight">{{ pace }}</p>
  </div>
</template>

<script>
export default {
  props: ["time"],
  computed: {
    pace() {
      const t = this.time;
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
