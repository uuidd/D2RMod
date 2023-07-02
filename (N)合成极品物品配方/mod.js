const cubemainFilename = "global\\excel\\cubemain.txt";
const cubemain = D2RMM.readTsv(cubemainFilename);
// 做符合原版的极品物品 Make high-quality items that match the original version

// pre= 为 global\excel\magicprefix.txt 对应词缀行号-2
// suf= 为 global\excel\magicsuffix.txt 对应词缀行号-2
const baseRecipe = {
  enabled: 1,
  version: 100,
  '*eol\r': 0,
};

const jewRecipe = {
  ...baseRecipe,
  description: 'Magic jew - Increased Attack Speed 15',
  numinputs: 3,
  plvl: 100,
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
const rName = {
  'r01': "el(01)",
  'r02': "eld(02)",
  'r03': "tir(03)",
  'r04': "nef(04)",
  'r05': "eth(05)",
  'r06': "ith(06)",
  'r07': "tal(07)",
  'r08': "ral(08)",
  'r09': "ort(09)",
  'r10': "thul(10)",
  'r11': "amn(11)",
  'r12': "sol(12)",
  'r13': "shael(13)",
  'r14': "dol(14)",
  'r15': "hel(15)",
  'r16': "io(16)",
  'r17': "lum(17)",
  'r18': "ko(18)",
  'r19': "fal(19)",
  'r20': "lem(20)",
  'r21': "pul(21)",
  'r22': "um(22)",
  'r23': "mal(23)",
  'r24': "ist(24)",
  'r25': "gul(25)",
  'r26': "vex(26)",
  'r27': "ohm(27)",
  'r28': "lo(28)",
  'r29': "sur(29)",
  'r30': "ber(30)",
  'r31': "jah(31)",
  'r32': "cham(32)",
  'r33': "zod(33)"
}

// 合成马拉
if (config.mara3) {
  cubemain.rows.push({
    ...baseRecipe,
    description: `3 unique Amulet -> Mara's Kaleidoscope`,
    numinputs: 3,
    plvl: 100,
    'input 1': `"amu,uni,qty=3"`,
    output: `Mara's Kaleidoscope`
  });
}

if (config.mara26) {
  cubemain.rows.push({
    ...baseRecipe,
    description: `r26 + 1 Amulet -> Mara's Kaleidoscope`,
    numinputs: 2,
    plvl: 100,
    'input 1': 'amu',
    'input 2': 'r26',
    output: `Mara's Kaleidoscope`
  });
}

// 合成乔丹
if (config.soj3) {
  cubemain.rows.push({
    ...baseRecipe,
    description: `3 unique ring -> The Stone of Jordan`,
    numinputs: 3,
    plvl: 100,
    'input 1': `"rin,uni,qty=3"`,
    output: `The Stone of Jordan`
  });
}

if (config.soj28) {
  cubemain.rows.push({
    ...baseRecipe,
    description: `r28 + ring -> The Stone of Jordan`,
    numinputs: 2,
    plvl: 100,
    'input 1': 'rin',
    'input 2': 'r28',
    output: `The Stone of Jordan`
  });
}

if (config.torchToSmallCharm) {
  cubemain.rows.push({
    ...baseRecipe,
    description: '1 Torch -> smallCharm3-5res16-20lift + smallCharm1-3max10-20ar16-20lift + smallCharm13-17mana16-20lift',
    numinputs: 4,
    plvl: 100,
    'input 1': `"cm2,uni,qty=1"`,
    'input 2': `"jew,qty=3"`,
    output: `"cm1,mag,pre=322,suf=349"`, // smallCharm3-5res16-20lift
    'output b': `"cm1,mag,pre=256,suf=349"`, // smallCharm1-3max10-20ar16-20lift
    'output c': `"cm1,mag,pre=303,suf=349"` // smallCharm13-17mana16-20lift
  });
}

// 返回多个 input 列字典
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
    } else if (inputList[1] === inputList[2]) {
      inputDic['input 1'] = inputList[0];
      inputDic['input 2'] = `"${inputList[1]},qty=2"`;
      return inputDic
    }
  }
  for (; i < inputList.length; i++) {
    inputDic['input ' + (i + 1)] = inputList[i];
  }
  return inputDic
}

// 返回多个 output 字典
function outputDic(outputList) {
  const outputDic = {};
  const numToABC = ['output', 'output b', 'output c'];
  for (let i = 0; i < outputList.length; i++) {
    outputDic[numToABC[i]] = outputList[i];
  }
  return outputDic
}

// 返回 description 列文本
function genDescription(inputList, outputList) {
  let input = [];
  let output = [];
  let re = /^r\d+/
  for (const inputListElement of inputList) {
    if (inputListElement.match(re)) {
      input.push(`${rName[inputListElement]}`);
    } else {
      input.push(inputListElement);
    }
  }
  for (const outputListElement of outputList) {
    if (outputListElement.match(re)) {
      output.push(`${rName[outputListElement]}`);
    } else {
      output.push(outputListElement);
    }
  }
  return `${input.join(' + ')} -> ${output.join(' + ')}`;
}

// 珠宝是手续费
function twoWayRecipe(inputList, outputList) {
  inputList.push('jew');
  const inputDic1 = inputDic(inputList);
  const outputDic1 = outputDic(outputList);
  cubemain.rows.push({
    ...baseRecipe,
    description: genDescription(inputList, outputList),
    numinputs: inputList.length,
    ...inputDic1,
    ...outputDic1
  });

  // reverse
  inputList.pop();
  if (outputList.length === 1 && inputList.length === 1) {
    outputList.push('jew');
    outputList.push('jew');
  }
  const inputDic2 = inputDic(outputList);
  const outputDic2 = outputDic(inputList);
  cubemain.rows.push({
    ...baseRecipe,
    description: genDescription(outputList, inputList),
    numinputs: outputList.length,
    ...inputDic2,
    ...outputDic2
  });
}

/*
multi: r15 输入物品代码
num: 6 物品个数
one, r24 输入物品代码
 */
function multiToOne(multi, num, one) {
  cubemain.rows.push({
    ...baseRecipe,
    description: `${num} ${rName[multi]} -> ${rName[one]}`,
    numinputs: num,
    'input 1': `"${multi},qty=${num}"`,
    output: one
  });
}

// 模拟T网交易，以中后期为准
if (config.traderieRunes) {
  twoWayRecipe(['r33'], ['r28', 'r15']);
  twoWayRecipe(['r32'], ['r26', 'r15']);
  twoWayRecipe(['r31'], ['r30', 'r28']);
  twoWayRecipe(['r30'], ['r28', 'r28']);
  twoWayRecipe(['r28'], ['r26', 'r26']);
  twoWayRecipe(['r27'], ['r24', 'r24', 'r24']);
  twoWayRecipe(['r26'], ['r25', 'r23']); // 马赛克，中后期兑换率
  twoWayRecipe(['r25'], ['r23', 'r23']); // 中后期24和25等价，此配方分解后可以升级到24
  twoWayRecipe(['r24'], ['r23', 'r21']);
  twoWayRecipe(['r23'], ['r22', 'r20']);
  twoWayRecipe(['r22'], ['r21', 'r20']);
  twoWayRecipe(['r21'], ['r20', 'r18']);
  twoWayRecipe(['r20'], ['r18', 'r15']);
  // r19-r2 r2-r19
  multiToOne('r19', 8, 'r24');
  for (let i = 19; i > 1; i--) {
    const rBig = 'r' + (i + '').padStart(2, '0');
    const rSmall = 'r' + ((i - 1) + '').padStart(2, '0');
    twoWayRecipe([rBig], [rSmall]);
    if (rSmall === 'r15') {
      multiToOne(rSmall, 6, 'r24');
    } else {
      multiToOne(rSmall, 8, 'r24');
    }
  }
}


// 珠宝+弓＝亚马逊专用弓
// 珠宝+标枪＝亚马逊标枪
// 珠宝+矛＝亚马逊矛
// 珠宝+任意头盔＝野蛮人头盔
// 珠宝+木棒＝德鲁伊头盔
// 珠宝+双手法杖＝女巫法珠
// 珠宝+单手法杖＝死灵法师盾牌
// 珠宝+盾牌＝圣骑士盾牌
// 珠宝+刺客武器＝刺客武器
// 珠宝+死灵法师盾牌＝死灵法师盾牌
// 珠宝+圣骑士盾＝圣骑士盾
// 珠宝+女巫法珠＝女巫法珠
if (config.occupationExclusiveItems) {
  const occBaseRecipe = {
    ...baseRecipe,
    numinputs: 2,
    'input 1': 'jew',
    'output b': 'jew',
    plvl: 100
  }
  cubemain.rows.push({
    ...occBaseRecipe,
    description: 'Bow + Jewel -> Random Ama Bow',
    'input 1': 'miss',
    output: `"abow,hiq"`
  });
  cubemain.rows.push({
    ...occBaseRecipe,
    description: 'Javelin + Jewel -> Random Ama Javelin',
    'input 1': 'jave',
    output: `"ajav,hiq"`
  });
  cubemain.rows.push({
    ...occBaseRecipe,
    description: 'Spear + Jewel -> Random Ama Spear',
    'input 1': 'spea',
    output: `"aspe,hiq"`
  });
  cubemain.rows.push({
    ...occBaseRecipe,
    description: 'Shield + Jewel -> Random Pal Shield',
    'input 1': 'shie',
    output: `"ashd,hiq"`
  });
  cubemain.rows.push({
    ...occBaseRecipe,
    description: 'Staff + Jewel -> Random Sor Orb',
    'input 1': 'staf',
    output: `"orb,hiq"`
  });
  cubemain.rows.push({
    ...occBaseRecipe,
    description: 'Asn Weapon + Jewel -> Random Asn Weapon',
    'input 1': 'h2h',
    output: `"h2h,hiq"`
  });
  cubemain.rows.push({
    ...occBaseRecipe,
    description: 'Wand + Jewel -> Random Nec Skull Shield',
    'input 1': 'wand',
    output: `"head,hiq"`
  });
  cubemain.rows.push({
    ...occBaseRecipe,
    description: 'Helm + Jewel -> Random Bar Helm',
    'input 1': 'helm',
    output: `"phlm,hiq"`
  });
  cubemain.rows.push({
    ...occBaseRecipe,
    description: 'Club + Jewel -> Random Dru Helm',
    'input 1': 'club',
    output: `"pelt,hiq"`
  });
  cubemain.rows.push({
    ...occBaseRecipe,
    description: 'Pelt + Jewel -> Random Dru Helm',
    'input 1': 'pelt',
    output: `"pelt,hiq"`
  });
  cubemain.rows.push({
    ...occBaseRecipe,
    description: 'Pal Shield + Jewel -> Random Pal Shield',
    'input 1': 'ashd',
    output: `"ashd,hiq"`
  });
  cubemain.rows.push({
    ...occBaseRecipe,
    description: 'Sor Orb + Jewel -> Random Sor Orb',
    'input 1': 'orb',
    output: `"orb,hiq"`
  });
  cubemain.rows.push({
    ...occBaseRecipe,
    description: 'Nec Skull Shield + Jewel -> Random Nec Skull Shield',
    'input 1': 'head',
    output: `"head,hiq"`
  });
}
D2RMM.writeTsv(cubemainFilename, cubemain);
