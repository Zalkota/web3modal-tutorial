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
          ['/blockforge/Battle_Mode', 'Battle Mode'],
          ['/blockforge/battle-pass', 'Battle Pass NFT'],
          ['/blockforge/Staking_Battle_Pass', 'Staking Battle Pass'],
          ['/blockforge/Renting_Battle_Pass', 'Renting Battle Pass'],
          ['/blockforge/Plots', 'Claiming Plots'],
          ['/blockforge/PlotStaking', 'Staking Plots'],
          ['/blockforge/ForgeToken', '$FORGE Token']
        ]
      },
      {
        title: 'GamePlay',
        collapsable: false,
        children: [
          ['/blockforge/BlockForgeUniverse','Defense Of The Diamonds'],
          ['/blockforge/GameMechanics','Arenas']
        ]
      },
      {
        title: 'Server Documentation',
        collapsable: false,
        children: [
          ['/blockforge/ServerDocumentation', 'Connect to Server']
        ]
      }
    ]
  }
};
