declare module '*.svg' {
  // eslint-disable-next-line
  import Vue, { VueConstructor } from 'vue';
  const content: VueConstructor<Vue>;
  export default content;
}
