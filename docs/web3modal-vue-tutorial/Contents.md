---
title: WebModal-Vue Tutorial
pageClass: content-page-class-general
---

# How to Install Web3Modal-Vue



## Introduction
Web3Modal is an easy-to-use library to help developers add support for multiple providers in their apps with a simple customizable configuration.
By default Web3Modal Library supports injected providers like (Metamask, Dapper, Gnosis Safe, Frame, Web3 Browsers, etc) and WalletConnect, You can also easily configure the library to support Portis, Fortmatic, Squarelink, Torus, Authereum, D'CENT Wallet and Arkane.



:::tip  Links
[Completed Tutorial Code](https://github.com/WalletConnect/web3modal)

[Web3modal for React ](https://github.com/WalletConnect/web3modal)
:::

## Prerequisites
If you already have an existing VueJS project, then you can skip the first command.
```
vue create hello-world

npm install --save vuex
```


## Step 1 – Install Web3Modal
```
npm install --save web3modal-vue

# OR

yarn add web3modal-vue
```

## Step 2 – Import Web3Modal-Vue

In the VueJS application, create a file under components called `connectWallet.vue` and import the following code at the top of the page.

```
<script>

import Web3ModalVue from "web3modal-vue";
import WalletConnectProvider from "@walletconnect/web3-provider";


export default {
  components: {

  },
  mixins: [],
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {  

  },
  methods: {

  }
}

</script>
```

In the same file and above the `<script>`, add the following code as the template.

```
<template>

  <div id="app">
    <web3-modal-vue
        ref="web3modal"
        :theme="theme"
        :provider-options="providerOptions"
        cache-provider
    />
  </div>

</template>
```


## Step 3 – Component Configuration

Within the export default block type the following into the `components` block. This will signal to VueJS that we are requesting to use the Web3ModalVue component from the `web3modal-vue` package.

```
components: {
    Web3ModalVue
  },
```

Within the `data() { .. }` block, type the following code:
```
data() {
    return {
      theme: 'light',
      providerOptions: {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            infuraId: INFURA_ID,
          }
        }
      },
      number: 0,
      balance: 0,
    }
  },

```

Theme can be set to either `light` or `dark`.
Provider options informs Web3Modal-Vue what wallets to show the user when signing in. In this case, we are using the walletconnect option, so we will need to add a valid infura API key.

It is considered bad practice to paste the API key directly onto the page, so we will instead import it from our environment file.
Type the following line of code to our local imports, above where we imported Web3ModalVue.

```
const INFURA_ID = process.env.INFURA_ID
```
:::danger Note
If you are using git, add the .env file to the .gitignore file in your project directory.

[Learn more here](https://git-scm.com/docs/gitignore)
:::


Inside the methods block, type the following code:

```
 methods: {
    connect() {
      this.$store.dispatch('connect')
    },
  }
```

## Step 4 – Create .env file

In the base directory of your Vue Application, create a file called .env
Type the following code, but replace “INFURA-ID” with your valid Infura API Key. [Obtain your Infura API key here](https://infura.io/)

```
INFURA_ID=“INFURA-ID”
```


## Step 5 – Configuring Vuex
### Description
Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.

Type the following line of code to our local imports inside the **connectWallet.vue** component, above where we imported **Web3ModalVue** and the **INFURA_ID**.

```
import {web3Modal} from "./config/mixins";
```


Create a folder called `store` inside the `src` folder.
Within the `store` folder, create a file called `index.js`.

Type the following code into `index.js`.

```
import Vue from 'vue'
import Vuex from 'vuex'
import web3ModalStore from "@/store/modules/web3Modal";
import userStore from "@/store/modules/user";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        web3Modal: web3ModalStore,
    }
})
```

Create a folder called `modules`.

The create a file called `web3Modal.js` inside.

Within `web3Modal.js` add the following code:

```
import {getLibrary} from "@/utils/web3";
import {ethers} from "ethers";
import {parseInt} from 'lodash'

const web3ModalStore = {
    state: {
        web3Modal: null,

        library: getLibrary(),
        active: false,
        account: null,
        chainId: 0,
    },
    mutations: {
        setWeb3Modal(state, web3Modal) {
            state.web3Modal = web3Modal
        },
        setLibrary(state, library) {
            state.library = library
        },
        setActive(state, active) {
            state.active = active
        },
        setAccount(state, account) {
            state.account = account.toLowerCase()
        },
        setChainId(state, chainId) {
            state.chainId = chainId
        }
    },
    actions: {
        async connect({state, commit, dispatch}) {
            const provider = await state.web3Modal.connect();

            const library = new ethers.providers.Web3Provider(provider)

            library.pollingInterval = 12000
            commit('setLibrary', library)

            const accounts = await library.listAccounts()
            if (accounts.length > 0) {
                commit('setAccount', accounts[0])
            }
            const network = await library.getNetwork()
            commit('setChainId', network.chainId)
            commit('setActive', true)

            provider.on("connect", async (info) => {
                let chainId = parseInt(info.chainId)
                commit('setChainId', chainId)
                console.log("connect", info)
            });

            provider.on("accountsChanged", async (accounts) => {
                if (accounts.length > 0) {
                    commit('setAccount', accounts[0])
                } else {
                    await dispatch('resetApp')
                }
                console.log("accountsChanged")
            });
            provider.on("chainChanged", async (chainId) => {
                chainId = parseInt(chainId)
                commit('setChainId', chainId)
                console.log("chainChanged", chainId)
            });

        },
        async resetApp({state, commit}) {
            try {
                await state.web3Modal.clearCachedProvider();
            } catch (error) {
                console.error(error)
            }
            commit('setAccount', null)
            commit('setActive', false)
            commit('setLibrary', getLibrary())
        },
    }
}

export default web3ModalStore;
```
