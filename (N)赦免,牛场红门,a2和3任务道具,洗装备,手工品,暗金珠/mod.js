const cubemainFilename = "global\\excel\\cubemain.txt";
const cubemain = D2RMM.readTsv(cubemainFilename);

// 赦免徽章
if (config.easierToken) {
  cubemain.rows.push({
    description:
      "Scroll of Town Portal + Scroll of Identify -> Token of Absolution",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "tsc",
    "input 2": "isc",
    output: "toa",
    "*eol\r": 0,
  });
}

// 符文不需要宝石升级
if (config.easierRunes) {
  const midRunes = [
    "3 Thul Runes -> Amn Rune",
    "3 Amn Runes -> Sol Rune",
    "3 Sol Runes -> Shael Rune",
    "3 Shael Runes -> Dol Rune",
    "3 Dol Runes -> Hel Rune",
    "3 Hel Runes -> Io Rune",
    "3 Io Runes -> Lum Rune",
    "3 Lum Runes -> Ko Rune",
    "3 Ko Runes -> Fal Rune",
    "3 Fal Runes -> Lem Rune",
    "3 Lem Runes -> Pul Rune",
  ];
  const highRunes = [
    "2 Pul Runes -> Um Rune",
    "2 Um Runes -> Mal Rune",
    "2 Mal Runes -> Ist Rune",
    "2 Ist Runes -> Gul Rune",
    "2 Gul Runes -> Vex Rune",
    "2 Vex Runes -> Ohm Rune",
    "2 Ohm Runes -> Lo Rune",
    "2 Lo Runes -> Sur Rune",
    "2 Sur Runes -> Ber Rune",
    "2 Ber Runes -> Jah Rune",
    "2 Jah Runes -> Cham Rune",
    "2 Cham Runes -> Zod Rune",
  ];

  let count = midRunes.length;

  for (let i = 0; i < count; i++) {
    let runeNum = i + 10;
    let recipe = '"r' + runeNum + ',qty=3"';
    let output = "r" + (runeNum + 1);

    cubemain.rows.push({
      description: midRunes[i],
      enabled: 1,
      version: 100,
      numinputs: 3,
      "input 1": recipe,
      output: output,
      "*eol\r": 0,
    });
  }

  count = highRunes.length;

  for (let i = 0; i < count; i++) {
    let runeNum = i + 21;
    let recipe = '"r' + runeNum + ',qty=2"';
    let output = "r" + (runeNum + 1);

    cubemain.rows.push({
      description: highRunes[i],
      enabled: 1,
      version: 100,
      numinputs: 2,
      "input 1": recipe,
      output: output,
      "*eol\r": 0,
    });
  }
}

// 牛场红门
if (config.easierCowPortal) {
  cubemain.rows.push({
    description:
      "Tome of Town Portal + Tome of Identify -> Portal to The Secret Cow Level",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "tbk",
    "input 2": "ibk",
    output: "Cow Portal",
    "*eol\r": 0,
  });
}

// 钥匙类型转换
if (config.convertPandemoniumKeys) {
  cubemain.rows.push({
    description: "Key of Terror -> Key of Hate",
    enabled: 1,
    version: 100,
    numinputs: 1,
    "input 1": "pk1",
    output: "pk2",
    "*eol\r": 0,
  });
  cubemain.rows.push({
    description: "Key of Hate -> Key of Destroy",
    enabled: 1,
    version: 100,
    numinputs: 1,
    "input 1": "pk2",
    output: "pk3",
    "*eol\r": 0,
  });
  cubemain.rows.push({
    description: "Key of Destroy -> Key of Terror",
    enabled: 1,
    version: 100,
    numinputs: 1,
    "input 1": "pk3",
    output: "pk1",
    "*eol\r": 0,
  });
}

// 洗蓝色物品
if (config.easierRollMagicItem) {
  const costs = ['rvl', 'gem0', 'gem1', 'gem2', 'gem3', 'gem4'];
  for (const co of costs) {
    cubemain.rows.push({
      description:
        "1 Magic Item + " + co + "-> Re-rolled Magic Item",
      enabled: 1,
      version: 100,
      numinputs: 2,
      "input 1": "any,mag",
      "input 2": co,
      output: "usetype,mag",
      ilvl: 100,
      "*eol\r": 0,
    });
  }
}

// 洗亮金物品
if (config.easierRollRareItem) {
  const costs = ['rvl', 'gem0', 'gem1', 'gem2', 'gem3', 'gem4'];
  for (const co of costs) {
    cubemain.rows.push({
      description:
        "1 Rare Item + " + co + "-> Re-rolled Rare Item",
      enabled: 1,
      version: 100,
      numinputs: 2,
      "input 1": "any,rar",
      "input 2": co,
      output: "usetype,rar",
      ilvl: 100,
      "*eol\r": 0,
    });
  }
}

// A1/A2 + A3 + A4 = A5精华
if (config.easierDestruction) {
  cubemain.rows.push({
    description:
      "1 Twisted Essence of Suffering + 1 Charged Essence of Hatred + 1 Burning Essence of Terror -> 1 Festering Essence of Destruction",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "tes",
    "input 2": "ceh",
    "input 3": "bet",
    output: "fed",
    "*eol\r": 0,
  });
}

// 1 完美宝石 = 3 无暇宝石
if (config.releasePerfectGem) {
  const gemClass = ['w', 'g', 'y', 'b', 'r'];
  for (const gem of gemClass) {
    cubemain.rows.push({
      description:
        "1 Perfect " + gem + "= 3 Flawless " + gem,
      enabled: 1,
      version: 100,
      numinputs: 1,
      "input 1": "gp" + gem,
      output: "gl" + gem,
      "output b": "gl" + gem,
      "output c": "gl" + gem,
      "*eol\r": 0,
    });
  }
  cubemain.rows.push({
    description:
      "1 Perfect v = 3 Flawless v",
    enabled: 1,
    version: 100,
    numinputs: 1,
    "input 1": "gpv",
    output: "gzv",
    "output b": "gzv",
    "output c": "gzv",
    "*eol\r": 0,
  });
  cubemain.rows.push({
    description:
      "1 Perfect sk = 3 Flawless sk",
    enabled: 1,
    version: 100,
    numinputs: 1,
    "input 1": "skz",
    output: "skl",
    "output b": "skl",
    "output c": "skl",
    "*eol\r": 0,
  });
}

// 精华种类循环
if (config.easierEssence) {
  cubemain.rows.push({
    description: "A1A2->A3",
    enabled: 1,
    version: 100,
    numinputs: 1,
    "input 1": "tes",
    output: "ceh",
    "*eol\r": 0,
  });

  cubemain.rows.push({
    description: "A3->A4",
    enabled: 1,
    version: 100,
    numinputs: 1,
    "input 1": "ceh",
    output: "bet",
    "*eol\r": 0,
  });
  cubemain.rows.push({
    description: "A4->A5",
    enabled: 1,
    version: 100,
    numinputs: 1,
    "input 1": "bet",
    output: "fed",
    "*eol\r": 0,
  });
  cubemain.rows.push({
    description: "A5->A1/A2",
    enabled: 1,
    version: 100,
    numinputs: 1,
    "input 1": "fed",
    output: "tes",
    "*eol\r": 0,
  });
}

// 手工品
if (config.easierManual) {
  cubemain.rows.forEach((row) => {
      if (row.output === '"usetype,crf"') {
        let recipe = {...row};
        recipe['input 3'] = 'gem3';
        recipe['description'] = 'Demo: ' + recipe['description'];
        let pg = recipe['input 4'];
        if (pg === 'gpb') { // 蓝PG
          recipe['input 4'] = 'wms'; // 融冰药剂
        } else if (pg === 'gpr') { // 红PG
          recipe['input 4'] = 'hpot'; // 红药
        } else if (pg === 'gpv') { // 紫PG
          recipe['input 4'] = 'mpot';
        } else if (pg === 'gpg') { // 绿PG
          recipe['input 4'] = 'yps';
        }
        cubemain.rows.push(recipe);
        let recipe2 = {...recipe}
        recipe2['input 2'] = 'rune';
        cubemain.rows.push(recipe2);
      }
    }
  )
}

// 英雄旗帜将装备转无形
if (config.easierEthereal) {
  const rarity = ['low', 'nor', 'hiq', 'mag', 'rar', 'set', 'uni', 'crf']
  for (const ra of rarity) {
    let recipe = {
      enabled: 1,
      version: 100,
      numinputs: 2,
      "input 2": '"std,qty=1"',
      output: '"useitem"',
      "mod 1": "ethereal",
      "mod 1 min": 1,
      "mod 1 max": 1,
      "*eol\r": 0,
    }
    recipe['description'] = "1 armo " + ra + " + 1 flag -> armo " + ra + " ethereal";
    recipe['input 1'] = '"armo,' + ra + '"';
    cubemain.rows.push(recipe);
    let recipe2 = {...recipe};
    recipe2['description'] = "1 weap " + ra + " + 1 flag -> weap " + ra + " ethereal";
    recipe2['input 1'] = '"weap,' + ra + '"';
    cubemain.rows.push(recipe2);
  }
}

// 符文降级
if (config.easierReduce) {
  for (let tier = 2; tier <= 33; tier++) {
    let previousTier = tier - 1;
    let outPut = 'r' + previousTier;
    let recipe = {
      description: '1 Rune ' + tier + '+ 2 jew + 1 Potion -> 1 Rune ' + previousTier + ' + 1 Potion',
      enabled: 1,
      version: 100,
      numinputs: 4,
      "input 1": 'r' + tier,
      "input 2": '"jew,qty=2"',
      "input 3": 'vps',
      "output": outPut,
      "output b": "vps",
      "*eol\r": 0,
    };
    cubemain.rows.push(recipe);
  }
}

// 完美宝石合成珠宝
if (config.genJew) {
  let recipe = {
    description: '2 gem4 -> 1 jew',
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": 'gem4,qty=2',
    output: 'jew',
    plvl: 100,
    "*eol\r": 0,
  };
  cubemain.rows.push(recipe);
}

// 暗金大板子加珠宝合成暗金珠宝（彩虹刻面
if (config.genUniqueJew) {
  let recipe1 = {
    description: '1 Unique GC + 1 jew -> 1 unique jew',
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": 'jew,any',
    "input 2": 'cm3,uni',
    output: 'jew,uni',
    plvl: 100,
    "*eol\r": 0,
  };
  let recipe2 = {
    description: '1 unique jew + 3 gem4 -> new 1 unique jew',
    enabled: 1,
    version: 100,
    numinputs: 4,
    "input 1": 'jew,uni',
    "input 2": 'gem4,qty=3',
    output: 'Rainbow Facet',
    plvl: 100,
    "*eol\r": 0,
  };
  cubemain.rows.push(recipe1);
  cubemain.rows.push(recipe2);
}

// 洗暗金珠宝属性
if (config.rollHellfire) {
  let recipe1 = {
    description: '1 Hellfire Torch + 3 gem4 -> new 1 Hellfire Torch',
    enabled: 1,
    version: 100,
    numinputs: 4,
    "input 1": 'cm2,uni',
    "input 2": 'gem4,qty=3',
    output: 'usetype,uni',
    ilvl: 100,
    "*eol\r": 0,
  };
  cubemain.rows.push(recipe1);
}

// A2任务道具=回城书+6个大紫,op=28代表有条件限制
// 有个注意的地方,当你身上本身带有零件时比如蛇项链，直接简化合成会无效还会消耗掉，和op没关系
if (config.a2task_item) {
  cubemain.rows.push({
    'description': "tbk + 6 rvl = Horadric Staff",
    'enabled': 1,
    'version': 100,
    'op': 28,
    'numinputs': 7,
    'input 1': 'tbk',
    'input 2': 'rvl,qty=6',
    'output': 'hst',
    '*eol\r': 0
  });
}

// A3任务道具=回城书+3个大紫,op=28代表有条件限制
// 有个注意的地方,当你身上本身带有零件时比如眼球，直接简化合成会无效还会消耗掉，和op没关系
if (config.a3task_item) {
  cubemain.rows.push({
    'description': "1 tbk + 3 rvl = Khalim's Will",
    'enabled': 1,
    'version': 100,
    'op': 28,
    'numinputs': 4,
    'input 1': 'tbk',
    'input 2': 'rvl,qty=3',
    'output': 'qf2',
    '*eol\r': 0
  });
}



D2RMM.writeTsv(cubemainFilename, cubemain);


