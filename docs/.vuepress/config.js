module.exports = {
  extraWatchFiles: ["src/**/*.md","src/index.md","src/**/*.vue"],
  title: null,
  description: 'Official Documentation Site for the BlockForge NFT Project',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'WhitePaper', link: '/blockforge/' },
      { text: 'Gameplay Documentation', link: '/blockforge/GameMechanics' },
      { text: 'Server Documentation', link: '/blockforge/placeholder' }
    ],
    sidebar: [

      {
        title: 'WhitePaper',
        collapsable: false,
        children: [
          ['/blockforge/welcome', 'Foreward'],
          ['/blockforge/Project_Timeline', 'Project Roadmap'],
          ['/blockforge/Project_Scope', 'Project Scope'],
          ['/blockforge/battle-pass', 'Battle Pass NFT'],
          ['/blockforge/Staking_Battle_Pass', 'Staking Battle Pass'],
          ['/blockforge/Renting_Battle_Pass', 'Renting Battle Pass'],
          ['/blockforge/Plots', 'Purchasing Plots'],
          ['/blockforge/PlotStaking', 'Staking Plots'],
          ['/blockforge/ForgeToken', '$FORGE Token']
        ]
      },
      {
        title: 'GamePlay',
        collapsable: false,
        children: [
          ['/blockforge/BlockForgeUniverse','BlockForge Universe'],
          ['/blockforge/GameMechanics','Arenas']
        ]
      },
      {
        title: 'Server Documentation',
        collapsable: false,
        children: [
          ['/blockforge/placeholder', 'Connect to Server']
        ]
      }
    ]
  }
};
