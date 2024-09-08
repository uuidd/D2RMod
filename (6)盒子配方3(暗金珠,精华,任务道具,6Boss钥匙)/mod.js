const cubemainFilename = "global\\excel\\cubemain.txt";
const cubemain = D2RMM.readTsv(cubemainFilename);

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

if (config.easierHatred) {
  cubemain.rows.push({
    description:
      "2 Twisted Essence of Suffering  ->  1 Charged Essence of Hatred",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "tes,qty=2",
    output: "ceh",
    "*eol\r": 0,
  });
}

if (config.easierTerror) {
  cubemain.rows.push({
    description:
      "3 Twisted Essence of Suffering  ->  1 Burning Essence of Terror",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "tes,qty=3",
    output: "bet",
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


// A2任务道具=回城书+6个大紫
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

// A3任务道具=回城书+3个大紫
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


