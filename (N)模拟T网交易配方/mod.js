const cubemainFilename = "global\\excel\\cubemain.txt";
const cubemain = D2RMM.readTsv(cubemainFilename);
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
function twoWayRuneRecipe(inputList, outputList) {
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
  twoWayRuneRecipe(['r33'], ['r28', 'r15']);
  twoWayRuneRecipe(['r32'], ['r26', 'r15']);
  twoWayRuneRecipe(['r31'], ['r30', 'r28']);
  twoWayRuneRecipe(['r30'], ['r28', 'r28']);
  twoWayRuneRecipe(['r29'], ['r28', 'r27']);
  twoWayRuneRecipe(['r28'], ['r26', 'r26']);
  twoWayRuneRecipe(['r27'], ['r24', 'r24', 'r24']);
  twoWayRuneRecipe(['r26'], ['r25', 'r23']); // 马赛克，中期兑换率
  twoWayRuneRecipe(['r25'], ['r23', 'r23']); // 后期24和25等价，此配方分解后可以升级到24
  twoWayRuneRecipe(['r24'], ['r23', 'r21']);
  twoWayRuneRecipe(['r23'], ['r22', 'r20']);
  twoWayRuneRecipe(['r22'], ['r21', 'r20']);
  twoWayRuneRecipe(['r21'], ['r20', 'r18']);
  twoWayRuneRecipe(['r20'], ['r18', 'r15']);
  // r19-r2 r2-r19
  multiToOne('r19', 6, 'r23');
  for (let i = 19; i > 1; i--) {
    const rBig = 'r' + (i + '').padStart(2, '0');
    const rSmall = 'r' + ((i - 1) + '').padStart(2, '0');
    twoWayRuneRecipe([rBig], [rSmall]);
    if (rSmall === 'r8') {
      multiToOne(rSmall, 8, 'r23');
    } else if (rSmall === 'r15') {
      multiToOne(rSmall, 6, 'r24');
    } else if (rSmall === 'r16' || rSmall === 'r17') {
      multiToOne(rSmall, 8, 'r23');
    } else if (rSmall === 'r18') {
      multiToOne(rSmall, 6, 'r24');
    } else {
      multiToOne(rSmall, 8, 'r22');
    }
  }
}

const sName = {
  abow: 'Amazon Bow',// 亚马逊弓
  ajav: 'Amazon Javelin',// 亚马逊标枪
  aspe: 'Amazon Spear',// 亚马逊长矛
  amu: 'Amulet',// 项链
  h2h: 'Assassin Claw',// 刺客爪
  axe: 'Axe',// 斧头
  phlm: 'Barbarian Helm',// 野蛮人头盔
  belt: 'Belt',// 腰带
  tors: 'Body Armor',// 盔甲
  boot: 'Boot',// 鞋子
  bow: 'Bow',// 弓
  circ: 'Circlet',//头环
  club: 'Club',// 棍棒
  xbow: 'Crossbow',// 弩
  knif: 'Dagger',// 匕首
  pelt: 'Druid Pelt',// 德鲁伊头盔
  glov: 'Glove',// 手套
  hamm: 'Hammer',// 戰鎚
  helm: 'Helm',// 头盔
  jave: 'Javelin',// 标枪
  jew: 'Jewel',// 珠宝
  mace: 'Mace',// 钉锤
  ashd: 'Paladin Shield',// 圣骑士盾牌
  pole: 'Polearm',// 长柄武器
  tpot: 'Potion',// 攻击性药剂
  rin: 'Ring',// 戒指
  scep: 'Scepter',// 權杖
  shie: 'Shield',// 盾牌
  orb: 'Sorceress Orb',// 法师单手杖
  spea: 'Spear',// 长矛
  staf: 'Stave',// 法杖
  swor: 'Sword',// 剑
  taxe: 'Throwing Axe',// 飞斧
  tkni: 'Throwing Knife',// 飞刀
  head: 'Voodoo Head',// 死灵法师盾牌
  wand: 'Wand'// 魔杖
}

function runeAndGoodsRecipe(rune, type, unique) {
  const uniBaseRecipe = {
    ...baseRecipe,
    numinputs: 2,
    plvl: 100
  }
  cubemain.rows.push({
    ...uniBaseRecipe,
    description: `${rName[rune]} + ${sName[type]} -> ${unique}`,
    'input 1': rune,
    'input 2': type,
    output: unique
  });
  cubemain.rows.push({
    ...uniBaseRecipe,
    description: `${unique} + ${sName['jew']} -> ${rName[rune]}`,
    'input 1': unique,
    'input 2': 'jew',
    output: rune
  });
}

if (config.traderieNecessity) {
  // 戒指
  runeAndGoodsRecipe('r28', 'rin', `The Stone of Jordan`); // 乔丹之石
  runeAndGoodsRecipe('r26', 'rin', `Bul Katho's Wedding Band`); // 布爾凱索的婚戒
  runeAndGoodsRecipe('r24', 'rin', `Raven Frost`); // 乌鸦之霜
  runeAndGoodsRecipe('r22', 'rin', `Nature's Peace`); // 大自然的和平
  runeAndGoodsRecipe('r21', 'rin', `Nagelring`); // 拿各的戒指
  // 项链
  runeAndGoodsRecipe('r27', 'amu', `Mara's Kaleidoscope`); // 馬拉的萬花筒
  runeAndGoodsRecipe('r26', 'amu', `Tal Rasha's Adjudication`); // 塔拉夏的判決
  runeAndGoodsRecipe('r25', 'amu', `Highlord's Wrath`); // 大君之怒
  runeAndGoodsRecipe('r24', 'amu', `Metalgrid`); // 金屬網格
  runeAndGoodsRecipe('r22', 'amu', `Atma's Scarab`); // 亞特瑪的聖甲蟲
  runeAndGoodsRecipe('r20', 'amu', `The Cat's Eye`); // 猫眼
  // 头
  runeAndGoodsRecipe('r31', 'circ', `Griffon's Eye`); // 格里芬之眼
  runeAndGoodsRecipe('r29', 'helm', `Crown of Ages`); // 歲月之冠 年纪
  runeAndGoodsRecipe('r27', 'helm', `Andariel's Visage`); // 安达利尔的面容 安头
  runeAndGoodsRecipe('r26', 'helm', `Nightwing's Veil`); // 夜翼面紗 冰头
  runeAndGoodsRecipe('r25', 'phlm', `Arreat's Face`); // 亞瑞特的面容 飞机头
  runeAndGoodsRecipe('r23', 'helm', `Harlequin Crest`); // 諧角之冠 军帽
  runeAndGoodsRecipe('r22', 'helm', `Kira's Guardian`); // 奇拉的守護
  runeAndGoodsRecipe('r21', 'helm', `Guillaume's Face`); // 吉永之臉 cb头
  runeAndGoodsRecipe('r20', 'helm', `Tal Rasha's Horadric Crest`); // 塔拉夏的赫拉迪姆之冠
  // 法珠
  runeAndGoodsRecipe('r30', 'orb', `Fathom`); // 死亡深度
  runeAndGoodsRecipe('r26', 'orb', `Eschuta's temper`); // 艾斯屈塔的憤怒 脾气
  runeAndGoodsRecipe('r23', 'orb', `The Oculus`); // 核瞳 眼球
  runeAndGoodsRecipe('r20', 'orb', `Tal Rasha's Lidless Eye`); // 塔拉夏的警惕之眼
  // 亚马逊
  runeAndGoodsRecipe('r27', 'bow', `Windforce`); // 风之力
  runeAndGoodsRecipe('r24', 'ajav', `Titan's Revenge`); // 泰坦的復仇
  runeAndGoodsRecipe('r23', 'ajav', `Thunderstroke`); // 雷霆之擊
  // 死灵法师
  runeAndGoodsRecipe('r29', 'wand', `Deaths's Web`); // 破隐
  runeAndGoodsRecipe('r22', 'head', `Homunculus`); // 魔胎 侏儒 尿壶
  // 圣骑士
  runeAndGoodsRecipe('r23', 'scep', `Heaven's Light`);// 天堂之光
  // 其他武器
  runeAndGoodsRecipe('r25', 'pole', `The Reaper's Toll`); // 死神喪鐘
  runeAndGoodsRecipe('r24', 'swor', `Azurewrath`); // 碧藍怒火
  runeAndGoodsRecipe('r22', 'pole', `Tomb Reaver`); // 盜墓者
  runeAndGoodsRecipe('r21', 'swor', `Blade of Ali Baba`); // 阿里巴巴之刃
  // 护甲
  runeAndGoodsRecipe('r26', 'tors', `Tal Rasha's Howling Wind`); // 塔拉夏的守護 7+ 漆甲
  runeAndGoodsRecipe('r24', 'tors', `Skin of the Vipermagi`); // 蛇魔法師之皮
  runeAndGoodsRecipe('r22', 'tors', `Duriel's Shell`); // 都瑞爾之殼
  runeAndGoodsRecipe('r21', 'tors', `Skullder's Ire`); // 斯寇德的憤怒 ire
  runeAndGoodsRecipe('r20', 'tors', `Guardian Angel`); // 守護天使
  // 盾牌
  runeAndGoodsRecipe('r24', 'ashd', `Herald of Zakarum`); // 撒卡蘭姆使者 饰金盾
  runeAndGoodsRecipe('r23', 'shie', `Stormshield`); // 暴風之盾
  runeAndGoodsRecipe('r22', 'shie', `Lidless Wall`); // 警戒之墙
  // 手套
  runeAndGoodsRecipe('r23', 'glov', `Dracul's Grasp`); // 德古拉之握
  runeAndGoodsRecipe('r22', 'glov', `Magefist`); // 法師之拳
  runeAndGoodsRecipe('r21', 'glov', `Trang-Oul's Claws`); // 塔格奧之爪
  runeAndGoodsRecipe('r20', 'glov', `Chance Guards`); // 運氣守護
  // 腰带
  runeAndGoodsRecipe('r27', 'belt', `Arachnid Mesh`); // 蜘蛛之網 技能腰
  runeAndGoodsRecipe('r23', 'belt', `Thudergod's Vigor`); // 雷神之力
  runeAndGoodsRecipe('r22', 'belt', `Goldwrap`); // 黃金裹腰
  runeAndGoodsRecipe('r21', 'belt', `Tal Rasha's Fire-Spun Cloth`); // 塔拉夏的精織腰布
  //鞋子
  runeAndGoodsRecipe('r27', 'boot', `Shadowdancer`); // 影舞者
  runeAndGoodsRecipe('r25', 'boot', `Wartraveler`); // 戰爭旅者
  runeAndGoodsRecipe('r24', 'boot', `Gorerider`); // 蝕肉騎士 cb 鞋
  runeAndGoodsRecipe('r23', 'boot', `Sandstorm Trek`); // 沙暴之旅
  runeAndGoodsRecipe('r20', 'boot', `Silkweave`); // 紗織鞋
}


// 珠宝+弓＝亚马逊专用弓
// 珠宝+标枪＝亚马逊标枪
// 珠宝+矛＝亚马逊矛
// 珠宝+任意头盔＝野蛮人头盔
// 珠宝+木棒＝德鲁伊头盔
// 珠宝+双手法杖＝女巫法珠
// 珠宝+死灵魔杖＝死灵法师盾牌
// 珠宝+盾牌＝圣骑士盾牌
const occBaseRecipe = {
  ...baseRecipe,
  numinputs: 2,
  'input 1': 'jew',
  plvl: 100
}

if (config.occupationExclusiveItems) {
  // 珠宝+弓＝亚马逊专用弓，刷新配方不变
  cubemain.rows.push({
    ...occBaseRecipe,
    description: 'Bow + Jewel -> Random Ama Bow',
    'input 1': 'miss',
    output: `"abow,nor"`
  });
  // 珠宝+标枪＝亚马逊标枪，刷新配方不变
  cubemain.rows.push({
    ...occBaseRecipe,
    description: 'Javelin + Jewel -> Random Ama Javelin',
    'input 1': 'jave',
    output: `"ajav,nor"`
  });
  // 珠宝+矛＝亚马逊矛，刷新配方不变
  cubemain.rows.push({
    ...occBaseRecipe,
    description: 'Spear + Jewel -> Random Ama Spear',
    'input 1': 'spea',
    output: `"aspe,nor"`
  });
  // 珠宝+盾牌＝圣骑士盾牌
  cubemain.rows.push({
    ...occBaseRecipe,
    description: 'Shield + Jewel -> Random Pal Shield',
    'input 1': 'shie',
    output: `"ashd,nor"`
  });
  // 珠宝+双手法杖＝女巫法珠
  cubemain.rows.push({
    ...occBaseRecipe,
    description: 'Staff + Jewel -> Random Sor Orb',
    'input 1': 'staf',
    output: `"orb,nor"`
  });
  // 珠宝+死灵魔杖＝死灵法师盾牌
  cubemain.rows.push({
    ...occBaseRecipe,
    description: 'Wand + Jewel -> Random Nec Skull Shield',
    'input 1': 'wand',
    output: `"head,nor"`
  });
  // 珠宝+任意头盔＝野蛮人头盔
  cubemain.rows.push({
    ...occBaseRecipe,
    description: 'Helm + Jewel -> Random Bar Helm',
    'input 1': 'helm',
    output: `"phlm,nor"`
  });
  // 珠宝+木棒＝德鲁伊头盔
  cubemain.rows.push({
    ...occBaseRecipe,
    description: 'Club + Jewel -> Random Dru Helm',
    'input 1': 'club',
    output: `"pelt,nor"`
  });
}
D2RMM.writeTsv(cubemainFilename, cubemain);
