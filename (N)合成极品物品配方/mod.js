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
    description: `3 unique Amulet -> Mara's Kaleidoscope`,
    numinputs: 3,
    'input 1': `"amu,uni,qty=3"`,
    output: `Mara's Kaleidoscope`
  });
}

if (config.mara26) {
  cubemain.rows.push({
    ...baseRecipe,
    description: `r26 + 1 Amulet -> Mara's Kaleidoscope`,
    numinputs: 2,
    'input 1': 'amu',
    'input 2': 'r26',
    output: `Mara's Kaleidoscope`
  });
}

if (config.mara32) {
  cubemain.rows.push({
    ...baseRecipe,
    description: `r32 + 1 Amulet -> Mara's Kaleidoscope`,
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
    description: `3 unique ring -> The Stone of Jordan`,
    numinputs: 3,
    'input 1': `"rin,uni,qty=3"`,
    output: `The Stone of Jordan`
  });
}

if (config.soj28) {
  cubemain.rows.push({
    ...baseRecipe,
    description: `r28 + ring -> The Stone of Jordan`,
    numinputs: 2,
    'input 1': 'rin',
    'input 2': 'r28',
    output: `The Stone of Jordan`
  });
}

if (config.soj33) {
  cubemain.rows.push({
    ...baseRecipe,
    description: `r33 + ring -> The Stone of Jordan`,
    numinputs: 2,
    'input 1': 'rin',
    'input 2': 'r33',
    output: `The Stone of Jordan`
  });
}

if (config.torchToSmallCharm) {
  cubemain.rows.push({
    ...baseRecipe,
    description: '2 Torch -> 3 SmallCharm',
    numinputs: 4,
    'input 1': `"cm2,uni,qty=1"`,
    'input 2': `"jew,qty=3"`,
    output: `"cm1,mag,pre=322,suf=349"`, // smallCharm5res20lift
    'output b': `"cm1,mag,pre=256,suf=349"`, // smallCharm3max20ar20lift
    'output c': `"cm1,mag,pre=303,suf=349"` // smallCharm17mana20lift
  });
}

function inputDic(inputList) {
  const inputDic = {};
  let i = 0;
  if (inputList.length === 2) {
    if (inputList[0] === inputList[1]) {
      inputDic['input 1'] = `"${inputList[0]},qty=2"`;
      return inputDic
    }
  } else if (inputList.length === 3) {
    if (inputList[0] === inputList[1] && inputList[1] === inputList[2]) {
      inputDic['input 1'] = `"${inputList[0]},qty=3"`;
      return inputDic
    }
  }
  for (; i < inputList.length; i++) {
    inputDic['input ' + (i + 1)] = inputList[i];
  }
  return inputDic
}

function outputDic(outputList) {
  const outputDic = {};
  const numToABC = ['output', 'output b', 'output c'];
  for (let i = 0; i < outputList.length; i++) {
    outputDic[numToABC[i]] = outputList[i];
  }
  return outputDic
}

function twoWayRecipe(inputList, outputList) {
  inputList.push('jew');
  const inputDic1 = inputDic(inputList);
  const outputDic1 = outputDic(outputList);
  cubemain.rows.push({
    ...baseRecipe,
    description: `${inputList.join(' + ')} -> ${outputList.join(' + ')}`,
    numinputs: inputList.length,
    ...inputDic1,
    ...outputDic1
  });

  // reverse
  inputList.pop();
  const inputDic2 = inputDic(outputList);
  const outputDic2 = outputDic(inputList);
  cubemain.rows.push({
    ...baseRecipe,
    description: `${outputList.join(' + ')} -> ${inputList.join(' + ')}`,
    numinputs: outputList.length,
    ...inputDic2,
    ...outputDic2
  });
}

if (config.traderie) {
  twoWayRecipe(['r33'], ['r28', 'r15']);
  twoWayRecipe(['r32'], ['r26', 'r15']);
  twoWayRecipe(['r31'], ['r30', 'r28']);
  twoWayRecipe(['r30'], ['r28', 'r28']);
  twoWayRecipe(['r28'], ['r26', 'r26']);
  twoWayRecipe(['r27'], ['r24', 'r24', 'r24']);
  twoWayRecipe(['r26'], ['r25', 'r23']); // 马赛克，中后期兑换率
  twoWayRecipe(['r25'], ['r23', 'r23']); // 中后期24和25等价，此配方分解后可以升级到24
  twoWayRecipe(['r24'], ['r23', 'r22']);
  twoWayRecipe(['r23'], ['r22', 'r21']);
  twoWayRecipe(['r22'], ['r21', 'r20']);
  cubemain.rows.push({
    ...baseRecipe,
    description: '8 r24 -> r30',
    numinputs: 8,
    'input 1': 'r24,qty=8',
    output: 'r30'
  });
}

D2RMM.writeTsv(cubemainFilename, cubemain);
