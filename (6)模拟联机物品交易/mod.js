const cubemainFilename = "global\\excel\\cubemain.txt";
const cubemain = D2RMM.readTsv(cubemainFilename);
const baseRecipe = {
  enabled: 1,
  version: 100,
  '*eol\r': 0,
};

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
  twoWayRuneRecipe(['r20'], ['r18', 'r18']);
  multiToOne('r19', 3, 'r20'); // 添加 19# 符文升级不需要宝石
  multiToOne('r19', 8, 'r24');
  multiToOne('r18', 8, 'r24');
  multiToOne('r17', 8, 'r23');
  multiToOne('r16', 8, 'r22');
  multiToOne('r15', 8, 'r25');
  multiToOne('r14', 8, 'r20');
  multiToOne('r13', 8, 'r20');
  multiToOne('r12', 8, 'r20');
  multiToOne('r11', 8, 'r22');
  multiToOne('r10', 8, 'r20');
  multiToOne('r09', 8, 'r20');
  multiToOne('r08', 8, 'r22');
  multiToOne('r07', 8, 'r20');
  multiToOne('r06', 8, 'r20');
  multiToOne('r05', 8, 'r20');
  multiToOne('r04', 8, 'r20');
  multiToOne('r03', 8, 'r20');
  multiToOne('r02', 8, 'r20');
  multiToOne('r01', 8, 'r20');
  //
  multiToOne('r20', 5, 'r24'); // 5个20换24
  multiToOne('r23', 3, 'r26'); // 3个23换26
  multiToOne('r26', 4, 'r30'); // 4个26换30
  multiToOne('r26', 6, 'r31'); // 6个26换31
  // 5个20换1个24
  cubemain.rows.push({
    ...baseRecipe,
    description: `5 ${rName['r20']} -> ${rName['r24']}`,
    numinputs: 5,
    "input 1": "r20,qty=5",
    output: "r24",
  });

  // 3个20#符文 ➕ 18#符文 =>23#符文
    cubemain.rows.push({
    ...baseRecipe,
    description: `3 ${rName['r20']}+ ${rName['r18']} -> 2 ${rName['r23']}`,
    numinputs: 4,
    "input 1": "r20,qty=3",
    "input 2": "r18,qty=1",
    output: "r23"
  });
}

// ↓ r19-r2 + 1 jew    ↑ r1-r18 + 2 jew
if (config.traderieMinRunes) {
  for (let i = 19; i > 1; i--) {
    const rBig = 'r' + (i + '').padStart(2, '0');
    const rSmall = 'r' + ((i - 1) + '').padStart(2, '0');
    twoWayRuneRecipe([rBig], [rSmall]);
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
  cubemain.rows.push({
    ...baseRecipe,
    description: `${rName[rune]} + ${sName[type]} -> ${unique}`,
    numinputs: 2,
    'input 1': rune,
    'input 2': type,
    output: unique,
    lvl: 90
  });
  if (config.sellDowngrade) {
    rune = 'r' + ((rune.slice(-2) - 1) + '').padStart(2, '0'); // r08 => r07
  }
  cubemain.rows.push({
    ...baseRecipe,
    description: `${unique} -> 1 ${rName[rune]}`,
    numinputs: 1,
    'input 1': unique,
    output: rune
  });
}

// 符文和常用暗金/绿色物品互换
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
  // runeAndGoodsRecipe('r24', 'swor', `Azurewrath`); // 碧藍怒火
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
  runeAndGoodsRecipe('r22', 'belt', `Verdungo's Hearty Cord`); // 伐頓戈的強韌腰索 物免腰 心结
  runeAndGoodsRecipe('r21', 'belt', `Tal Rasha's Fire-Spun Cloth`); // 塔拉夏的精織腰布
  runeAndGoodsRecipe('r20', 'belt', `Goldwrap`); // 黃金裹腰
  runeAndGoodsRecipe('r19', 'belt', `Razortail`); // 剃刀之尾 穿刺腰带
  // 鞋子
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
  'input 2': 'yps',
  lvl: 85
}

if (config.occupationExclusiveItems) {
  // 珠宝+弓＝亚马逊专用弓，刷新配方不变
  cubemain.rows.push({
    ...occBaseRecipe,
    description: 'Bow + Jewel -> Random Ama Bow',
    'input 1': 'miss',
    output: `"abow,nor,bas"`
  });
  // 珠宝+标枪＝亚马逊标枪，刷新配方不变
  cubemain.rows.push({
    ...occBaseRecipe,
    description: 'Javelin + Jewel -> Random Ama Javelin',
    'input 1': 'jave',
    output: `"ajav,nor,bas"`
  });
  // 珠宝+矛＝亚马逊矛，刷新配方不变
  cubemain.rows.push({
    ...occBaseRecipe,
    description: 'Spear + Jewel -> Random Ama Spear',
    'input 1': 'spea',
    output: `"aspe,nor,bas"`
  });
  // 珠宝+盾牌＝圣骑士盾牌
  cubemain.rows.push({
    ...occBaseRecipe,
    description: 'Shield + Jewel -> Random Pal Shield',
    'input 1': 'shie',
    output: `"ashd,nor,bas"`
  });
  // 珠宝+双手法杖＝女巫法珠
  cubemain.rows.push({
    ...occBaseRecipe,
    description: 'Staff + Jewel -> Random Sor Orb',
    'input 1': 'staf',
    output: `"orb,nor,bas"`
  });
  // 珠宝+死灵魔杖＝死灵法师盾牌
  cubemain.rows.push({
    ...occBaseRecipe,
    description: 'Wand + Jewel -> Random Nec Skull Shield',
    'input 1': 'wand',
    output: `"head,nor,bas"`
  });
  // 珠宝+任意头盔＝野蛮人头盔
  cubemain.rows.push({
    ...occBaseRecipe,
    description: 'Helm + Jewel -> Random Bar Helm',
    'input 1': 'helm',
    output: `"phlm,nor,bas"`
  });
  // 珠宝+木棒＝德鲁伊头盔
  cubemain.rows.push({
    ...occBaseRecipe,
    description: 'Club + Jewel -> Random Dru Helm',
    'input 1': 'club',
    output: `"pelt,nor,bas"`
  });
}

const gemName = {
  gpv: "Perfect Amethyst",// 紫PG
  gpy: "Perfect Topaz",// 黄PG
  gpb: "Perfect Sapphire",// 蓝PG
  gpg: "Perfect Emerald",// 绿PG
  gpr: "Perfect Ruby",// 红PG
  gpw: "Perfect Diamond", // 白PG
  skz: "Perfect Skull" // 完美骷髅
}


function gemToOneAmethyst(gem, num) {
  const gemRecipe = {
    ...baseRecipe,
    description: `6 ${gemName[gem]} -> ${num} ${gemName['gpv']}`,
    numinputs: 6,
    'input 1': `"${gem},qty=6"`,
    output: 'gpv',
    'output b': 'gpv'
  }
  if (num === 3) {
    cubemain.rows.push({...gemRecipe, 'output c': 'gpv'});
  } else {
    cubemain.rows.push(gemRecipe);
  }
}


if (config.runeAndGemstone) {
  // 宝石换成紫宝石
  gemToOneAmethyst('gpy', 2);
  gemToOneAmethyst('gpb', 2);
  gemToOneAmethyst('gpg', 2);
  gemToOneAmethyst('gpr', 3);
  gemToOneAmethyst('gpw', 2);
  gemToOneAmethyst('skz', 3);

  // 1 完美宝石 = 3 无暇宝石
  const gemClass = ['w', 'g', 'y', 'b', 'r'];
  for (const gem of gemClass) {
    cubemain.rows.push({
      ...baseRecipe,
      description: "1 Perfect " + gem + "= 3 Flawless " + gem,
      numinputs: 1,
      "input 1": "gp" + gem,
      output: "gl" + gem,
      "output b": "gl" + gem,
      "output c": "gl" + gem,
    });
  }
  cubemain.rows.push({
    ...baseRecipe,
    description: "1 Perfect v = 3 Flawless v",
    numinputs: 1,
    "input 1": "gpv",
    output: "gzv",
    "output b": "gzv",
    "output c": "gzv",
  });
  cubemain.rows.push({
    ...baseRecipe,
    description: "1 Perfect sk = 3 Flawless sk",
    numinputs: 1,
    "input 1": "skz",
    output: "skl",
    "output b": "skl",
    "output c": "skl",
  });

  // 20# + 无暇紫宝石 <=> 3 完美紫宝石
  cubemain.rows.push({
    ...baseRecipe,
    description: `1 ${rName['r20']} + 1 Flawless Amethyst -> 3 ${gemName['gpv']}`,
    numinputs: 2,
    "input 1": "r20",
    "input 2": "gzv",
    output: "gpv",
    "output b": "gpv",
    "output c": "gpv",
  });
  cubemain.rows.push({
    ...baseRecipe,
    description: `3 ${gemName['gpv']} -> 1 ${rName['r20']} + 1 Flawless Amethyst`,
    numinputs: 3,
    "input 1": "gpv,qty=3",
    output: "r20",
    "output b": "gzv",
  });

  // 8# + 钥匙 <=> 1 完美紫宝石 + 钥匙
  cubemain.rows.push({
    ...baseRecipe,
    description: `1 ${rName['r08']} + 1 Key -> 1 ${gemName['gpv']} + 1 Key`,
    numinputs: 2,
    "input 1": "r08",
    "input 2": "key",
    output: "gpv",
    "output b": "key",
  });
  cubemain.rows.push({
    ...baseRecipe,
    description: `1 ${gemName['gpv']} + 1 Key -> 1 ${rName['r08']} + 1 Key`,
    numinputs: 2,
    "input 1": "gpv",
    "input 2": "key",
    output: "r08",
    "output b": "key",
  });
  // 8个无暇紫换1个20
  cubemain.rows.push({
    ...baseRecipe,
    description: `8 ${gemName['gpv']} -> 1 ${rName['r20']}`,
    numinputs: 8,
    "input 1": 'gzv,qty=8',
    output: "r20"
  });
}

if (config.runeAndJew) {
  // 20# + 蓝色珠宝 -> 3 亮金珠宝
  cubemain.rows.push({
    ...baseRecipe,
    description: `1 ${rName['r20']} + 1 Thawing Potion -> 3 Rare Jewel`,
    numinputs: 2,
    "input 1": "r20",
    "input 2": "wms",
    output: "jew,rar",
    "output b": "jew,rar",
    "output c": "jew,rar",
    plvl: 100,
    'b plvl': 100,
    'c plvl': 100
  });
  // 1 亮金珠宝 -> 3 蓝色珠宝
  cubemain.rows.push({
    ...baseRecipe,
    description: `1 Rare Jewel -> 3 Magic Jewel`,
    numinputs: 1,
    "input 1": "jew,rar",
    output: "jew,mag",
    "output b": "jew,mag",
    "output c": "jew,mag",
    plvl: 100,
    'b plvl': 100,
    'c plvl': 100
  });
  // 8 蓝色珠宝 -> 20#
  cubemain.rows.push({
    ...baseRecipe,
    description: `9 Magic Jewel -> 1 ${rName['r20']}`,
    numinputs: 9,
    "input 1": "jew,mag,qty=9",
    output: "r20"
  });
}
if (config.runeAndWhile) {
  // 四孔君主盾
  cubemain.rows.push({
    ...baseRecipe,
    description: `${rName['r20']} + ${sName['shie']} -> Normal Monarch`,
    numinputs: 2,
    'input 1': 'r20',
    'input 2': 'shie',
    output: 'uit,nor',
    'mod 1': 'sock',
    'mod 1 min': 4,
    'mod 1 max': 4,
    lvl: 72
  });
  // 四孔水晶剑
  cubemain.rows.push({
    ...baseRecipe,
    description: `${rName['r08']} + ${sName['swor']} -> Normal Crystal Sword`,
    numinputs: 2,
    'input 1': 'r08',
    'input 2': 'swor',
    output: 'crs,nor',
    'mod 1': 'sock',
    'mod 1 min': 4,
    'mod 1 max': 4,
    lvl: 30
  });
}

function uniqueCharm(rune, gem, charm) {
  cubemain.rows.push({
    ...baseRecipe,
    description: `${rName[rune]} + ${gemName[gem]} + ExtraLarge Charm -> ${charm}`,
    numinputs: 3,
    'input 1': rune,
    'input 2': 'cm3',
    'input 3': gem,
    output: charm,
    lvl: 85
  });

}

if (config.runeAndUniqueCharm) {
  uniqueCharm("r24", 'gpb', "Cold Rupture"); // 破冰 蓝
  uniqueCharm("r24", 'gpv', "Crack of the Heavens"); // 破电 紫
  uniqueCharm("r23", 'gpr', "Flame Rift"); // 破火 红
  uniqueCharm("r23", 'gpw', "Bone Break"); // 破物 白
  uniqueCharm("r23", 'skz', "Black Cleft"); // 破魔 骷髅
  uniqueCharm("r22", 'gpg', "Rotting Fissure"); // 破毒 绿

  // 3 个暗金大板子 => 2 个 #20
  cubemain.rows.push({
    ...baseRecipe,
    description: "3 unique charm -> 2 rune20",
    numinputs: 3,
    'input 1': 'cm3,uni,qty=3',
    output: 'r20',
    "output b": 'r20'
  });
}

D2RMM.writeTsv(cubemainFilename, cubemain);
