module.exports = {
  extraWatchFiles: ["src/**/*.md","src/index.md","src/**/*.vue"],
  title: 'BlockForge NFT',
  description: 'Official Documentation Site for BlockForge NFT',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'BlockForge', link: '/blockforge/' }
    ],
    sidebar: [
      {
        title: 'Blockforge',
        collapsable: false,
        children: [
          ['/blockforge/welcome', 'Foreward'],
          ['/blockforge/battle-pass', 'Battle Pass Token'],
          ['/blockforge/Staking_Battle_Pass', 'Staking Battle Pass'],
          ['/blockforge/Renting_Battle_Pass', 'Renting Battle Pass'],
          ['/blockforge/Plots', 'Purchasing Plots'],
          ['/blockforge/PlotStaking', 'Staking Plots']
        ]
      }
    ]
  }
};
