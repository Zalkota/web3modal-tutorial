module.exports = {
  title: 'BlockForge Docs',
  description: 'Documentation for the BlockForge Minecraft Server',
  themeConfig: {
    nav: [
      { text: 'BlockForge', link: '/blockforge/' }
    ],
    sidebar: [
      {
        title: 'Blockforge',
        collapsable: false,
        children: [
          ['/blockforge/welcome', 'Welcome'],
          ['/blockforge/battle-pass', 'battle Pass']
        ]
      }
    ]
  }
};
