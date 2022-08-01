module.exports = {
  extraWatchFiles: ["src/**/*.md","src/index.md","src/**/*.vue"],
  title: null,
  description: 'Official Documentation Site for the BlockForge NFT Project',
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
