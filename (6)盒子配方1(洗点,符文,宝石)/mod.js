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

// 符文降级
if (config.easierReduce) {
  for (let tier = 2; tier <= 33; tier++) {
    let previousTier = tier - 1;
    let outPut = 'r' + previousTier;
    let recipe = {
      description: '1 Rune ' + tier + '+ jew  -> 1 Rune ' + previousTier,
      enabled: 1,
      version: 100,
      numinputs: 2,
      "input 1": 'r' + tier,
      "input 2": 'jew',
      "output": outPut,
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
D2RMM.writeTsv(cubemainFilename, cubemain);


