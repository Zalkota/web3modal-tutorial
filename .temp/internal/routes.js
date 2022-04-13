/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "C:\\Users\\domin\\Documents\\dapps\\blockforge\\Blockforge-Docs\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-52bb137f",
    path: "/blockforge/Battle_Mode.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-52bb137f").then(next)
    },
  },
  {
    name: "v-06d7843d",
    path: "/blockforge/BlockForgeUniverse.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-06d7843d").then(next)
    },
  },
  {
    name: "v-e3735246",
    path: "/blockforge/ForgeToken.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-e3735246").then(next)
    },
  },
  {
    name: "v-3d786099",
    path: "/blockforge/GameMechanics.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-3d786099").then(next)
    },
  },
  {
    name: "v-80b0e1a2",
    path: "/blockforge/Plots.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-80b0e1a2").then(next)
    },
  },
  {
    name: "v-2dbd5fb2",
    path: "/blockforge/PlotStaking.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-2dbd5fb2").then(next)
    },
  },
  {
    name: "v-476ac9bd",
    path: "/blockforge/Project_Timeline.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-476ac9bd").then(next)
    },
  },
  {
    name: "v-d5806164",
    path: "/blockforge/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-d5806164").then(next)
    },
  },
  {
    path: "/blockforge/index.html",
    redirect: "/blockforge/"
  },
  {
    name: "v-d878b362",
    path: "/blockforge/Renting_Battle_Pass.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-d878b362").then(next)
    },
  },
  {
    name: "v-4c5b4165",
    path: "/blockforge/ServerDocumentation.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-4c5b4165").then(next)
    },
  },
  {
    name: "v-413b041a",
    path: "/blockforge/Staking_Battle_Pass.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-413b041a").then(next)
    },
  },
  {
    name: "v-f42a9462",
    path: "/blockforge/welcome.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-f42a9462").then(next)
    },
  },
  {
    name: "v-59856307",
    path: "/blockforge/battle-pass.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-59856307").then(next)
    },
  },
  {
    name: "v-9f14f56e",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-9f14f56e").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]