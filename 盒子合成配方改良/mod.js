const cubemainFilename = "global\\excel\\cubemain.txt";
const cubemain = D2RMM.readTsv(cubemainFilename);

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
    description: "Key of Hate -> Key of Destruction",
    enabled: 1,
    version: 100,
    numinputs: 1,
    "input 1": "pk2",
    output: "pk3",
    "*eol\r": 0,
  });
  cubemain.rows.push({
    description: "Key of Destruction -> Key of Terror",
    enabled: 1,
    version: 100,
    numinputs: 1,
    "input 1": "pk3",
    output: "pk1",
    "*eol\r": 0,
  });
}
if (config.easierRollMagicItem) {
  cubemain.rows.push({
    description:
      "1 Magic Item + 1 Full Rejuvenation Potion-> Re-rolled Magic Item",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "any,mag",
    "input 2": "rvl",
    output: "usetype,mag",
    ilvl: 100,
    "*eol\r": 0,
  });
  cubemain.rows.push({
    description:
      "1 Magic Item + 1 Rejuvenation Potions-> Re-rolled Magic Item",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "any,mag",
    "input 2": "rvs",
    output: "usetype,mag",
    ilvl: 100,
    "*eol\r": 0,
  });
  cubemain.rows.push({
    description:
      "1 Magic Item + 1 gem0 -> Re-rolled Magic Item",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "any,mag",
    "input 2": "gem0",
    output: "usetype,mag",
    ilvl: 100,
    "*eol\r": 0,
  });
  cubemain.rows.push({
    description:
      "1 Magic Item + 1 gem1 -> Re-rolled Magic Item",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "any,mag",
    "input 2": "gem1",
    output: "usetype,mag",
    ilvl: 100,
    "*eol\r": 0,
  });
  cubemain.rows.push({
    description:
      "1 Magic Item + 1 gem2 -> Re-rolled Magic Item",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "any,mag",
    "input 2": "gem2",
    output: "usetype,mag",
    ilvl: 100,
    "*eol\r": 0,
  });
  cubemain.rows.push({
    description:
      "1 Magic Item + 1 gem3 -> Re-rolled Magic Item",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "any,mag",
    "input 2": "gem3",
    output: "usetype,mag",
    ilvl: 100,
    "*eol\r": 0,
  });
  cubemain.rows.push({
    description:
      "1 Magic Item + 1 gem4 -> Re-rolled Magic Item",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "any,mag",
    "input 2": "gem4",
    output: "usetype,mag",
    ilvl: 100,
    "*eol\r": 0,
  });
}

if (config.easierRollRareItem) {
  cubemain.rows.push({
    description:
      "1 Rare Item + 1 Full Rejuvenation Potion -> Re-rolled Rare Item",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "any,rar",
    "input 2": "rvl",
    output: "usetype,rar",
    ilvl: 100,
    "*eol\r": 0,
  });
  cubemain.rows.push({
    description:
      "1 Rare Item + 1 Rejuvenation Potions -> Re-rolled Rare Item",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "any,rar",
    "input 2": "rvs",
    output: "usetype,rar",
    ilvl: 100,
    "*eol\r": 0,
  });
  cubemain.rows.push({
    description:
      "1 Rare Item + 1 gem0 -> Re-rolled Rare Item",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "any,rar",
    "input 2": "gem0",
    output: "usetype,rar",
    ilvl: 100,
    "*eol\r": 0,
  });
  cubemain.rows.push({
    description:
      "1 Rare Item + 1 gem1 -> Re-rolled Rare Item",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "any,rar",
    "input 2": "gem1",
    output: "usetype,rar",
    ilvl: 100,
    "*eol\r": 0,
  });
  cubemain.rows.push({
    description:
      "1 Rare Item + 1 gem2 -> Re-rolled Rare Item",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "any,rar",
    "input 2": "gem2",
    output: "usetype,rar",
    ilvl: 100,
    "*eol\r": 0,
  });
  cubemain.rows.push({
    description:
      "1 Rare Item + 1 gem3 -> Re-rolled Rare Item",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "any,rar",
    "input 2": "gem3",
    output: "usetype,rar",
    ilvl: 100,
    "*eol\r": 0,
  });
  cubemain.rows.push({
    description:
      "1 Rare Item + 1 gem4 -> Re-rolled Rare Item",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "any,rar",
    "input 2": "gem4",
    output: "usetype,rar",
    ilvl: 100,
    "*eol\r": 0,
  });

}


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

if (config.easierAmulet) {
  cubemain.rows.push({
    description: "蓝色项链 + 蓝药 + 无暇宝石(不分颜色) + 任意符文 = 施法项链",
    enabled: 1,
    version: 100,
    numinputs: 4,
    "input 1": "amul,mag",
    "input 2": "gem3",
    "input 3": "mpot",
    "input 4": "rune",
    output: '"usetype,crf"',
    plvl: 50,
    ilvl: 50,
    "mod 1": "regen-mana",
    "mod 1 min": 4,
    "mod 1 max": 10,
    "mod 2": "mana",
    "mod 2 min": 10,
    "mod 2 max": 20,
    "mod 3": "cast1",
    "mod 3 min": 5,
    "mod 3 max": 10,
    "*eol\r": 0,
  });
  cubemain.rows.push({
    description: "蓝色项链 + 蓝药 + 无暇宝石(不分颜色) + 珠宝 = 施法项链",
    enabled: 1,
    version: 100,
    numinputs: 4,
    "input 1": "amul,mag",
    "input 2": "gem3",
    "input 3": "mpot",
    "input 4": "jew",
    output: '"usetype,crf"',
    plvl: 50,
    ilvl: 50,
    "mod 1": "regen-mana",
    "mod 1 min": 4,
    "mod 1 max": 10,
    "mod 2": "mana",
    "mod 2 min": 10,
    "mod 2 max": 20,
    "mod 3": "cast1",
    "mod 3 min": 5,
    "mod 3 max": 10,
    "*eol\r": 0,
  });
  cubemain.rows.push({
    description: "蓝色项链 + 红药 + 无暇宝石(不分颜色) + 任意符文 = 吸血项链",
    enabled: 1,
    version: 100,
    numinputs: 4,
    "input 1": "amul,mag",
    "input 2": "gem3",
    "input 3": "hpot",
    "input 4": "rune",
    output: '"usetype,crf"',
    plvl: 50,
    ilvl: 50,
    "mod 1": "lifesteal",
    "mod 1 min": 1,
    "mod 1 max": 4,
    "mod 2": "hp",
    "mod 2 min": 10,
    "mod 2 max": 20,
    "mod 3": "move1",
    "mod 3 min": 5,
    "mod 3 max": 10,
    "*eol\r": 0,
  });
  cubemain.rows.push({
    description: "蓝色项链 + 红药 + 无暇宝石(不分颜色) + 珠宝 = 吸血项链",
    enabled: 1,
    version: 100,
    numinputs: 4,
    "input 1": "amul,mag",
    "input 2": "gem3",
    "input 3": "hpot",
    "input 4": "jew",
    output: '"usetype,crf"',
    plvl: 50,
    ilvl: 50,
    "mod 1": "lifesteal",
    "mod 1 min": 1,
    "mod 1 max": 4,
    "mod 2": "hp",
    "mod 2 min": 10,
    "mod 2 max": 20,
    "mod 3": "move1",
    "mod 3 min": 5,
    "mod 3 max": 10,
    "*eol\r": 0,
  });
}
if (config.easierRing) {
  cubemain.rows.push({
    description: "蓝色戒指 + 红药 + 无暇宝石(不分颜色) + 任意符文 = 吸血戒指",
    enabled: 1,
    version: 100,
    numinputs: 4,
    "input 1": "ring,mag",
    "input 2": "gem3",
    "input 3": "hpot",
    "input 4": "rune",
    output: '"usetype,crf"',
    plvl: 50,
    ilvl: 50,
    "mod 1": "lifesteal",
    "mod 1 min": 1,
    "mod 1 max": 3,
    "mod 2": "hp",
    "mod 2 min": 10,
    "mod 2 max": 20,
    "mod 3": "str",
    "mod 3 min": 1,
    "mod 3 max": 5,
    "*eol\r": 0,
  });
  cubemain.rows.push({
    description: "蓝色戒指 + 红药 + 无暇宝石(不分颜色) + 珠宝 = 吸血戒指",
    enabled: 1,
    version: 100,
    numinputs: 4,
    "input 1": "ring,mag",
    "input 2": "gem3",
    "input 3": "hpot",
    "input 4": "jew",
    output: '"usetype,crf"',
    plvl: 50,
    ilvl: 50,
    "mod 1": "lifesteal",
    "mod 1 min": 1,
    "mod 1 max": 3,
    "mod 2": "hp",
    "mod 2 min": 10,
    "mod 2 max": 20,
    "mod 3": "str",
    "mod 3 min": 1,
    "mod 3 max": 5,
    "*eol\r": 0,
  });
  cubemain.rows.push({
    description: "蓝色戒指 + 蓝药 + 无暇宝石(不分颜色) + 任意符文 = 施法戒指",
    enabled: 1,
    version: 100,
    numinputs: 4,
    "input 1": "ring,mag",
    "input 2": "gem3",
    "input 3": "mpot",
    "input 4": "rune",
    output: '"usetype,crf"',
    plvl: 50,
    ilvl: 50,
    "mod 1": "regen-mana",
    "mod 1 min": 4,
    "mod 1 max": 10,
    "mod 2": "mana",
    "mod 2 min": 10,
    "mod 2 max": 20,
    "mod 3": "mana%",
    "mod 3 min": 1,
    "mod 3 max": 5,
    "*eol\r": 0,
  });
  cubemain.rows.push({
    description: "蓝色戒指 + 蓝药 + 无暇宝石(不分颜色) + 珠宝 = 施法戒指",
    enabled: 1,
    version: 100,
    numinputs: 4,
    "input 1": "ring,mag",
    "input 2": "gem3",
    "input 3": "mpot",
    "input 4": "jew",
    output: '"usetype,crf"',
    plvl: 50,
    ilvl: 50,
    "mod 1": "regen-mana",
    "mod 1 min": 4,
    "mod 1 max": 10,
    "mod 2": "mana",
    "mod 2 min": 10,
    "mod 2 max": 20,
    "mod 3": "mana%",
    "mod 3 min": 1,
    "mod 3 max": 5,
    "*eol\r": 0,
  });
}

if (config.easierGloves) {
  cubemain.rows.push({
    description: "蓝色重/鲨皮/吸血鬼骸骨手套 + 红药 +  无暇宝石(不分颜色) + 任意符文或珠宝 = 压碎性手套（武学标马手套）",
    enabled: 1,
    version: 100,
    numinputs: 4,
    "input 1": "vgl,mag,upg",
    "input 2": "gem3",
    "input 3": "hpot",
    "input 4": "rune",
    output: '"usetype,crf"',
    plvl: 50,
    ilvl: 50,
    "mod 1": "lifesteal",
    "mod 1 min": 1,
    "mod 1 max": 3,
    "mod 2": "hp",
    "mod 2 min": 10,
    "mod 2 max": 20,
    "mod 3": "crush",
    "mod 3 min": 5,
    "mod 3 max": 10,
    "*eol\r": 0,
  });
  cubemain.rows.push({
    description: "蓝色重/鲨皮/吸血鬼骸骨手套 + 红药 + 无暇宝石(不分颜色) + 珠宝 = 吸血手套",
    enabled: 1,
    version: 100,
    numinputs: 4,
    "input 1": "vgl,mag,upg",
    "input 2": "gem3",
    "input 3": "hpot",
    "input 4": "jew",
    output: '"usetype,crf"',
    plvl: 50,
    ilvl: 50,
    "mod 1": "lifesteal",
    "mod 1 min": 1,
    "mod 1 max": 3,
    "mod 2": "hp",
    "mod 2 min": 10,
    "mod 2 max": 20,
    "mod 3": "crush",
    "mod 3 min": 5,
    "mod 3 max": 10,
    "*eol\r": 0,
  });
  cubemain.rows.push({
    description: "蓝色皮/魔皮/荆棘连指手套+ 蓝药 + 无暇宝石(不分颜色) + 任意符文 = 施法手套",
    enabled: 1,
    version: 100,
    numinputs: 4,
    "input 1": "lgl,mag,upg",
    "input 2": "gem3",
    "input 3": "mpot",
    "input 4": "rune",
    output: '"usetype,crf"',
    plvl: 50,
    ilvl: 50,
    "mod 1": "regen-mana",
    "mod 1 min": 4,
    "mod 1 max": 10,
    "mod 2": "mana",
    "mod 2 min": 10,
    "mod 2 max": 20,
    "mod 3": "mana-kill",
    "mod 3 min": 1,
    "mod 3 max": 3,
    "*eol\r": 0,
  });
  cubemain.rows.push({
    description: "蓝色皮/魔皮/荆棘连指手套+ 蓝药 + 无暇宝石(不分颜色) + 珠宝 = 施法手套",
    enabled: 1,
    version: 100,
    numinputs: 4,
    "input 1": "lgl,mag,upg",
    "input 2": "gem3",
    "input 3": "mpot",
    "input 4": "jew",
    output: '"usetype,crf"',
    plvl: 50,
    ilvl: 50,
    "mod 1": "regen-mana",
    "mod 1 min": 4,
    "mod 1 max": 10,
    "mod 2": "mana",
    "mod 2 min": 10,
    "mod 2 max": 20,
    "mod 3": "mana-kill",
    "mod 3 min": 1,
    "mod 3 max": 3,
    "*eol\r": 0,
  });
}
if (config.easierEthereal) {
  cubemain.rows.push({
    description: "armo uni -> armo uni ethereal",
    enabled: 1,
    version: 100,
    numinputs: 7,
    "input 1": '"armo,uni"',
    "input 2": '"rune,qty=6"',
    output: '"useitem"',
    "mod 1": "ethereal",
    "mod 1 min": 1,
    "mod 1 max": 1,
    "*eol\r": 0,
  });
  cubemain.rows.push({
    description: "weap uni -> weap uni ethereal",
    enabled: 1,
    version: 100,
    numinputs: 7,
    "input 1": '"weap,uni"',
    "input 2": '"rune,qty=6"',
    output: '"useitem"',
    "mod 1": "ethereal",
    "mod 1 min": 1,
    "mod 1 max": 1,
    "*eol\r": 0,
  });
  cubemain.rows.push({
    description: "armo hiq -> armo hiq ethereal",
    enabled: 1,
    version: 100,
    numinputs: 7,
    "input 1": '"armo,hiq"',
    "input 2": '"rune,qty=6"',
    output: '"useitem"',
    "mod 1": "ethereal",
    "mod 1 min": 1,
    "mod 1 max": 1,
    "*eol\r": 0,
  });
  cubemain.rows.push({
    description: "weap hiq -> weap hiq ethereal",
    enabled: 1,
    version: 100,
    numinputs: 7,
    "input 1": '"weap,hiq"',
    "input 2": '"rune,qty=6"',
    output: '"useitem"',
    "mod 1": "ethereal",
    "mod 1 min": 1,
    "mod 1 max": 1,
    "*eol\r": 0,
  });
}
D2RMM.writeTsv(cubemainFilename, cubemain);

const monstatsFilename = "global\\excel\\monstats.txt";
const monstats = D2RMM.readTsv(monstatsFilename);

if (config.levelingMultiplier != 100) {
  monstats.rows.forEach((row) => {
    if (row.Exp) {
      row["Exp"] = Math.floor(row["Exp"] * (config.levelingMultiplier / 100));
      row["Exp(N)"] = Math.floor(row["Exp(N)"] * (config.levelingMultiplier / 100));
      row["Exp(H)"] = Math.floor(row["Exp(H)"] * (config.levelingMultiplier / 100));
    }
  });
}

D2RMM.writeTsv(monstatsFilename, monstats);

const charstatsFilename = "global\\excel\\charstats.txt";
const charstats = D2RMM.readTsv(charstatsFilename);

charstats.rows.forEach((row) => {
  if (row.class !== "Expansion") {
    row.ManaRegen = config.manaRegen;

    if (config.cubeStart) {
      if (row.item5 == 0) {
        row.item5 = "box";
        row.item5count = 1;
      } else {
        row.item6 = "box";
        row.item6count = 1;
      }
    }
  }
});

D2RMM.writeTsv(charstatsFilename, charstats);
