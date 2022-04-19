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
          ['/blockforge/TheVision', 'The Vision'],
          ['/blockforge/Project_Timeline', 'Project Roadmap'],
          ['/blockforge/Battle_Mode', 'Battle Mode'],
          ['/blockforge/battle-pass', 'Battle Pass NFT'],
          ['/blockforge/Staking_Battle_Pass', 'Staking Battle Passes'],
          ['/blockforge/Renting_Battle_Pass', 'Renting Battle Passes'],
          ['/blockforge/Plots', 'Claiming Plot NFTs'],
          ['/blockforge/PlotStaking', 'Staking Plot NFTs'],
          ['/blockforge/ForgeToken', '$FORGE Token']
        ]
      },
      {
        title: 'GamePlay',
        collapsable: false,
        children: [
          ['/blockforge/DefenseOfTheDiamonds','Defense Of The Diamonds'],
          ['/blockforge/Arenas','Arenas'],
          ['/blockforge/NPCs', 'NPCs']
        ]
      },
      {
        title: 'Server Documentation',
        collapsable: false,
        children: [
          ['/blockforge/ServerDocumentation', 'Connect to Server'],
          ['/blockforge/OfficialLinks', 'Official Links']

        ]
      }
    ]
  }
};
