const cubemainFilename = "global\\excel\\cubemain.txt";
const cubemain = D2RMM.readTsv(cubemainFilename);

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


D2RMM.writeTsv(cubemainFilename, cubemain);


