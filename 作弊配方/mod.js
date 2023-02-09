const cubemainFilename = "global\\excel\\cubemain.txt";
const cubemain = D2RMM.readTsv(cubemainFilename);

if (config.easierToken) {
  cubemain.rows.push({
    description:
      "Tome of Town Portal + Tome of Identify -> Token of Absolution",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "tbk",
    "input 2": "ibk",
    output: "toa",
    "*eol": 0,
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
      "*eol": 0,
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
      "*eol": 0,
    });
  }
}

if (config.easierCowPortal) {
  cubemain.rows.every((row) => {
    if (
      row.description ==
      "Wirt's Leg + Tome of Town Portal -> Portal to The Secret Cow Level"
    ) {
      row.description =
        "Scroll of Identify + Tome of Town Portal -> Portal to The Secret Cow Level";
      row["input 1"] = "isc";
      return false;
    }

    return true;
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
    "*eol": 0,
  });
  cubemain.rows.push({
    description: "Key of Hate -> Key of Destruction",
    enabled: 1,
    version: 100,
    numinputs: 1,
    "input 1": "pk2",
    output: "pk3",
    "*eol": 0,
  });
  cubemain.rows.push({
    description: "Key of Destruction -> Key of Terror",
    enabled: 1,
    version: 100,
    numinputs: 1,
    "input 1": "pk3",
    output: "pk1",
    "*eol": 0,
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
