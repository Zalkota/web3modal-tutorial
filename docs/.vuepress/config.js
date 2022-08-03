module.exports = {
  extraWatchFiles: ["src/**/*.md","src/index.md","src/**/*.vue"],
  title: null,
  description: 'Web3 Apprentice proudly provides the web3 community with free tutorials that assist programmer create decentralized applications (dapps) on Ethereum ',
  head: [

  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Web3Modal-Vue Tutorial', link: '/web3modal-vue-tutorial/' },
      { text: 'Related Tutorials', link: '/web3modal-vue-tutorial/related' }
    ],
    sidebar: [

      {
        title: 'Web3Modal-Vue Tutorial',
        collapsable: false,
        children: [
          ['/web3modal-vue-tutorial/Contents', 'Contents'],
        ]
      },
      {
        title: 'Related',
        collapsable: false,
        children: [
          ['/web3modal-vue-tutorial/Related','Related']
        ]
      }
    ]
  }
};
