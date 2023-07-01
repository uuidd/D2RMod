const cubemainFilename = "global\\excel\\cubemain.txt";
const cubemain = D2RMM.readTsv(cubemainFilename);
// 做符合原版的极品物品
// pre= 为 global\excel\magicprefix.txt 对应词缀行号-2
// suf= 为 global\excel\magicsuffix.txt 对应词缀行号-2
const jewRecipe = {
  description: 'Magic jew - Increased Attack Speed 15',
  enabled: 1,
  version: 100,
  numinputs: 3,
  'input 1': `"jew,rar"`,
  plvl: 100,
  '*eol\r': 0,
};
// 15攻速31-40ed蓝色珠宝(红白珠)
if (config.jew15sp40ed) {
  cubemain.rows.push({
    ...jewRecipe,
    description: `${jewRecipe.description} Enhanced Damage: 31-40`,
    'input 2': 'r15',
    'input 3': 'r27',
    output: `"jew,mag,pre=202,suf=171"`
  });
}

// 15攻速11-15全抗蓝色珠宝
if (config.jew15sp15res) {
  cubemain.rows.push({
    ...jewRecipe,
    description: `${jewRecipe.description} to All Resistances: 12-15`,
    'input 2': 'r15',
    'input 3': 'r22',
    output: `"jew,mag,pre=337,suf=171"`
  });
}

// 15攻速16-30火炕蓝色珠宝(安头珠)
if (config.jew15sp30fire) {
  cubemain.rows.push({
    ...jewRecipe,
    description: `${jewRecipe.description} Fire Resist: 16-30`,
    'input 2': 'r15',
    'input 3': 'r8',
    output: `"jew,mag,pre=376,suf=171"`
  });
}
D2RMM.writeTsv(cubemainFilename, cubemain);
