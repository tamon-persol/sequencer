export { default as ToolBar } from '../../components/ToolBar.vue'

export const LazyToolBar = import('../../components/ToolBar.vue' /* webpackChunkName: "components/ToolBar" */).then(c => c.default || c)
