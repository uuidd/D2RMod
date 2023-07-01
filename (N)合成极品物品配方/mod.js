const cubemainFilename = "global\\excel\\cubemain.txt";
const cubemain = D2RMM.readTsv(cubemainFilename);
// 做符合原版的极品物品 Make high-quality items that match the original version

// pre= 为 global\excel\magicprefix.txt 对应词缀行号-2
// suf= 为 global\excel\magicsuffix.txt 对应词缀行号-2
const baseRecipe = {
  enabled: 1,
  version: 100,
  plvl: 100,
  '*eol\r': 0,
};

const jewRecipe = {
  ...baseRecipe,
  description: 'Magic jew - Increased Attack Speed 15',
  numinputs: 3,
  'input 1': `"jew,rar"`,
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

// 合成马拉
if (config.mara3) {
  cubemain.rows.push({
    ...baseRecipe,
    description: `3 unique Amulet = Mara's Kaleidoscope`,
    numinputs: 3,
    'input 1': 'amu,uni,qty=3',
    output: `Mara's Kaleidoscope`
  });
}

if (config.mara26) {
  cubemain.rows.push({
    ...baseRecipe,
    description: `r26 + 1 Amulet = Mara's Kaleidoscope`,
    numinputs: 2,
    'input 1': 'amu',
    'input 2': 'r26',
    output: `Mara's Kaleidoscope`
  });
}

if (config.mara32) {
  cubemain.rows.push({
    ...baseRecipe,
    description: `r32 + 1 Amulet = Mara's Kaleidoscope`,
    numinputs: 2,
    'input 1': 'amu',
    'input 2': 'r32',
    output: `Mara's Kaleidoscope`
  });
}

// 合成乔丹
if (config.soj3) {
  cubemain.rows.push({
    ...baseRecipe,
    description: `3 unique ring = The Stone of Jordan`,
    numinputs: 3,
    'input 1': 'rin,uni,qty=3',
    output: `The Stone of Jordan`
  });
}

if (config.soj28) {
  cubemain.rows.push({
    ...baseRecipe,
    description: `r28 + ring = The Stone of Jordan`,
    numinputs: 2,
    'input 1': 'rin',
    'input 2': 'r28',
    output: `The Stone of Jordan`
  });
}

if (config.soj33) {
  cubemain.rows.push({
    ...baseRecipe,
    description: `r33 + ring = The Stone of Jordan`,
    numinputs: 2,
    'input 1': 'rin',
    'input 2': 'r33',
    output: `The Stone of Jordan`
  });
}



D2RMM.writeTsv(cubemainFilename, cubemain);
