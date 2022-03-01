module.exports = {
  title: 'BlockForge Documentation',
  description: 'Documentation for the BlockForge Minecraft Server & WhitePaper',
  themeConfig: {
    nav: [
      { text: 'BlockForge', link: '/blockforge/' }
    ],
    sidebar: [
      {
        title: 'Blockforge WhitePaper',
        collapsable: false,
        children: [
          //['/blockforge/welcome', 'Foreward'],
          ['/blockforge/Project_Scope', 'Project Scope'],
          ['/blockforge/Battle-Pass', 'Battle Pass'],
          ['/blockforge/Staking_Battle_Pass', 'Stake your BlockForge Battle Pass'],
          ['/blockforge/Renting_Battle_Pass', 'Renting your Staked Battle Pass'],
          ['/blockforge/Plots', 'Purchasing Plots'],
          ['/blockforge/PlotStaking', 'Staking Your Plot']
        ]
      }
    ]
  }
};
