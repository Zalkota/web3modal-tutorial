module.exports = {
  extraWatchFiles: ["src/**/*.md","src/index.md","src/**/*.vue"],
  title: null,
  description: 'Official Documentation Site for the BlockForge NFT Project',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'WhitePaper', link: '/blockforge/' },
      { text: 'Server Documentation', link: '/blockforge/placeholder' },
      { text: 'Gameplay Documentation', link: '/blockforge/placeholder' }
    ],
    sidebar: [

      {
        title: 'WhitePaper',
        collapsable: false,
        children: [
          ['/blockforge/welcome', 'Foreward'],
          ['/blockforge/Project_Scope', 'Project Scope'],
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
