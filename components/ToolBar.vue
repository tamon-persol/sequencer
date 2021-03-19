<template>
  <div>
    <button @click="handlePlay(false)">stop</button>
    <button @click="handlePlay(true)">play</button>
    <select
      id=""
      v-model="oscillator"
      name=""
      @change="$emit('on-change-osc', $event.target.value)"
    >
      <option value="sin">sin</option>
      <option value="triangle">triangle</option>
      <option value="square">square</option>
      <option value="saw">saw</option>
    </select>
    <label for="range">Tempo</label>
    <input
      id="range"
      v-model="tempo"
      type="range"
      name="tempo"
      min="0"
      max="200"
      @change="$emit('on-change-tempo', $event.target.value)"
    />
    {{ tempo }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class PageIndex extends Vue {
  tempo = 0;
  isPlay = false;
  oscillator = "triangle";

  handlePlay(isPlay: boolean): void {
    this.isPlay = isPlay;
    this.$emit("on-play", this.isPlay);
  }
}
</script>

<style scoped></style>
