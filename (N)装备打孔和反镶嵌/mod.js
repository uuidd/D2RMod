const cubemainFilename = 'global\\excel\\cubemain.txt';
const cubemain = D2RMM.readTsv(cubemainFilename);
if (config.unsocket) {
  const unsocketRecipe = {
    description: 'Empty Sockets',
    enabled: 1,
    version: 100,
    numinputs: 2,
    // input 1 defined below
    'input 2': config.item,
    output: '"useitem,rem"',
    '*eol': 0,
  };

  cubemain.rows.push({
    ...unsocketRecipe,
    description: `${unsocketRecipe.description} On Armor`,
    'input 1': `"armo,sock"`,
  });

  cubemain.rows.push({
    ...unsocketRecipe,
    description: `${unsocketRecipe.description} On Weapon`,
    'input 1': `"weap,sock"`,
  });
}

// 打孔配方
function playSocket(rarity, maxSocket) {
  for (let sockets = 1; sockets <= maxSocket; sockets = sockets + 1) {
    if (config.socket) {
      const socketRecipe = {
        description: 'Add ' + rarity + ` ${sockets} Sockets`,
        enabled: 1,
        version: 100,
        numinputs: sockets + 1,
        // input 1 defined below
        'input 2': `"jew,qty=${sockets}"`,
        output: 'useitem',
        'mod 1': 'sock',
        'mod 1 min': sockets,
        'mod 1 max': sockets,
        '*eol\r': 0,
      };
      cubemain.rows.push({
        ...socketRecipe,
        description: `${socketRecipe.description} To Armor`,
        'input 1': '"armo,' + rarity + ',nos"',
      });
      cubemain.rows.push({
        ...socketRecipe,
        description: `${socketRecipe.description} To Weapon`,
        'input 1': '"weap,' + rarity + ',nos"',
      });
    }
  }
}

if (config.maxSocket) {
  // 限制打孔数
  playSocket("nor", 6);
  playSocket("hiq", 6);
  playSocket("mag", 4);
  playSocket("rar", 2);
  playSocket("set", 1);
  playSocket("uni", 1);
} else {
  for (let sockets = 1; sockets <= 6; sockets = sockets + 1) {
    if (config.socket) {
      const socketRecipe = {
        description: `Add ${sockets} Sockets`,
        enabled: 1,
        version: 100,
        numinputs: sockets + 1,
        // input 1 defined below
        'input 2': `"${config.item},qty=${sockets}"`,
        output: 'useitem',
        'mod 1': 'sock',
        'mod 1 min': sockets,
        'mod 1 max': sockets,
        '*eol': 0,
      };

      cubemain.rows.push({
        ...socketRecipe,
        description: `${socketRecipe.description} To Armor`,
        'input 1': '"armo,nos"',
      });

      cubemain.rows.push({
        ...socketRecipe,
        description: `${socketRecipe.description} To Weapon`,
        'input 1': '"weap,nos"',
      });
    }
  }
}
D2RMM.writeTsv(cubemainFilename, cubemain);
