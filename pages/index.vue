<template>
  <div class="container">
    <ToolBar
      @on-change-tempo="onChangeTempo"
      @on-change-osc="onChangeOsc"
      @on-play="onPlay"
    ></ToolBar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class PageIndex extends Vue {
  onChangeTempo(event: Event): void {
    console.log(event);
  }

  onChangeOsc(event: Event): void {
    console.log(event);
  }

  onPlay(event: Event): void {
    console.log(event);
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
