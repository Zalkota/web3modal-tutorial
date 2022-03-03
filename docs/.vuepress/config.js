module.exports = {
  extraWatchFiles: ["src/**/*.md","src/index.md","src/**/*.vue"],
  title: 'BlockForge NFT',
  description: 'Official Documentation Site for BlockForge NFT',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'WhitePaper', link: '/blockforge/' },
    ],
    sidebar: [
      {
        title: 'WhitePaper',
        collapsable: false,
        children: [
          ['/blockforge/welcome', 'Foreward'],
          ['/blockforge/battle-pass', 'Battle Pass Token'],
          ['/blockforge/Staking_Battle_Pass', 'Staking Battle Pass'],
          ['/blockforge/Renting_Battle_Pass', 'Renting Battle Pass'],
          ['/blockforge/Plots', 'Purchasing Plots'],
          ['/blockforge/PlotStaking', 'Staking Plots']
        ]
      },
      {
        title: 'Server Documentation',
        collapsable: false,
        children: [
          ['/blockforge/placeholder', 'Connect to Server']
        ]
      },
      {
        title: 'GamePlay',
        collapsable: false,
        children: [
          ['/blockforge/placeholder', 'Game Mechanics']
        ]
      }
    ]
  }
};
